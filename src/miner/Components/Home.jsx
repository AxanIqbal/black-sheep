import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import eventBus from './EventBus'

let symbol = "$666", approved = false;

function Home({ approveToken }) {

    const [isConnected, setIsConnected] = useState(false)
    const [referral, setReferral] = useState('')
    const [text, setText] = useState('Copy Link')
    const [amount, setAmount] = useState(0)
    const [contractBalance, setContractBalance] = useState(0)
    const [stakedBalance, setStakedBalance] = useState(0)
    const [referralBonus, setReferralBonus] = useState(0)
    const [claimableReward, setClaimableReward] = useState(0)
    const [depositFee, setDepositFee] = useState('0')
    const [withdrawFee, setWithdrawFee] = useState('0')
    const [referralFee, setReferralFee] = useState('0')
    const [dailyReturn, setDailyReturn] = useState('0')
    const [referralCount, setReferralCount] = useState(0)
    const [tokenBalance, setTokenBalance] = useState(0)

    let input_ref = React.createRef()

    const onConnectWallet = (data) => {
        let url = window.location.href
        if(url.indexOf('ref') !== -1) {
            url = url.slice(0, url.indexOf('ref') - 1)
        }
        setIsConnected(true)
        setReferral(url + '?ref=' + data.address)
    }

    const onChange = (e) => {
        let value = parseFloat(e.target.value)
        setAmount(isNaN(value) === true ? 0 : value)
    }

    const onStateUpdated = (data) => {
        setContractBalance(data.contractBalance)
        setStakedBalance(data.stakedBalance)
        setReferralBonus(data.referralBonus)
        setClaimableReward(data.claimableReward)
        setDepositFee(data.depositFee)
        setWithdrawFee(data.withdrawFee)
        setReferralFee(data.referralFee)
        setDailyReturn(data.dailyReturn)
        setReferralCount(data.referralCount)
        setTokenBalance(data.tokenBalance)
    }

    const showTooltip = () => {
        setText('Copied!')
        setTimeout(() => {
            setText('Copy Link')
        }, 2000)
    }

    const emitStake = () => {
        if(isConnected === false) {
            return
        }

        if(approved === false) {
            approveToken()
            approved = true
            return
        } else {
            if(amount > 0) {
                eventBus.dispatch('stakeToken', {
                    amount
                })
            }
        }
    }

    const emitWithdraw = () => {
        eventBus.dispatch('withdrawToken', {})
    }

    const emitCliamReward = () => {
        eventBus.dispatch('claimReward', {})
    }

    const emitCompound = () => {
        eventBus.dispatch('compoundDivident', {})
    }

    useEffect(() => {
        eventBus.on('walletConnected', (data) => {
            onConnectWallet(data)
        })
        eventBus.on('stateUpdated', (data) => {
            onStateUpdated(data)
        })

        return () => {
            eventBus.remove('walletConnected', () => {})  
            eventBus.on('stateUpdated', () => {})
        }
    }, [])

    return (
        <section className='relative w-full pb-10'>
            <div className="container mx-auto pb-18 px-4 force-height">
                <div className="grid grid-col-1 md:grid-cols-1 gap-6 w-full md:w-3/6 justify-center mx-auto mt-10">
                    <div className="w-full rounded-lg card-bg pb-4">
                        <div className="text-center font-Montserrat-ExtraBold text-white text-2xl uppercase py-5 border-b border-dashed border-white">
                            Total Deposit in Contract
                        </div>
                        <div className="flex flex-col pt-8 pb-4 text-white">
                            <div className="text-center">
                                <span className="text-white text-5xl">{ contractBalance }</span>
                                <span className="text-white text-2xl ml-2">{ symbol }</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded-lg card-bg pb-4">
                        <div className="text-center font-Montserrat-ExtraBold text-white text-2xl uppercase py-5 border-b border-dashed border-white">
                            Staking
                        </div>
                        <div className="flex flex-col pt-8 px-2">
                            <div className='w-full flex flex-col place-items-center'>
                                <div className="w-full text-white text-2xl py-6 px-5 space-y-3">
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Staking Fee:</h1>
                                        <h1 className="text-white text-3xl">{ depositFee } <span className="text-white text-2xl ml-2">%</span></h1>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Claim Fee:</h1>
                                        <h1 className="text-white text-3xl">{ withdrawFee } <span className="text-white text-2xl ml-2">%</span></h1>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Referral Fee:</h1>
                                        <h1 className="text-white text-3xl">{ referralFee } <span className="text-white text-2xl ml-2">%</span></h1>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Your Balance:</h1>
                                        <h1 className="text-white text-3xl">{ tokenBalance } <span className="text-white text-2xl ml-2">{ symbol }</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-md border-2 border-primary p-2 flex justify-between items-center">
                                <input className="text-white font-extrabold flex-shrink text-2xl w-full bg-transparent focus:outline-none focus:bg-[#1a1c20c2] focus:text-white px-2"
                                    onChange={(e) => onChange(e)}
                                    ref={ input_ref }
                                    type="number" placeholder="$666 To Stake"  />
                                <button className="flex flex-row items-center w-32 justify-center rounded-md px-4 py-2 mx-1 font-Montserrat-ExtraBold uppercase bg-primary hover:bg-primary-hover hover:border-primary-hover text-white hover:text-white-hover border-white hover:border-white-hover"
                                    onClick={() => input_ref.current.value=tokenBalance}>
                                    <span className="w-16">MAX</span>
                                </button>
                                <button className="flex flex-row items-center w-48 justify-center rounded-md px-4 py-2 mx-1 font-Montserrat-ExtraBold uppercase bg-primary hover:bg-primary-hover hover:border-primary-hover text-white hover:text-white-hover border-white hover:border-white-hover"
                                    onClick={() => emitStake()}>
                                    <span className="">
                                        {
                                          (approved === true ? "STAKE" : "APPROVE")
                                        }
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded-lg card-bg pb-4">
                        <div className="text-center font-Montserrat-ExtraBold text-white text-2xl uppercase py-5 border-b border-dashed border-white">
                            Your Earnings
                        </div>
                        <div className="flex flex-col pt-8 pb-5 px-2">
                            <div className="text-center pb-8">
                                <span className="text-white text-5xl">{ claimableReward + referralBonus }</span>
                                <span className="text-white text-2xl ml-2">{ symbol }</span>
                            </div>
                            <div className="flex flex-row justify-center">
                                <button className="flex flex-row items-center justify-center w-32 me-4 rounded-md px-4 py-2 mx-1 font-Montserrat-ExtraBold uppercase bg-primary hover:bg-primary-hover hover:border-primary-hover text-white hover:text-white-hover border-white hover:border-white-hover"
                                    onClick={() => emitCompound()}>
                                    <span className="w-24">COMPOUND</span>
                                </button>
                                <button className="flex flex-row items-center justify-center w-32 rounded-md px-4 py-2 mx-1 font-Montserrat-ExtraBold uppercase bg-primary hover:bg-primary-hover hover:border-primary-hover text-white hover:text-white-hover border-white hover:border-white-hover"
                                    onClick={() => emitWithdraw()}>
                                    <span className="w-24">WITHDRAW</span>
                                </button>
                                <button className="flex flex-row items-center justify-center w-32 rounded-md px-4 py-2 mx-1 font-Montserrat-ExtraBold uppercase bg-primary hover:bg-primary-hover hover:border-primary-hover text-white hover:text-white-hover border-white hover:border-white-hover"
                                    onClick={() => emitCliamReward()}>
                                    <span className="w-24">CLAIM</span>
                                </button>
                            </div>
                            <div className='w-full flex flex-col place-items-center'>
                                <div className="w-full text-white text-2xl mt-8 px-5 space-y-3">
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Your Deposit:</h1>
                                        <h1 className="text-white text-3xl">{ stakedBalance } <span className="text-white text-2xl ml-2">{ symbol }</span></h1>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Staking Reward:</h1>
                                        <h1 className="text-white text-3xl">{ claimableReward } <span className="text-white text-2xl ml-2">{ symbol }</span></h1>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Daily Return:</h1>
                                        <h1 className="text-white text-3xl">{ dailyReturn } <span className="text-white text-2xl ml-2">%</span></h1>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Referral Reward:</h1>
                                        <h1 className="text-white text-3xl">{ referralBonus } <span className="text-white text-2xl ml-2">{ symbol }</span></h1>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <h1 className="text-gray-400 text-lg">Referral Count:</h1>
                                        <h1 className="text-white text-3xl">{ referralCount }</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full rounded-lg card-bg pb-4">
                        <div className="text-center font-Montserrat-ExtraBold text-white text-2xl uppercase py-5 border-b border-dashed border-white">Referral Address</div>
                        <div className="w-full flex flex-col justify-center place-items-center pt-8 px-2 space-y-5">
                            <div className="text-center">
                                <span className="text-lg text-gray-400">Earn 15% of the {symbol} used to stake {symbol} from anyone who uses your referral link</span>
                            </div>
                            <div className="w-full rounded-md border-2 border-primary p-2 flex justify-between items-center">
                                <input type="text" placeholder="Your referral link..." className="text-white  flex-shrink text-1xl w-full bg-transparent focus:outline-none focus:bg-[#1a1c20c2] focus:text-white px-2" value={isConnected === true ?referral:''} readOnly />
                            </div>
                            <CopyToClipboard text={referral} onCopy={() => showTooltip()}>
                                <button className="flex flex-row items-center w-48 justify-center rounded-md px-4 py-2 mx-1 font-Montserrat-ExtraBold uppercase bg-primary hover:bg-primary-hover hover:border-primary-hover text-white hover:text-white-hover border-white hover:border-white-hover">
                                    <span className="">{ text }</span>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home