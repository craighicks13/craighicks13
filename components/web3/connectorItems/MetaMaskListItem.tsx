import { useEffect, useState } from 'react';
import { hooks, metaMask } from '../../../connectors/metaMask';
import { ConnectButton } from '../ConnectButton';

const {
	useChainId,
	useAccounts,
	useIsActivating,
	useIsActive,
	useProvider,
	useENSNames,
} = hooks;

interface Props {
	setError: (error: Error | undefined) => void;
}

export default function MetaMaskListItem({ setError }: Props) {
	const chainId = useChainId();
	const accounts = useAccounts();
	const isActivating = useIsActivating();

	const isActive = useIsActive();

	const provider = useProvider();
	const ENSNames = useENSNames(provider);

	// attempt to connect eagerly on mount
	useEffect(() => {
		void metaMask.connectEagerly().catch(() => {
			console.debug('Failed to connect eagerly to metamask');
		});
	}, []);

	return (
		<ConnectButton
			connector={metaMask}
			isActivating={isActivating}
			setError={setError}
		/>
	);
}
