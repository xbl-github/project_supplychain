# Project 3 Supply Chain Write-up (Xiao-Bo Li)

## Program Version
>
    Truffle v5.0.33
    Ganache CLI v6.4.4 (ganache-core: 2.5.6)
    Node v12.10.0
    web3@1.2.1

## Project Summary

This project implements a blockchain solution for a coffee supply chain.

The coffee supply chain has 4 actors, with the following roles:

>  Farmer: The Farmer can harvest coffee beans, process coffee beans, pack coffee palettes, mark coffee palettes for sell, and track authenticity.
 
> Distributor: The Distributor can buy coffee palettes, ship coffee palettes to Retailers, and track authenticity.

> Retailer: The Retailer can receive coffee palettes and track authenticity.

> Consumer: The consumer can buy coffee palettes and track authenticity.



## UML

UML diagrams are available in the folder ```UML```.

## Libraries
Roles was the only library used in this project.  It is in the file ```contract/cofeeaccesscontrol/Roles.sol```.  It is used in ```ConsumerRole.sol```, ```DistributorRole.sol```, ```FarmerRole.sol```, and ```RetailerRole.sol```.

## IPFS
IPFS was not used for this project.

## Project Files

All solidity contracts are in the folder ```contracts```.  

Tests can be found in ```test/TestSupplychain.js```, all functions in ```SupplyChain.sol``` are tested here.

To compile the contracts, first make sure you are in the directory ```project-supplychain``` and install all requisite npm packages (as listed in ```package.json```):

```
cd project-supplychain
npm install
```

Launch Ganache:

```
ganache-cli
```

Then, in a separate terminal window, Compile the smart contracts:

```
truffle compile
```

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain:

```
truffle migrate
```

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

## Front End

I have made changes to the ```src/app.js``` file, where the ```fetchItemBufferOne``` and ```fetchItemBufferTwo``` functions have been modified.  It is my understanding these two changes are sufficient for the front end to run.  Please advise me if other changes are needed.


To launch the DApp, open a separate terminal window, and run the following command:

```
npm run dev
```
## Deployment to Public Test Network 
The file ```truffle.js``` had been modified to included the needed code for deploying to the rinkeby pubic test network.  The command to deploy to rinkeby is:  
```
truffle migrate --reset --network rinkeby
```

## Contract Address

The supply chain contract ```SupplyChain.sol``` has the following contract address after deployment to rinkeby test network.  

```
0x8cE3AeEFC0CB9D9322afb6A0109908AC5B68A864
```

For completeness, the other deployed contracts have the following addresses:


```
FarmerRole.sol      : 0xA9F1E0C8d9670cc7C151B5E2edd614718336A508
DistributorRole.sol : 0x29f50e8E4D58DE6d8Bb5C170e6e6444CC761762B
RetailerRole.sol    : 0x540d3A5Cb02D38D53f5B1Ff29d28009ab68776bB
ConsumerRole.sol    : 0x3f8Ec9cd624B9521aE77dEE1ecA117496717417c
```

## Other Resources

I have studied public github code relating to this project, as well as read through Udacity Knowledge posts.
