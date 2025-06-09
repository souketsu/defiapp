// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string public message = "Hello, Web3!";

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
