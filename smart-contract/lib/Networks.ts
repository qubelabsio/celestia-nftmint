import NetworkConfigInterface from './NetworkConfigInterface';

/*
 * Local networks
 */
export const hardhatLocal: NetworkConfigInterface = {
  chainId: 31337,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Block explorer (not available for local chains)',
    generateContractUrl: (contractAddress: string) => `#`,
    generateTransactionUrl: (transactionAddress: string) => `#`,
  },
}

/*
 * Ethereum
 */
export const ethereumTestnet: NetworkConfigInterface = {
  chainId: 5,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Etherscan (Goerli)',
    generateContractUrl: (contractAddress: string) => `https://goerli.etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://goerli.etherscan.io/tx/${transactionAddress}`,
  },
}

export const ethereumLegacyTestnet: NetworkConfigInterface = {
  chainId: 4,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Etherscan (Rinkeby)',
    generateContractUrl: (contractAddress: string) => `https://rinkeby.etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://rinkeby.etherscan.io/tx/${transactionAddress}`,
  },
}

export const ethereumMainnet: NetworkConfigInterface = {
  chainId: 1,
  symbol: 'ETH',
  blockExplorer: {
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) => `https://etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://etherscan.io/tx/${transactionAddress}`,
  },
}
/*
 * Binance
 */
export const bscTestnet: NetworkConfigInterface = {
  chainId: 97,
  symbol: 'BNB (test)',
  blockExplorer: {
    name: 'Bscscan (Testnet)',
    generateContractUrl: (contractAddress: string) => `https://testnet.bscscan.com/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://testnet.bscscan.com/tx/${transactionAddress}`,
  },
}

export const bscMainnet: NetworkConfigInterface = {
  chainId: 56,
  symbol: 'BNB',
  blockExplorer: {
    name: 'Bscscan',
    generateContractUrl: (contractAddress: string) => `https://bscscan.com/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://bscscan.com/tx/${transactionAddress}`,
  },
}

export const evmosTestnet: NetworkConfigInterface = {
  chainId: 9000,
  symbol: 'tEVMOS',
  blockExplorer: {
    name: 'Evmos explorer (Testnet)',
    generateContractUrl: (contractAddress: string) => `https://evmos.dev/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://evmos.dev/tx/${transactionAddress}`,
  },
}

/*
 * Polygon
 */
export const polygonTestnet: NetworkConfigInterface = {
  chainId: 80001,
  symbol: 'MATIC (test)',
  blockExplorer: {
    name: 'Polygonscan (Mumbai)',
    generateContractUrl: (contractAddress: string) => `https://mumbai.polygonscan.com/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://mumbai.polygonscan.com/tx/${transactionAddress}`,
  },
}

export const polygonMainnet: NetworkConfigInterface = {
  chainId: 137,
  symbol: 'MATIC',
  blockExplorer: {
    name: 'Polygonscan',
    generateContractUrl: (contractAddress: string) => `https://polygonscan.com/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://polygonscan.com/tx/${transactionAddress}`,
  },
}
