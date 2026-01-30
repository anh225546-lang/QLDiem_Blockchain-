import React, { useState } from 'react';

const StudentView = () => {
  const [searchId, setSearchId] = useState('');
  
  // Dữ liệu giả định (Sau này sẽ lấy từ Blockchain)
  const mockData = [
    { subject: "Cấu trúc dữ liệu", score: 8, teacher: "0x123...abc" },
    { subject: "Blockchain cơ bản", score: 9, teacher: "0x456...def" }
  ];

  return (
    <div className="view-card">
      <h3>👨‍🎓 Tra Cứu Kết Quả</h3>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Nhập MSSV của bạn..." 
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button className="btn-secondary">🔍 Tra Cứu</button>
      </div>

      <table className="grade-table">
        <thead>
          <tr>
            <th>Môn Học</th>
            <th>Điểm</th>
            <th>Người Chấm (Ví GV)</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td><span className="score-badge">{item.score}</span></td>
              <td>{item.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentView;