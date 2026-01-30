import React, { useState } from 'react';

const TeacherForm = () => {
  const [studentId, setStudentId] = useState('');
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sau này sẽ thay alert bằng lệnh gọi Smart Contract
    alert(`Đang gửi lên Blockchain:\nMSSV: ${studentId}\nMôn: ${subject}\nĐiểm: ${score}`);
  };

  return (
    <div className="form-card">
      <h3>👨‍🏫 Dành Cho Giảng Viên</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Mã Sinh Viên</label>
          <input 
            type="text" 
            placeholder="VD: B1901234" 
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Môn Học</label>
          <input 
            type="text" 
            placeholder="VD: Lập trình Blockchain" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Điểm Số (0-10)</label>
          <input 
            type="number" 
            min="0" max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">🚀 Ghi Điểm Vào Blockchain</button>
      </form>
    </div>
  );
};

export default TeacherForm;