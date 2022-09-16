import { URI_AVAILABLE } from '@web3-react/walletconnect'
import { useEffect, useState } from 'react'
import { hooks, walletConnect } from '../../../connectors/walletConnect'
import { ConnectButton } from '../ConnectButton'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

interface Props {
  setError: (error: Error | undefined) => void
}

export default function WalletConnectListItem({ setError }: Props) {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // log URI when available
  useEffect(() => {
    walletConnect.events.on(URI_AVAILABLE, (uri: string) => {
      console.log(`uri: ${uri}`)
    })
  }, [])

  // attempt to connect eagerly on mount
  useEffect(() => {
    walletConnect.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to walletconnect')
    })
  }, [])

  return (
    <ConnectButton
      connector={walletConnect}
      isActivating={isActivating}
      setError={setError}
    />
  )
}
