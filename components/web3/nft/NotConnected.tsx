export default function NotConnected() {
	return (
		<div className="px-4 py-6 rounded-lg bg-white border border-neutral-50 shadow w-full">
			Use the Connect web3 button above to connect your wallet to
			mint.
			<br />
			If you prefer, you can mint <strong>
				directly
			</strong> through{' '}
			<a
				href="https://polygonscan.com/address/0x60d93f1aBF0606531e2ab412538D49a1Ddf8558E"
				target="_blank"
				rel="noreferrer"
			>
				Polygonscan
			</a>
			, without even connecting your wallet to this site! <br />
			<br />
			Cheers! <span className="emoji">🍻</span>
		</div>
	);
}
