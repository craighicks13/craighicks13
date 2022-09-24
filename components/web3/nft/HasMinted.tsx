import React from 'react';

interface Props {
	marketplace: string;
	txhash: string;
}

interface State {}
const defaultState: State = {};

export default function HasMinted({ marketplace, txhash }: Props) {
	return (
		<div className="px-4 py-6 rounded-lg bg-primary_2 border border-neutral-50 shadow w-full">
			<span className="text-3xl text-secondary font-bold flex justify-center mb-4">
				Congradulations!!!
			</span>
			<p>Your Crypto Craig NFT&apos;s have successfully minted!!</p>
			<p>Here is your transaction hash: {txhash}</p>
			<p>
				Checkout your nft&apos;s on{' '}
				<a
					href={marketplace}
					target="_blank"
					rel="noopener noreferrer"
				>
					OpenSea
				</a>
				!
			</p>
			<br />
			Cheers! <span className="emoji">🍻</span>
		</div>
	);
}
