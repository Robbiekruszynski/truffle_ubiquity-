import React from "react";
import { ethers} from "ethers";
import "./Nav.css";

async function connect() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];
    provider.on('accountsChanged', function (accounts) {
        account = accounts[0];
        console.log(address); // Print new address
    });

    const signer = provider.getSigner();

    const address = await signer.getAddress();

    console.log(address);
}
    render() {
      return (
         <div>
          Your connected address: {this.state.account}
         </div>
      );
    }
   
   export default Nav;