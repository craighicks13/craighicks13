import React from 'react';

interface Props {
	userAddress: string | null | undefined;
	totalSupply: number;
	maxSupply: number;
	isPaused: boolean;
	isWhitelistMintEnabled: boolean;
	isUserInWhitelist: boolean;
	blockexplorer: string;
}

interface State {}

const defaultState: State = {};

export default class CollectionStatus extends React.Component<
	Props,
	State
> {
	constructor(props: Props) {
		super(props);

		this.state = defaultState;
	}

	private isSaleOpen(): boolean {
		return this.props.isWhitelistMintEnabled || !this.props.isPaused;
	}

	render() {
		return (
			<>
				<div className="grid md:grid-cols-2 auto-rows-min rounded-lg font-mono text-sm bg-white border-neutral-50 shadow">
					<div className="p-4 text-center sm:col-span-2 overflow-hidden border-b border-neutral-200">
						<span className="block font-semibold -mx-2 lg:mx-0 text-xs text-primary_2">
							Wallet address:
						</span>
						<span className="w-full font-semibold truncate text-center text-sm md:text-xs xl:text-sm">
							{this.props.userAddress}
						</span>
					</div>

					<div className="p-4 text-center border-b sm:border-b-0 sm:border-r border-neutral-200">
						<span className="block font-semibold -mx-2 lg:mx-0 text-xs text-primary_2">
							Supply
						</span>
						{this.props.totalSupply}/{this.props.maxSupply}
					</div>

					<div className="p-4 text-center border-b sm:border-b-0 border-neutral-200">
						<span className="block font-semibold -mx-2 lg:mx-0 text-xs text-primary_2">
							Sale status
						</span>
						{this.isSaleOpen() ? (
							<>
								{this.props.isWhitelistMintEnabled
									? 'Whitelist only'
									: 'Open'}
							</>
						) : (
							'Closed'
						)}
					</div>

					<div className="text-xs font-primary col-span-2 p-2 border-t flex justify-center">
						<span>
							Visit the contract on the{' '}
							<a
								href={this.props.blockexplorer}
								target="_blank"
								rel="noopener noreferrer"
							>
								blockexplorer
							</a>
							.
						</span>
					</div>
				</div>
			</>
		);
	}
}
