import IMessages from '../interfaces/IMessages';

export const noContractMessage: IMessages = {
	title: <>Contract Not Found</>,
	content: (
		<>
			The contract couldn&apos;t be found on the current chain. Please
			ensure you are connected to the <strong>Polygon mainnet</strong>
			.
		</>
	),
	isError: true,
	display: true,
};

export const unsupportedNetworkMessage: IMessages = {
	title: <>Current Network Unsupported</>,
	content: (
		<>
			Your current network is unknown and not supported. Known
			networks are available in the network dropdown. Please ensure
			you are connected to the Polygon mainnet to mint NFT&apos;s.
		</>
	),
	isError: true,
	display: true,
};

export const testnetMessage: IMessages = {
	title: <>You are connnected to the testnet</>,
	content: <>You are connected to a test network.</>,
	isError: false,
	display: true,
};

export const whitelistMintError: IMessages = {
	title: <>Whitelist Minting Error</>,
	content: <></>,
	isError: true,
	display: true,
};

export const mintingError: IMessages = {
	title: <>Minting Error</>,
	content: <></>,
	isError: true,
	display: true,
};
