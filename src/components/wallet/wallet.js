import { useState } from 'react';
import { ethers } from 'ethers';
import './Wallet.css';


function Wallet() {

    const [walletAddress, setWalletAddress] = useState("");
  
      async function requestAccount() {
  
      if(window.ethereum) {
    
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.log('Error connecting...');
        }
  
      } else {
        alert('Meta Mask not detected');
      }
    }
  
    async function connectWallet() {
      if(typeof window.ethereum !== 'undefined') {
        await requestAccount();
  
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      }
    }

    return (
        <div>
          <button class="button" onClick={requestAccount} 
          >Connected Wallet Address</button>
            <h3>Wallet Address: {walletAddress}</h3>
        </div>
      );
    }

    export default Wallet;