// src/App.js
import React, { useState } from "react";
import { ethers } from "ethers";
import './App.css'; 

function App() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        alert("Lỗi: Người dùng từ chối kết nối!");
      }
    } else {
      alert("Chưa cài MetaMask! Hãy cài extension này trên Chrome.");
    }
  };

  return (
    <div className="container">
      <div className="wallet-card">
        <h1>🎓 Quản Lý Điểm Blockchain</h1>
        
        {account ? (
          <div className="success-box">
            <p>✅ Đã kết nối ví:</p>
            <p className="address">{account}</p>
          </div>
        ) : (
          <button className="btn-connect" onClick={connectWallet}>
            🦊 KẾT NỐI VÍ METAMASK
          </button>
        )}
      </div>
    </div>
  );
}

export default App;