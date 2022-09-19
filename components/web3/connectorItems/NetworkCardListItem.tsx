import { useEffect, useState } from 'react';
import { hooks, network } from '../../../connectors/network';
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

export default function NetworkCardListItem({ setError }: Props) {
	const chainId = useChainId();
	const accounts = useAccounts();
	const isActivating = useIsActivating();

	const isActive = useIsActive();

	const provider = useProvider();
	const ENSNames = useENSNames(provider);

	// attempt to connect eagerly on mount
	useEffect(() => {
		void network.activate().catch(() => {
			console.debug('Failed to connect to network');
		});
	}, []);

	return (
		<ConnectButton
			connector={network}
			isActivating={isActivating}
			setError={setError}
		/>
	);
}
