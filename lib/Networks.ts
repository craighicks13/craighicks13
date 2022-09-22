import NetworkConfigInterface from "../interfaces/NetworkConfigInterface";

export const noNetwork: NetworkConfigInterface = {
  chainId: 0,
  name: "No Network",
  blockExplorer: {
    name: "Unknown",
    contract: "0x",
    generateContractUrl: (contractAddress: string) =>
      `https://craighicks.com/address/${contractAddress}`,
  },
};

export const ethereumMainnet: NetworkConfigInterface = {
  chainId: 1,
  name: "Ethereum Mainnet",
  blockExplorer: {
    name: "Etherscan",
    contract: "0x",
    generateContractUrl: (contractAddress: string) =>
      `https://etherscan.io/address/${contractAddress}`,
  },
};

export const ropstenTestnet: NetworkConfigInterface = {
  chainId: 3,
  name: "Ropsten Testnet",
  blockExplorer: {
    name: "Etherscan",
    contract: "0x",
    generateContractUrl: (contractAddress: string) =>
      `https://ropsten.etherscan.io/address/${contractAddress}`,
  },
};

export const rinkebyTestnet: NetworkConfigInterface = {
  chainId: 4,
  name: "Rinkeby Testnet",
  blockExplorer: {
    name: "Etherscan",
    contract: "0x60d93f1aBF0606531e2ab412538D49a1Ddf8558E",
    generateContractUrl: (contractAddress: string) =>
      `https://rinkeby.etherscan.io/address/${contractAddress}`,
  },
};

export const goerliTestnet: NetworkConfigInterface = {
  chainId: 5,
  name: "Goerli Testnet",
  blockExplorer: {
    name: "Etherscan",
    contract: "0x",
    generateContractUrl: (contractAddress: string) =>
      `https://goerli.etherscan.io/address/${contractAddress}`,
  },
};

export const kovanTestnet: NetworkConfigInterface = {
  chainId: 42,
  name: "Kovan Testnet",
  blockExplorer: {
    name: "Etherscan",
    contract: "0x",
    generateContractUrl: (contractAddress: string) =>
      `https://kovan.etherscan.io/address/${contractAddress}`,
  },
};

export const polygonMainnet: NetworkConfigInterface = {
  chainId: 137,
  name: "Polygon Mainnet",
  blockExplorer: {
    name: "Polygonscan",
    contract: "0x60d93f1aBF0606531e2ab412538D49a1Ddf8558E",
    generateContractUrl: (contractAddress: string) =>
      `https://polygonscan.com/address/${contractAddress}`,
  },
};

export const polygonTestnet: NetworkConfigInterface = {
  chainId: 80001,
  name: "Mumbai Testnet",
  blockExplorer: {
    name: "Polygonscan",
    contract: "0x3B03D6756A64ff9e85E8B433C90e94d575AEC272",
    generateContractUrl: (contractAddress: string) =>
      `https://mumbai.polygonscan.com/address/${contractAddress}`,
  },
};
