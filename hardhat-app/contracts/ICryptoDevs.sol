// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

interface ICryptoDevs {
    function tokenOfOwnerByIndex(address owner, uint256 index) view external returns (uint256 tokenId);

    function balanceOf(address owner) view external returns (uint256 balance);
}
