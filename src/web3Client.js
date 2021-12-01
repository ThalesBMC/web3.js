import Web3 from "web3";
let selectedAccount;
export const init = () => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(selectedAccount);
      })
      .catch((err) => {
        console.log(err);
      });
    window.ethereum.on("accountsChanged", (accounts) => {
      selectedAccount = accounts[0];
      console.log(selectedAccount);
    });
  }
  const web3 = new Web3(provider);
};
