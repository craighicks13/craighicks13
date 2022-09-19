import { useEffect, useState } from 'react';
import { gnosisSafe, hooks } from '../../../connectors/gnosisSafe';
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

export default function GnosisSafeListItem({ setError }: Props) {
	const chainId = useChainId();
	const accounts = useAccounts();
	const isActivating = useIsActivating();

	const isActive = useIsActive();

	const provider = useProvider();
	const ENSNames = useENSNames(provider);

	// attempt to connect eagerly on mount
	useEffect(() => {
		void gnosisSafe.connectEagerly().catch(() => {
			console.debug('Failed to connect eagerly to gnosis safe');
		});
	}, []);

	return (
		<ConnectButton
			connector={gnosisSafe}
			isActivating={isActivating}
			setError={setError}
		/>
	);
}
