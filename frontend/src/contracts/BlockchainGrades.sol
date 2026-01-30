// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract BlockchainGrades {
    address public lecturer;

    constructor() {
        lecturer = msg.sender;
    }

    modifier onlyLecturer() {
        require(msg.sender == lecturer, "Chi giang vien");
        _;
    }

    struct Grade {
        string maSV;
        string monHoc;
        uint diem;
        uint time;
    }

    Grade[] private grades;

    function addGrade(
        string memory _maSV,
        string memory _monHoc,
        uint _diem
    ) public onlyLecturer {
        require(_diem <= 10, "Diem khong hop le");

        grades.push(
            Grade(_maSV, _monHoc, _diem, block.timestamp)
        );
    }

    function getGradesBySV(string memory _maSV)
        public
        view
        returns (Grade[] memory)
    {
        uint count = 0;
        for (uint i = 0; i < grades.length; i++) {
            if (
                keccak256(bytes(grades[i].maSV)) ==
                keccak256(bytes(_maSV))
            ) {
                count++;
            }
        }

        Grade[] memory result = new Grade[](count);
        uint index = 0;

        for (uint i = 0; i < grades.length; i++) {
            if (
                keccak256(bytes(grades[i].maSV)) ==
                keccak256(bytes(_maSV))
            ) {
                result[index] = grades[i];
                index++;
            }
        }

        return result;
    }
}
