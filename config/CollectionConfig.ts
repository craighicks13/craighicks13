import CollectionConfigInterface from "../interfaces/CollectionConfigInterface";
import {
  polygonTestnet,
  polygonMainnet,
  rinkebyTestnet,
} from "../lib/Networks";
import { openSea } from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: [polygonTestnet, rinkebyTestnet],
  mainnet: polygonMainnet,
  contractName: "CryptoCraig",
  tokenName: "Crypto Craig NFT",
  tokenSymbol: "CCNFT",
  hiddenMetadataUri:
    "ipfs://QmR9FWmSPyZXsXeb38vL8ehgNmGkEFF29CQF2s2Rif8NY3/hidden.json",
  maxSupply: 5013,
  whitelistSale: {
    price: 1,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 3,
    maxMintAmountPerTx: 6,
  },
  publicSale: {
    price: 7,
    maxMintAmountPerTx: 15,
  },
  //contractAddress: "0x60d93f1aBF0606531e2ab412538D49a1Ddf8558E", // RINKEBY Contract
  //contractAddress: "0x3B03D6756A64ff9e85E8B433C90e94d575AEC272", // Mumbai Contract
  contractAddress: "0x60d93f1aBF0606531e2ab412538D49a1Ddf8558E", // Polygon Contract
  marketplaceIdentifier: "crypto-craig-nft",
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
