import { useEffect, useState } from 'react'
import { coinbaseWallet, hooks } from '../../../connectors/coinbaseWallet'
import { ConnectButton } from '../ConnectButton'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

interface Props {
  setError: (error: Error | undefined) => void
}

export default function CoinbaseWalletListItem({ setError }: Props) {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void coinbaseWallet.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to coinbase wallet')
    })
  }, [])

  return (
    <ConnectButton
      connector={coinbaseWallet}
      isActivating={isActivating}
      setError={setError}
    />
  )
}
