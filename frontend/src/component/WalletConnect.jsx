// src/components/WalletConnect.jsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./WalletConnect.css"; // Gọi file CSS ở ngay trên

const WalletConnect = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Hàm kết nối ví
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        const currentAccount = accounts[0];
        setAccount(currentAccount);
        await getBalance(currentAccount);
        setErrorMessage(null);
        
      } catch (error) {
        setErrorMessage("⚠️ Người dùng đã từ chối kết nối!");
      }
    } else {
      setErrorMessage("⚠️ Chưa cài đặt MetaMask! Vui lòng cài đặt extension.");
    }
  };

  // Hàm lấy số dư
  const getBalance = async (walletAddress) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balanceWei = await provider.getBalance(walletAddress);
      const balanceEth = ethers.formatEther(balanceWei);
      setBalance(balanceEth);
    } catch (err) {
      console.error(err);
      setErrorMessage("Không thể lấy số dư.");
    }
  };

  // Tự động reload khi đổi tài khoản
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          getBalance(accounts[0]);
        } else {
          setAccount("");
          setBalance("");
        }
      });
    }
  }, []);

  return (
    <div className="wallet-container">
      <div className="card">
        <h2>🔗 Kết Nối Blockchain</h2>
        
        {account ? (
          <div className="info-box">
            <p className="status success">✅ Đã kết nối thành công</p>
            <div className="detail-row">
              <strong>Địa chỉ ví:</strong>
              <span className="address" title={account}>
                {account.substring(0, 6)}...{account.substring(account.length - 4)}
              </span>
            </div>
            <div className="detail-row">
              <strong>Số dư hiện tại:</strong>
              <span>{parseFloat(balance).toFixed(4)} ETH</span>
            </div>
          </div>
        ) : (
          <div className="connect-box">
            <p className="status warning" style={{color: '#666', fontWeight: 'normal'}}>
              Vui lòng kết nối ví để xem dữ liệu
            </p>
            <button className="btn-connect" onClick={connectWallet}>
              🦊 Kết nối MetaMask
            </button>
          </div>
        )}

        {errorMessage && <p className="error-msg">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default WalletConnect;