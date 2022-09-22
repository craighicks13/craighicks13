import { utils, BigNumber } from 'ethers';
import Image from 'next/image';
import React from 'react';
import { BiError as ErrorIcon } from 'react-icons/bi';

interface Props {
	maxSupply: number;
	totalSupply: number;
	tokenPrice: BigNumber;
	accountBalance: BigNumber;
	maxMintAmountPerTx: number;
	isPaused: boolean;
	isWhitelistMintEnabled: boolean;
	isUserInWhitelist: boolean;
	mintTokens(mintAmount: number): Promise<void>;
	whitelistMintTokens(mintAmount: number): Promise<void>;
	currency: String;
}

interface State {
	mintAmount: number;
}

const defaultState: State = {
	mintAmount: 1,
};

export default class MintWidget extends React.Component<
	Props,
	State
> {
	constructor(props: Props) {
		super(props);

		this.state = defaultState;
	}

	private canMint(): boolean {
		return !this.props.isPaused || this.canWhitelistMint();
	}

	private canWhitelistMint(): boolean {
		return (
			this.props.isWhitelistMintEnabled &&
			this.props.isUserInWhitelist
		);
	}

	private incrementMintAmount(): void {
		this.setState({
			mintAmount: Math.min(
				this.props.maxMintAmountPerTx,
				this.state.mintAmount + 1
			),
		});
	}

	private decrementMintAmount(): void {
		this.setState({
			mintAmount: Math.max(1, this.state.mintAmount - 1),
		});
	}

	private async mint(): Promise<void> {
		if (!this.props.isPaused) {
			await this.props.mintTokens(this.state.mintAmount);

			return;
		}

		await this.props.whitelistMintTokens(this.state.mintAmount);
	}

	render() {
		return (
			<>
				{this.canMint() ? (
					<div className="flex flex-col items-center rounded-lg overflow-hidden text-center bg-white shadow min-w-96">
						<div className="p-4 sm:p-16 md:p-32 bg-blue-100">
							<Image
								src="/images/nft/preview.png"
								alt="Collection preview"
								width={1330}
								height={1380}
								className="m-auto max-h-32"
							/>
						</div>
						<div className="px-6 pt-4">
							<strong>Your Balance:</strong>{' '}
							{utils.formatEther(this.props.accountBalance)}{' '}
							{this.props.currency}
						</div>
						<div className="px-6 pb-4">
							<strong>Total price:</strong>{' '}
							{utils.formatEther(
								this.props.tokenPrice.mul(this.state.mintAmount)
							)}{' '}
							{this.props.currency}
						</div>

						<div className="flex items-stretch w-full">
							<button
								className="py-2 px-4 font-semibold bg-neutral-50 shadow-sm hover:bg-neutral-200 cursor-pointer"
								onClick={() => this.decrementMintAmount()}
							>
								-
							</button>
							<span className="flex items-center justify-center w-full font-semibold text-primary-700">
								{this.state.mintAmount}
							</span>
							<button
								className="py-2 px-4 font-semibold bg-neutral-50 shadow-sm hover:bg-neutral-200 cursor-pointer"
								onClick={() => this.incrementMintAmount()}
							>
								+
							</button>
							{this.props.accountBalance.lte(
								this.props.tokenPrice.mul(this.state.mintAmount)
							) ? (
								<div className="p-5 w-64 bg-red-600 text-white">
									NSF
								</div>
							) : (
								<button
									className="p-5 w-64 bg-primary hover:bg-primary_2"
									onClick={() => this.mint()}
								>
									Mint
								</button>
							)}
						</div>
					</div>
				) : (
					<div className="cannot-mint">
						<span className="icon">
							<ErrorIcon />
						</span>
						{this.props.isWhitelistMintEnabled ? (
							<>
								You are not included in the <strong>whitelist</strong>
								.
							</>
						) : (
							<>
								The contract is <strong>paused</strong>.
							</>
						)}
						<br />
						Please come back during the next sale!
					</div>
				)}
			</>
		);
	}
}
