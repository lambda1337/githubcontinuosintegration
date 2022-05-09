// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Test {
    uint public data;

    function set_data(uint y) public {
        data = y;
    }

    function return_5() public pure returns (uint) {
        return 5;
    }

}