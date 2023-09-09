import { useEffect, useState } from 'react'
import abi from "./contractJson/chai.json"
import {ethers} from "ethers"
import Memos from './components/Memos'
import Buy from './components/Buy'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//import coffee from "./coffee.jpg";
//import coffee2 from "./coffee2.png";
import coffee3 from "./coffee3.png";
import './App.css'


function App() {
  
const [state,setState]= useState({
   provider: null,
   signer: null,
   contract:null
})
const [account,setAccount]=useState('Not connected');
  useEffect (()=> {
    const template=async()=>{
      const contractAddress="0x8f0c6fae5a61c673b8582b064cc2e50411dbf1ef";
      const contractABI=abi.abi;
      try{
         
    

      const {ethereum}=window;
      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })

      window.ethereum.on("accountsChanged",()=>{
        window.location.reload()
       })

      setAccount(account);

      let signer = null;

let provider;
if (window.ethereum == null) {

    // If MetaMask is not installed, we use the default provider,
    // which is backed by a variety of third-party services (such
    // as INFURA). They do not have private keys installed so are
    // only have read-only access
    console.log("MetaMask not installed; using read-only defaults")
    provider = ethers.getDefaultProvider()

} else {

    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum)

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    signer = await provider.getSigner();
}

     // const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
      //  const signer =  provider.getSigner(); //write the blockchain
        

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer)

          console.log(contract)
 setState({provider,signer,contract});
        }catch(error){
          console.log(error);
      
      

    }
  }
   template();
  },[])
   

  

  return (
    <div >
    <img src={coffee3} className="img-fluid" alt="11%" height={240} width="100%"   />
    <h2 style={{ marginTop: "1px", marginLeft: "1px", marginRight :1 ,marginBottom : 0 , textAlign: "center"}}>A Blockchain dApp By Taran Jeet Singh</h2>

    <p style={{ marginTop: "25px", marginLeft: "8px", marginRight :25 ,marginBottom : 30}}>

      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App