pragma solidity ^0.4.25;
contract SimpleStorage {
  string storeHash;

  function setipfs(string x) public {
    storeHash = x;
  }

  function get() public view returns (string) {
    return storeHash;
  }
}
