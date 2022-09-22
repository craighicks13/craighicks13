export default interface NetworkConfigInterface {
  chainId: number;
  name: string;
  blockExplorer: {
    name: string;
    contract: string;
    generateContractUrl: (contractAddress: string) => string;
  };
};
