// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MyToken {
    string public name = "Mark Token";
    string public symbol = "QLDiem";
    uint8 public decimals = 18;
    uint public totalSupply;

    mapping(address => uint) public balanceOf;

    constructor() {
        totalSupply = 1000000 * 10 ** decimals;
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint amount) public returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Khong du token");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }
}
