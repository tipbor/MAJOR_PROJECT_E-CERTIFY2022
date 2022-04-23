s

contract SimpleStorage {
  string ipfsHash;

  function setipfs(string x) public {
    ipfsHash = x;
  }

  function get() public view returns (string) {
    return ipfsHash;
  }
}
