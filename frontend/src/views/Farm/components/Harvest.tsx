import React, { useState } from 'react'
import styled from 'styled-components'

import { Contract } from 'web3-eth-contract'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import FOGIcon from '../../../assets/img/logo.png'
import MISTIcon from '../../../assets/img/mist.png'

import useEarnings from '../../../hooks/useEarnings'
import useMistEarnings from '../../../hooks/useMistEarnings'
import useReward from '../../../hooks/useReward'

import {
  getDisplayBalance,
  getBalanceNumber,
} from '../../../utils/formatBalance'

interface HarvestProps {
  pid: number,
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const mistearnings = useMistEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <Label text="FOG Earned" />
            <CardIcon><img src={FOGIcon} height="60"/><Value value={getBalanceNumber(earnings)} /></CardIcon>
            <Label text="MIST Earned" />
            <CardIcon><img src={MISTIcon} height="50"/><Value value={getBalanceNumber(mistearnings)} /></CardIcon>          
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting FOG' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

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

const StyledSpacer = styled.div`
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

export default Harvest
