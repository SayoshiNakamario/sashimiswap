import { stderr } from 'process'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { sortAndDeduplicateDiagnostics } from 'typescript'

import { useWallet } from 'use-wallet'

import useModal from '../../../hooks/useModal'

import Button from '../../Button'
import WalletProviderModal from '../../WalletProviderModal'

import AccountModal from './AccountModal'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {

  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />, 'provider')
  
  const { account } = useWallet()

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    <StyledAccountButton>
      {!account ? (
        <Button
          onClick={handleUnlockClick}
          size="sm"
          text="Connect Wallet"
        />
      ) : (
        <Button
          onClick={onPresentAccountModal}
          size="sm"
          text={account.slice(0 , 4) + '....' + account.slice(38)}
        />
      )}
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div`
`

export default AccountButton