import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import LoginPage from './login';
import Rewaaqr from './rewaaqr';
import Web3 from 'web3';
import { contractAbi, contractAddress } from './Constant/constant';

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const contractInstance = new web3Instance.eth.Contract(contractAbi, contractAddress);
          setWeb3(web3Instance);
          setContract(contractInstance);
        } catch (error) {
          console.error('User denied account access');
        }
      } else if (window.web3) {
        const web3Instance = new Web3(window.web3.currentProvider);
        const contractInstance = new web3Instance.eth.Contract(contractAbi, contractAddress);
        setWeb3(web3Instance);
        setContract(contractInstance);
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };

    initWeb3();
  }, []);

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage web3={web3} contract={contract} />} />
          <Route path='/' element={<Rewaaqr web3={web3} contract={contract} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
