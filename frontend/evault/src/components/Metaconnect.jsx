import React from 'react'


const isMetaMaskInstalled = () => {
    return typeof window.ethereum !== 'undefined';
};


export default function Metaconnect() {
    const performAction = async () => {
        if (!isMetaMaskInstalled()) {
            window.open('https://metamask.io/download.html', '_blank');
        } else {
            // Perform your desired action here
            console.log("haa bhai installed hai")
        }
    };
    return (
        <div className='login_body'>
            <div className='container'>
                <h1 class="form__title">Connect Your Wallet</h1>
                <button className="form__button" onClick={performAction}>Connect to MetaMask</button>
                <div className="mt-2 mb-2">
                    Connected Account:
                </div>
                <button className="form__button" >Disconnect to MetaMask</button>
            </div>
        </div>
    )
}
