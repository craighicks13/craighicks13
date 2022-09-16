import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React } from '@web3-react/core'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { metaMask } from '../../connectors/metaMask'
import { getName } from '../../lib/utils'
import { CHAINS, getAddChainParameters, URLS } from '../../lib/chains'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Menu, Transition, Listbox } from '@headlessui/react'
import { HiChevronDown, HiOutlineLogout, HiOutlineSelector } from 'react-icons/hi'
import { Accounts } from './Accounts'
import { Chain } from './Chain'
import { Status } from './Status'
import { coinbaseWallet } from '../../connectors/coinbaseWallet'
import { walletConnect } from '../../connectors/walletConnect'
import { gnosisSafe } from '../../connectors/gnosisSafe'
import MetaMaskListItem from './connectorCards/MetaMaskListItem'
import CoinbaseWalletListItem from './connectorCards/CoinbaseWalletListItem'
import GnosisSafeListItem from './connectorCards/GnosisSafeListItem'
import WalletConnectListItem from './connectorCards/WalletConnectListItem'
import SiteMessage from '../SiteMessage'

export default function MenuConnectWeb3() {
    const {      
        connector,
        chainId,
        accounts,
        isActivating,
        account,
        isActive,
        provider,
        ENSNames,
        ENSName,
        hooks, 
    } = useWeb3React();

    const isNetwork = connector instanceof Network
    const displayDefault = !isNetwork
    const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map((chainId) => Number(chainId))

    const [desiredChainId, setDesiredChainId] = useState<number>(isNetwork ? 1 : -1)
    const [showError, setShowError] = useState<boolean>(false)
    const [title, setTitle] = useState<JSX.Element | string>("");
    const [message, setMessage] = useState<JSX.Element | string>("");

    const setError = useCallback((error) => {
        if(error == undefined) {
            setShowError(false)
            setTitle(undefined)
            setMessage(undefined)
            return
        }
        setShowError(true)
        setTitle(`${error.name ?? 'Error'}`)
        setMessage(error.message)
    }, [])

    const closeError = (e) => {
        setShowError(false)
        setTitle(undefined)
        setMessage(undefined)
    }
    
    const switchChain = useCallback(
        (desiredChainId: number) => {
          setDesiredChainId(desiredChainId)
          // if we're already connected to the desired chain, return
          if (desiredChainId === chainId) {
            setError(undefined)
            return
          }
    
          // if they want to connect to the default chain and we're already connected, return
          if (desiredChainId === -1 && chainId !== undefined) {
            setError(undefined)
            return
          }
          
          if (connector instanceof WalletConnect || connector instanceof Network) {
            connector
              .activate(desiredChainId === -1 ? undefined : desiredChainId)
              .then(() => setError(undefined))
              .catch(setError)
          } else if (connector instanceof MetaMask || connector instanceof CoinbaseWallet || connector instanceof GnosisSafe) {
            connector
              .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
              .then(() => setError(undefined))
              .catch(setError)
          }
        },
        [connector, chainId, setError]
    )
      
    return (
        <>
        <SiteMessage display={showError} title={title} message={message} isError={true} closeWindow={closeError}/>
        {!connector || !chainId ?
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full items-center justify-center rounded-md bg-secondary px-4 py-2 text-white hover:bg-secondary_2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Connect
                        <HiChevronDown
                            className='ml-2 -mr-1 h-5 w-5 text-yellow-200 hover:text-yellow-100'
                            aria-hidden="true"
                            />
                    </Menu.Button>
                </div>
                <Transition 
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-75"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-75"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className='px-1 py-1'>
                                <MetaMaskListItem setError={setError}/>
                                <CoinbaseWalletListItem setError={setError} />
                                <GnosisSafeListItem setError={setError} />
                                <WalletConnectListItem setError={setError} />
                            </div>
                        </Menu.Items>
                </Transition>
            </Menu>
            <div className='absolute mt-2 right-0'>
                {/* <Status /> */}
            </div>
        </>
        :
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full items-center justify-center rounded-md bg-secondary px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    onClick={() => {
                        if (connector?.deactivate) {
                          void connector.deactivate()
                        } else {
                          void connector.resetState()
                        }
                      }}
                    >
                    Disconnect
                    <HiOutlineLogout
                        className='ml-2 -mr-1 h-5 w-5 text-yellow-200 hover:text-yellow-100'
                        aria-hidden="true"
                        />
                </Menu.Button>
            </div>
            <div className='absolute mt-2 right-0'>
                <div className=''>
                    {!(connector instanceof GnosisSafe) && (
                        <Listbox
                        value={chainId}
                        onChange={switchChain}
                        disabled={switchChain === undefined}
                    >
                        <div className='flex gap-2 items-center bg-primary_2 p-1 pl-2 rounded-md'>
                            <span className='text-sm text-white'>Chain:</span>
                           
                            <Listbox.Button className="inline-flex w-48 text-sm rounded-md items-center bg-white px-2 py-1 hover:bg-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <div className='w-full'>{CHAINS[chainId]?.name ?? chainId}</div>
                                <HiOutlineSelector className='h-5 w-5 text-primary_2' aria-hidden="true" />
                            </Listbox.Button>
                        </div>
                            <Transition 
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                                >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 md:max-h-fit rounded-md bg-white w-full overflow-auto py-1 text-sm shadow-lg ring-2 ring-primary_2 focus:outline-none">
                                    <div className='px-1 py-1'>
                                        {chainIds.map((chainId) => (
                                            <Listbox.Option key={chainId} value={chainId}
                                                    className={(({ active }) => `${active ? 'bg-primary' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`)}>
                                                {CHAINS[chainId]?.name ?? chainId}
                                            </Listbox.Option>
                                        ))}
                                    </div>
                                </Listbox.Options>
                                </Transition>
                            
                            </Listbox>
                    )}
                </div>
            </div>
        </Menu>
        }
        </>
  )
}