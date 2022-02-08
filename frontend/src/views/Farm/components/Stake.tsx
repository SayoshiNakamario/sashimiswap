import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'

import { Contract } from 'web3-eth-contract'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import { AddIcon, RemoveIcon } from '../../../components/icons'
import IconButton from '../../../components/IconButton'
import Label from '../../../components/Label'
import Value from '../../../components/Value'

import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useStakedBalance from '../../../hooks/useStakedBalance'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useUnstake from '../../../hooks/useUnstake'

import useEarnings from '../../../hooks/useEarnings'
import useMistEarnings from '../../../hooks/useMistEarnings'
import useReward from '../../../hooks/useReward'

import { getBalanceNumber } from '../../../utils/formatBalance'

import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'

interface StakeProps {
  lpContract: Contract
  pid: number
  tokenName: string
}

const Stake: React.FC<StakeProps> = ({ lpContract, pid, tokenName }) => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  const allowance = useAllowance(lpContract)
  const { onApprove } = useApprove(lpContract)

  const tokenBalance = useTokenBalance(lpContract.options.address)
  const stakedBalance = useStakedBalance(pid)

  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  // Approve-Deposit-Harvest Button

  const earnings = useEarnings(pid)
  const mistearnings = useMistEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)

 let dynamicButton = null;

 {/*
  if (!allowance.toNumber()) {
    dynamicButton = 
      <Button
        disabled={requestedApproval}
        onClick={handleApprove}
        text={`Approve ${tokenName}`} />;
  } else if (stakedBalance.eq(new BigNumber(0))) {
    dynamicButton = 
      <Button
        text="Deposit"
        onClick={onPresentDeposit} />;
  } else {
    dynamicButton = 
      <Button
        disabled={!earnings.toNumber() || pendingTx}
        text={pendingTx ? 'Collecting FOG' : 'Harvest'}
        onClick={async () => {
        setPendingTx(true)
        await onReward()
        setPendingTx(false) }
          } />;
  }
*/}



  return (
<Card>
    <CardContent>
        <StyledCardContentInner>
            <Label text={`${tokenName} Tokens Staked`} />
            <Value value={getBalanceNumber(stakedBalance)} />
          <StyledCardActions>            
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Approve ${tokenName}`}
              />
            ) : (
              <>
                {stakedBalance.eq(new BigNumber(0)) ? (
                  <Button
                  text="Deposit"
                  onClick={onPresentDeposit}
                  />
                  ) : (
                  <Button
                  text="Harvest"
                  onClick={onPresentDeposit}
                  />
                )}
                <StyledActionSpacer />
                {stakedBalance.eq(new BigNumber(0)) ? (
                  <Button
                    text="Remove"
                    disabled={true}
                  />
                  ) : (
                    <Button
                    text="Remove"
                    onClick={onPresentWithdraw}
                    />
                  )
                }
              </>
            )} 
            
          </StyledCardActions>
        </StyledCardContentInner>
    </CardContent>
    </Card>
  )
}

const Testthing = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`
const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Stake
