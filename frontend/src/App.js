import React, { useState } from "react";
import { ethers } from "ethers";
import './App.css';
import TeacherForm from "./component/TeacherForm";
import StudentView from "./component/StudentView";

function App() {
  const [account, setAccount] = useState("");
  const [activeTab, setActiveTab] = useState("student"); // Mặc định là tab Sinh viên

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        alert("Lỗi kết nối ví!");
      }
    } else {
      alert("Chưa cài MetaMask!");
    }
  };

  return (
    <div className="app-container">
      {/* HEADER & WALLET */}
      <header>
        <div className="logo">🎓 Blockchain Grades</div>
        <div className="wallet-info">
          {account ? (
            <span className="wallet-connected">✅ {account.slice(0, 6)}...{account.slice(-4)}</span>
          ) : (
            <button className="btn-connect" onClick={connectWallet}>🦊 Kết Nối Ví</button>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        {/* TAB NAVIGATION */}
        <div className="tabs">
          <button 
            className={activeTab === 'teacher' ? 'active' : ''} 
            onClick={() => setActiveTab('teacher')}
          >
            Giảng Viên
          </button>
          <button 
            className={activeTab === 'student' ? 'active' : ''} 
            onClick={() => setActiveTab('student')}
          >
            Sinh Viên
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="content-area">
          {activeTab === 'teacher' ? <TeacherForm /> : <StudentView />}
        </div>
      </main>
    </div>
  );
}

export default App;