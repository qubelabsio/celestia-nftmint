
# Celestia NFT MINT Rollup and Faucet

Celestia NFT MINT is a web application for minting NFTs on Ethermint rollups deployed on Celestia. You can deploy your own NFT contracts, configure `ERC721` parameters, together with integrated frontend dApp + Faucet.

**Features:**
* Customizable minting dApp (React + TypeScript + SCSS + Webpack))
* Deployable NFT contracts
* Configurable Faucet 

## Demo

* https://nftmint.qubelabs.io/
* https://faucet-bsr-celestia.qubelabs.io/

https://github.com/qubelabsio/celestia-nftmint/assets/61059709/f408981d-5db6-4dbb-946c-b39ee03dd4ee

## Requirements
* [NodeJS](https://nodejs.org/en)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
* [Go (1.16+)](https://go.dev/)
* [Celestia Light Node](https://docs.celestia.org/nodes/light-node/)
* [Rollkit: Ethermint](https://rollkit.dev/docs/tutorials/ethermint)
* [Metamask](https://metamask.io/)

## Deploy Celestia light node and Ethermint rollup
* Light node: https://docs.celestia.org/nodes/light-node/
* Ethermint Rollup: https://rollkit.dev/docs/tutorials/ethermint/

In our demo, our  [rollup network](https://celestia-rollup-explorer.bharvest.io/rollups/7fb347980b63b6b8) details are:
```
Network name = "Qubelabs Rollup"
Netowrk ID = "0x2328"
RPC URL = "https://rollup-bsr-celestia.qubelabs.io"
Token = "tEVMOS"
```
## Smart Contract Deployment

### Configure
```bash
nano smart-contract/config/CollectionConfig.ts
```
You can define your own token name, symbol, max supply, cap per user and price.
### Deploy Contract
```
yarn add -G truffle
cd smart-contract
yarn deploy --network truffle
```
You can either use truffle or define your own rollup RPC and private key in `smart-contract/.env`. Both will work.

After deploying the contract, copy new contract address and update `line 29` in `smart-contract/config/CollectionConfig.ts`:
```
contractAddress: "0x...",
```
## Frontend Deployment
In `minting-dapp` folder install all dependencies and build:
```
yarn
yarn build
```
Now you can deploy the content from `/public` folder on your environment, or use 
```
yarn dev-server
```
### Metamask configuration
In our demo we are using [Qubelabs Rollup](https://celestia-rollup-explorer.bharvest.io/rollups/7fb347980b63b6b8) but if you would like to define your own network to use, you need to edit the following in `minting-dapp/src/scripts/react/Dapp.tsx`

```
const networkName = "Qubelabs Rollup"; 
const networkId = "0x2328"; 
const rpcUrl = "https://rollup-bsr-celestia.qubelabs.io";

nativeCurrency: {
name: "Qubelabs Rollup",
symbol: "tEVMOS",
decimals: 18,
```
### Start the NFT Mint
Once your dApp is deployed, you need to un-pause the NFT contract.

```
cd smart-contract
yarn public-sale-open --network truffle
```

That's it! Web app is running and you can start minting NFTs.


## Faucet

```
git clone https://github.com/chainflag/eth-faucet.git
cd eth-faucet
go generate
go build -o eth-faucet

./eth-faucet -httpport 5000 -wallet.provider http://localhost:8545 -wallet.privkey fc1xxxx -proxycount 1 -faucet.minutes 60
```

## Credits
* [Eth-Faucet](https://github.com/chainflag/eth-faucet)
* MintPad





