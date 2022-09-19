import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/index.css';
import '../styles/chrome-bug.css';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';
import {
	coinbaseWallet,
	hooks as coinbaseWalletHooks,
} from '../connectors/coinbaseWallet';
import {
	hooks as metaMaskHooks,
	metaMask,
} from '../connectors/metaMask';
import {
	hooks as networkHooks,
	network,
} from '../connectors/network';
import {
	hooks as walletConnectHooks,
	walletConnect,
} from '../connectors/walletConnect';

const connectors: [
	MetaMask | WalletConnect | CoinbaseWallet | Network,
	Web3ReactHooks
][] = [
	[metaMask, metaMaskHooks],
	[walletConnect, walletConnectHooks],
	[coinbaseWallet, coinbaseWalletHooks],
	[network, networkHooks],
];

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Web3ReactProvider connectors={connectors}>
			<Component {...pageProps} />
		</Web3ReactProvider>
	);
}
