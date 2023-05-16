import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.evmosTestnet,
  mainnet: Networks.evmosTestnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "BsrNft",
  tokenName: "BSR NFTs",
  tokenSymbol: "BSR",
  hiddenMetadataUri: "ipfs://__CID__/hidden.json",
  maxSupply: 1000,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.01,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x28389e674893Ab30b6eAe51705d1F58E7a5c0b3b",
  marketplaceIdentifier: "bsr-nfts",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
