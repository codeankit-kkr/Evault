import React, { useState } from 'react'
import { ethers } from 'ethers';
import MetamaskLogo from './MetamaskLogo';
// import Foxcomp from "./Foxcomp"
const isMetaMaskInstalled = () => {
    return typeof window.ethereum !== 'undefined';
};


export default function Metaconnect() {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = () => {
        if (!isMetaMaskInstalled()) {
            window.open('https://metamask.io/download.html', '_blank');
        }
        else {
            if (window.ethereum) {

                window.ethereum.request({ method: 'eth_requestAccounts' })
                    .then(result => {
                        accountChanged([result[0]])
                    })
                    .catch((er) => {
                        console.log(er)
                    })
            } else {
                setErrorMessage('Install MetaMask please!!')
            }
        }

    }
    const disconnectWallet = () => {
        if (!isMetaMaskInstalled()) {
            window.open('https://metamask.io/download.html', '_blank');
        }
        else {
            if (window.ethereum) {

                window.ethereum.request({ method: 'eth_requestAccounts' })
                    .then(result => {
                        accountChanged([])
                    })
                    .catch((er) => {
                        console.log(er)
                    })
            } else {
                setErrorMessage('Install MetaMask please!!')
            }
        }

    }


    const accountChanged = (accountName) => {


        setDefaultAccount(accountName)
        setUserBalance("")
        accountName.length && getUserBalance(accountName)


    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
            .then(balance => {
                setUserBalance(ethers.formatEther(balance));
            })
    }


    return (
        <div className='login_body'>
            <div className='container'>
                <div className='centerflex'>
                    <MetamaskLogo />
                </div>
                <h1 class="form__title">Connect Your Wallet</h1>
                <button className="form__button" onClick={connectWallet}>Connect to MetaMask</button>
                <div className="mt-2 mb-2">
                    Connected with : {defaultAccount ? defaultAccount : ""}

                </div>
                <div className="mt-2 mb-2">
                    Balance: {userBalance ? userBalance : ""}

                </div>
                <button className="form__button" onClick={disconnectWallet}>Disconnect to MetaMask</button>

                {errorMessage}
            </div>
        </div>
    )
}
