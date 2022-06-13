import React from 'react';
import Web3 from 'web3';
import { providers, constants } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Home from './Components/Home';
import eventBus from './Components/EventBus';
import { tokenInfo, contractInfo } from './contractInfo';
import './App.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

let web3, token, contract;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "e1ca38f0c58f4681bf723d6ebb6da5d2", // required
    }
  }
}

let web3Modal
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions, // required
    theme: "dark",
  });
}

class Container extends React.Component {

  constructor() {
    super()

    this.state = {
      address: '',
      nativeBalance: 0,
      isConnected: false,
      referrer: '0x0000000000000000000000000000000000000000',
      contractBalance: '',
      tokenBalance: '',
      stakedBalance: '',
      referralBonus: '',
      claimableReward: '',
      referralCount: '',
      depositFee: '',
      withdrawFee: '',
      referralFee: '',
      dailyReturn: '',
      provider: null,
      web3Provider: null
    }

    this.connectWallet = this.connectWallet.bind(this)
    this.approveToken = this.approveToken.bind(this)
    this.displayNotification = this.displayNotification.bind(this)
  }

  async connectWallet() {
    if(this.state.isConnected === true) return

    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider)
    const signer = web3Provider.getSigner()
    const account = await signer.getAddress()
    const nativeBalance = (await signer.getBalance()).toString()

    web3 = new Web3(provider)
    token = new web3.eth.Contract(tokenInfo.abi, tokenInfo.address)
    contract = new web3.eth.Contract(contractInfo.abi, contractInfo.address)

    // if(await web3.eth.getChainId() !== 56) {
    //   await web3Provider.provider.request({
    //     method: 'wallet_switchEthereumChain',
    //     params: [{ chainId: '0x38' }]
    //   });
    // }

    this.setState({
      address: account,
      nativeBalance: nativeBalance,
      isConnected: true,
      provider,
      web3Provider
    }, () => {
      this.state.provider.on("accountsChanged", this.handleAccountsChanged)
      this.state.provider.on("chainChanged", this.handleChainChanged)
      eventBus.dispatch('walletConnected', {
        'address': account,
        'nativeBalance': nativeBalance
      })
    })
  }

  stakeToken = (amount) => {
    contract.methods.invest(this.state.referrer, web3.utils.toWei(amount.toString(), 'ether')).send({
      from: this.state.address,
    }).then(() => {
      this.displayNotification('success', `${amount} $666 staked successfully.`)
      eventBus.dispatch('updateState', {})
    }).catch(() => {
      this.displayNotification('error', 'Transaction error!')
    })
  }

  withdrawToken = async() => {
    let state = await contract.methods.getUserWithdrawableState(this.state.address).call();
    if(state === false) {
      this.displayNotification('warning', "You can't withdraw your initial funds for 14 days.")
      return
    }

    let preBalance = await token.methods.balanceOf(this.state.address).call();
    contract.methods.withdraw().send({
      from: this.state.address,
    }).then(async () => {
      let curBalance = await token.methods.balanceOf(this.state.address).call();
      let diff = this.convertWeiToEther(web3.utils.fromWei(preBalance, 'ether') - web3.utils.fromWei(curBalance, 'ether'))
      this.displayNotification('success', `${diff} $666 withdrawed successfully.`)
      eventBus.dispatch('updateState', {})
    }).catch(() => {
      this.displayNotification('error', 'Transaction error!')
    })
  }

  compoundDivident = () => {
    contract.methods.compoundDividends().send({
      from: this.state.address,
    }).then(() => {
      this.displayNotification('success', `Success!.`)
      eventBus.dispatch('updateState', {})
    }).catch(() => {
      this.displayNotification('error', 'Transaction error!')
    })
  }

  claimReward = () => {
    contract.methods.claimReward().send({
      from: this.state.address,
    }).then(() => {
      this.displayNotification('success', `Success!.`)
      eventBus.dispatch('updateState', {})
    }).catch(() => {
      this.displayNotification('error', 'Transaction error!')
    })
  }

  getReferrer = () => {
    let url = window.location.href
    if(url.indexOf('ref') !== -1) {
      let referrer = url.slice(url.indexOf('ref') + 4, url.length)
      console.log(referrer)
      this.setState({
        ...this.state,
        referrer
      })
    }
    // return <Redirect to={url} />
  }

  convertWeiToEther = (val) => {
    val = parseFloat(web3.utils.fromWei(val, 'ether')).toFixed(2)
    if(val > 0) {
      return parseFloat(val)
    } else {
      return 0;
    }
  }

  updateState = async () => {
    if(this.state.isConnected !== true) return

    let contractBalance = await token.methods.balanceOf(contractInfo.address).call()
    let tokenBalance = await token.methods.balanceOf(this.state.address).call()
    let stakedBalance = await contract.methods.getUserAmountOfDeposits(this.state.address).call()
    let referralBonus = await contract.methods.getUserReferralReward(this.state.address).call()
    let claimableReward = await contract.methods.getUserDepositReward(this.state.address).call()
    let referralCount = await contract.methods.getUserReferralCount(this.state.address).call()
    let depositFee = await contract.methods.DEPOSIT_FEE().call()
    let withdrawFee = await contract.methods.WITHDRAW_FEE().call()
    let referralFee = await contract.methods.REFERRAL_FEE().call()
    let dailyReturn = await contract.methods.ROI().call()

    this.setState({
      ...this.state,
      contractBalance,
      tokenBalance,
      stakedBalance,
      referralBonus,
      claimableReward,
      referralCount,
      depositFee,
      withdrawFee,
      referralFee,
      dailyReturn
    })
    eventBus.dispatch('stateUpdated', {
      contractBalance: this.convertWeiToEther(contractBalance),
      tokenBalance: this.convertWeiToEther(tokenBalance),
      stakedBalance: this.convertWeiToEther(stakedBalance),
      referralBonus: this.convertWeiToEther(referralBonus),
      claimableReward: this.convertWeiToEther(claimableReward),
      depositFee: parseFloat(depositFee) / 10,
      withdrawFee: parseFloat(withdrawFee) / 10,
      referralFee: parseFloat(referralFee) / 10,
      dailyReturn: parseFloat(dailyReturn) / 10,
      referralCount
    })
  }

  async approveToken() {
    await token.methods.approve(contractInfo.address, constants.MaxUint256).send({
      from: this.state.address
    })
    this.updateState()
    return true
  }

  displayNotification(appearance, text) {
    switch(appearance) {
        case 'warning':
            toast.warn(text); break
        case 'info':
            toast.info(text); break
        case 'error':
            toast.error(text); break
        case 'success':
            toast.success(text); break
        default:
            break
    }
  }

  handleAccountsChanged = () => {
    window.location.reload()
  }
  handleChainChanged = () => {
    window.location.reload()
  }
  disconnect = async () => {
    await web3Modal.clearCachedProvider();
    window.location.reload()
  };

  componentDidMount() {
    if(web3Modal.cachedProvider) {
      this.connectWallet()
    }

    this.getReferrer()
    this.timeId = setInterval(() => {
      this.updateState()
    }, 30000)

    eventBus.on('walletConnection', () => {
      this.connectWallet()
    })
    eventBus.on('walletConnected', () => {
      this.updateState()
    })
    eventBus.on('disconnectWallet', () => {
      this.disconnect()
    })
    eventBus.on('stakeToken', (data) => {
      if(this.state.isConnected === false) {
        this.displayNotification('info', 'Please connect wallet.')
        return
      }
      this.stakeToken(data.amount)
    })
    eventBus.on('withdrawToken', () => {
      if(this.state.isConnected === false) {
        this.displayNotification('info', 'Please connect wallet.')
        return
      }
      this.withdrawToken()
    })
    eventBus.on('claimReward', () => {
      if(this.state.isConnected === false) {
        this.displayNotification('info', 'Please connect wallet.')
        return
      }
      this.claimReward()
    })
    eventBus.on('compoundDivident', () => {
      if(this.state.isConnected === false) {
        this.displayNotification('info', 'Please connect wallet.')
        return
      }
      this.compoundDivident()
    })
    eventBus.on('updateState', () => {
      this.updateState()
    })

    return () => {
      eventBus.remove('walletConnection', () => {})
      eventBus.remove('walletConnected', () => {})
      eventBus.remove('stakeToken', () => {})
      eventBus.remove('withdrawToken', () => {})
      eventBus.remove('claimReward', () => {})
      eventBus.remove('compoundDivident', () => {})
      eventBus.remove('updateState', () => {})

      if (this.state.provider.removeListener) {
        this.state.provider.removeListener("accountsChanged", this.handleAccountsChanged)
        this.state.provider.removeListener("chainChanged", this.handleChainChanged)
      }
      clearImmediate(this.timeId)
    }
  }

  render() {
    return (
      <div className="w-full relative overflow-hidden background-pic">
        <ToastContainer />
        <div className="relative w-full top-0">
          <div className="absolute w-full background-pic"></div>
        </div>
        <div className='w-full shadow-xl'>
          <Header />
        </div>
        <Home approveToken={this.approveToken} />
        <div className='w-full'>
          <Footer />
        </div>
      </div>
    )
  }
}

function App() {

  return (
    <Container />
  );
}

export default App;
