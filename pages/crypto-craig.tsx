import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import { useState, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React, Web3ReactHooks } from '@web3-react/core';
import NetworkConfigInterface from '../../../smart-contract/lib/NetworkConfigInterface';
import NftContractType from '../lib/NftContractType';
import Whitelist from '../lib/Whitelist';
import { getContentData } from '../lib/content';
import CollectionConfig from '../config/CollectionConfig';
import MintWidget from '../components/web3/nft/MintWidget';
import CollectionStatus from '../components/web3/nft/CollectionStatus';
import NotConnected from '../components/web3/nft/NotConnected';
import NoContract from '../components/web3/nft/NoContract';
import { Accounts } from '../components/web3/Accounts';

const ContractAbi = require('../artifacts/' +
	CollectionConfig.contractName +
	'.json').abi;

export async function getStaticProps() {
	const faq = await getContentData('nft-faq');
	return {
		props: {
			faq,
		},
	};
}

export default function CryptoCraig({ faq }) {
	const { account, chainId, isActive, provider, ENSName } =
		useWeb3React<Web3Provider>();
	const [contract, setContract] = useState<NftContractType>();
	const [maxSupply, setMaxSupply] = useState<number>(0);
	const [totalSupply, setTotalSupply] = useState<number>(0);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [isWhitelistMintEnabled, setIsWhitelistMintEnabled] =
		useState<boolean>(false);
	const [isUserInWhitelist, setIsUserInWhitelist] =
		useState<boolean>(false);
	const [maxMintAmountPerTx, setMaxMintAmountPerTx] =
		useState<number>(0);
	const [tokenPrice, setTokenPrice] = useState<BigNumber>(
		BigNumber.from(0)
	);
	const [balance, setBalance] = useState<BigNumber>(
		BigNumber.from(0)
	);
	const [isMinting, setIsMinting] = useState<boolean>(false);
	const [hasMinted, setHasMinted] = useState<boolean>(false);

	const collectionInfo: NetworkConfigInterface =
		CollectionConfig.testnet[0];

	useEffect(() => {
		async function getContractCode(): Promise<void> {
			if (!chainId) return;

			provider.getBalance(account).then((balance) => {
				// convert a currency unit from wei to ether
				const balanceInEth = ethers.utils.formatEther(balance);
				setBalance(balance);
			});

			if (chainId != collectionInfo.chainId) {
				console.log('no contract on chain');
				// props.errorMessage(noContractMessage);
				// setShowFlag({
				// 	display: true,
				// 	message: noContractMessage.content,
				// 	isError: true,
				// });
				return;
			}
			const contract = new ethers.Contract(
				collectionInfo.blockExplorer.contract,
				ContractAbi,
				provider?.getSigner()
			) as unknown as NftContractType;
			setContract(contract);
			setMaxSupply((await contract.maxSupply()).toNumber());
			setTotalSupply((await contract.totalSupply()).toNumber());
			setMaxMintAmountPerTx(
				(await contract.maxMintAmountPerTx()).toNumber()
			);
			setTokenPrice(await contract.cost());
			setIsPaused(await contract.paused());
			setIsWhitelistMintEnabled(
				await contract.whitelistMintEnabled()
			);
			setIsUserInWhitelist(Whitelist.contains(account ?? ''));
		}
		resetState();
		getContractCode();
	}, [account, chainId, provider, collectionInfo]);

	function resetState() {
		//setNetworkConfig(noNetwork);
		setContract(undefined);
		setMaxSupply(0);
		setTotalSupply(0);
		setMaxMintAmountPerTx(0);
		setTokenPrice(BigNumber.from(0));
		setIsPaused(true);
		setIsWhitelistMintEnabled(false);
		setIsUserInWhitelist(false);
		//setShowFlag({ display: false, message: <></>, isError: false });
		setHasMinted(false);
		setIsMinting(false);
	}

	async function mintTokens(amount: number): Promise<void> {
		//setIsMinting(true);
		try {
			console.log('initalize mint');
			let tx = await contract!.mint(amount, {
				value: tokenPrice.mul(amount),
			});
			console.log('minting');
			const receipt = await tx.wait();
			console.log(receipt.transactionHash);
			// setHasMinted(true);
			// setIsMinting(false);
		} catch (e) {
			// mintingError.content = Object(e).message;
			// props.errorMessage(mintingError);
			// setIsMinting(false);
			console.log(e.data.message);
		}
	}
	return (
		<Layout>
			<Head>
				<title>Crypto Craig NFT Collection</title>
			</Head>
			<h1>Crypto Craig NFT Collection</h1>
			<Image
				src="/images/cryptocraig-banner.png"
				className="rounded-lg"
				alt="Crypto Craig Wallpaper"
				height={400}
				width={1400}
			/>

			<div className="md:flex gap-5">
				<div className="md:flex-auto my-5 md:my-0">
					<div className="rounded-lg p-6 bg-white border border-neutral-50 shadow">
						<div
							dangerouslySetInnerHTML={{
								__html: faq.contentHtml,
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-5 mx-auto w-full">
					{isActive ? (
						contract ? (
							<>
								<CollectionStatus
									userAddress={account}
									maxSupply={maxSupply}
									totalSupply={totalSupply}
									isPaused={isPaused}
									isWhitelistMintEnabled={isWhitelistMintEnabled}
									isUserInWhitelist={isUserInWhitelist}
								/>
								<MintWidget
									maxSupply={maxSupply}
									totalSupply={totalSupply}
									tokenPrice={tokenPrice}
									maxMintAmountPerTx={maxMintAmountPerTx}
									accountBalance={balance}
									isPaused={false}
									isWhitelistMintEnabled={false}
									isUserInWhitelist={false}
									mintTokens={(mintAmount) => mintTokens(mintAmount)}
									whitelistMintTokens={function (
										mintAmount: number
									): Promise<void> {
										throw new Error('Function not implemented.');
									}}
									currency={'MATIC'}
								/>
							</>
						) : (
							<NoContract />
						)
					) : (
						<NotConnected />
					)}
				</div>
			</div>
		</Layout>
	);
}
