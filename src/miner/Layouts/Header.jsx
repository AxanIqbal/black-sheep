import React, { useState, useEffect } from 'react'
import eventBus from '../Components/EventBus'
import IMAGE from '../../assets/black sheep.png'
function Header() {

    const [isConnected, setIsConnected] = useState(false)
    const [address, setAddress] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const convertAddresstoName = (addr) => {
        const len = address.length
        return addr.slice(0, 3) + '...' + address.slice(len - 3, len)
    }

    const emitConnectWallet = () => {
        if(isConnected) {
            eventBus.dispatch('disconnectWallet', {})
        } else {
            eventBus.dispatch('walletConnection', {})
        }
    }

    const onConnectWallet = (data) => {
        setIsConnected(true)
        setAddress(data.address)
    }

    useEffect(() => {
        eventBus.on('walletConnected', (data) => {
            onConnectWallet(data)
        })

        return () => {
            eventBus.remove('walletConnected', (data) => {
                onConnectWallet(data)
            })
        }
    }, [])

    return (
        <nav className="bg-black bg-opacity-50 relative flex flex-wrap items-center justify-between w-full px-2 navbar-expand-lg bg-primary-light py-3">
            <div className="container px-5 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                    <a className="flex items-center h-20 md:h-24 py-2" href="/">
                        <img className='h-full object-contain' src={IMAGE} alt='logo_img' />
                        <div className="font-Montserrat-ExtraBold text-primary text-2xl mb-1 mt-6 text-left uppercase">BlackSheep</div>
                    </a>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            onClick={() => {setIsOpen(!isOpen)}}>
                        <span className="block relative w-5 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-5 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-5 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>
                <div className={`flex flex-col flex-grow items-center place-items-center overflow-hidden space-y-3 py-2 transition-all duration-500 lg:py-0 lg:space-y-0 lg:space-x-8 lg:flex-row
                                    ${isOpen === true?'desktop-min:max-h-96':'desktop-min:max-h-0'}`}>
                    <ul className='flex flex-col place-items-center list-none space-y-5 desktop-min:pt-2 lg:space-y-0 lg:space-x-12 lg:flex-row lg:ml-auto w-auto'>
                        <li className='font-bold text-lg text-white'>
                            <a href='https://www.black-sheep.xyz' target="_blank" rel="noopener noreferrer">
                                Home
                            </a>
                        </li>
                        <li className='font-bold text-lg text-white'>
                            <a href='https://www.black-sheep.xyz/whitepaper.pdf' target="_blank" rel="noopener noreferrer">
                                Whitepaper
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href='https://twitter.com/BlackSheep_xyz' target="_blank" rel="noopener noreferrer">
                                <span className='text-white text-xl cursor-pointer'>
                                    <i className='fab fa-twitter'></i>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href='https://t.me/BlackSheep_XYZ' target="_blank" rel="noopener noreferrer">
                                <span className='text-white text-xl cursor-pointer'>
                                    <i className='fab fa-telegram'></i>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href='https://discord.gg/uDEKqbGq' target="_blank" rel="noopener noreferrer">
                                <span className='text-white text-xl cursor-pointer'>
                                    <i className='fab fa-discord'></i>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href='https://youtube.com/channel/UC9kdD7cvS7WKoZud9YilOhw' target="_blank" rel="noopener noreferrer">
                                <span className='text-white text-xl cursor-pointer'>
                                    <i className='fab fa-youtube'></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    {/* <button className="bg-red-400 text-white hover:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg hover:opacity-75 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        BUY $CORN
                    </button> */}
                    <button className="bg-primary text-white font-Montserrat-ExtraBold hover:bg-opacity-90 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg hover:opacity-75 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => emitConnectWallet()}
                            type="button">
                        { isConnected === true ? `Disconnect | ${convertAddresstoName(address)}` : "Connect wallet" }
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header
