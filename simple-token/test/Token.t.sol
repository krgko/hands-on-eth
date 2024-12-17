// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {Test, stdStorage, StdStorage} from "forge-std/Test.sol";
import {Token} from "../src/Token.sol";

contract TokenTest is Test {
    using stdStorage for StdStorage;
    Token private token;

    function setUp() public {
        token = new Token("Test_Token", "TTOKEN");
    }

    function test_Mint() public {
        token.mint(address(1), 10);

        uint256 slotBalance = stdstore
            .target(address(token))
            .sig(token.balanceOf.selector)
            .with_key(address(1))
            .find();

        uint256 balance = uint256(
            vm.load(address(token), bytes32(slotBalance))
        );
        assertEq(balance, 10);
    }
}
