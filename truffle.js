// for test network deployment via infura
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "fc798e8c974644f1bb97f6d89d839981";
const mnemonic = "toe cement gas ethics napkin robot mask mix bracket gloom soccer leopard";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/fc798e8c974644f1bb97f6d89d839981`), //metamask seed, infura link
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      gasPrice: 10000000000
      //confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      //timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      //skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
  }
};
