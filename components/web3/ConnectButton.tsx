import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { Web3ReactHooks } from '@web3-react/core'
import { getName } from '../../lib/utils'
import { Menu } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { getAddChainParameters } from '../../lib/chains'


interface Props {
    connector: MetaMask | WalletConnect | CoinbaseWallet | Network | GnosisSafe
    isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
    setError: (error: Error | undefined) => void
}

export function ConnectButton({ connector, isActivating, setError } : Props) {
    const isNetwork = connector instanceof Network
    const displayDefault = !isNetwork
  
    const [desiredChainId, setDesiredChainId] = useState<number>(isNetwork ? 1 : -1)
    return(
        <div>
            <Menu.Item key={getName(connector)} as={Fragment}>
                {({ active }) => (
                    <button className={`${active ? 'bg-primary' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={
                            isActivating
                            ? undefined
                            : () =>
                                connector instanceof GnosisSafe
                                    ? void connector
                                        .activate()
                                        .then(() => setError(undefined))
                                        .catch(setError)
                                    : connector instanceof WalletConnect || connector instanceof Network
                                    ? connector
                                        .activate(desiredChainId === -1 ? undefined : desiredChainId)
                                        .then(() => setError(undefined))
                                        .catch(setError)
                                    : connector
                                        .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
                                        .then(() => setError(undefined))
                                        .catch(setError)
                        }
                        disabled={isActivating}
                        >
                        {getName(connector)}
                    </button>
                )}
            </Menu.Item>
        </div>
    )
}