import React, { useMemo, useCallback, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { useWallet } from 'use-wallet'
import numeral from 'numeral'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'

import useFarms from '../../../hooks/useFarms'
import useYam from '../../../hooks/useYam'
import BigNumber from 'bignumber.js'

import { Farm } from '../../../contexts/Farms'

import { bnToDec } from '../../../utils'
import { getEarned, getMasterChefContract } from '../../../sushi/utils'
import useAllStakedValue, {
  StakedValue,
} from '../../../hooks/useAllStakedValue'

import {BASIC_TOKEN} from '../../../constants/config';



interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const FarmCards: React.FC = () => {
  const [farms] = useFarms()
  const { account } = useWallet()
  const stakedValue = useAllStakedValue()

  const sushiIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === BASIC_TOKEN,
  )

  const sushiPrice =
    sushiIndex >= 0 && stakedValue[sushiIndex]
      ? stakedValue[sushiIndex].tokenPriceInWeth
      : new BigNumber(0)

  const BLOCKS_PER_YEAR = new BigNumber(5256000)
  const SASHIMI_PER_BLOCK = new BigNumber(100)

  const rows = farms.reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {
      const farmWithStakedValue = {
        ...farm,
        ...stakedValue[i],
        apy: stakedValue[i]
          ? sushiPrice
              .times(SASHIMI_PER_BLOCK)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[i].poolWeight)
              .div(stakedValue[i].totalWethValue)
          : null,
      }
      const newFarmRows = [...farmRows]
      if (newFarmRows[newFarmRows.length - 1].length === 3) {
        newFarmRows.push([farmWithStakedValue])
      } else {
        newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      }
      return newFarmRows
    },
    [[]],
  )

  return (
    <StyledCards>
      {!!rows[0].length ? (
        rows.map((farmRow, i) => (
          <StyledRow key={i}>
            {farmRow.map((farm, j) => (
              <React.Fragment key={j}>
                <FarmCard farm={farm} />
                {(j === 0 || j === 1) && <StyledSpacer />}
              </React.Fragment>
            ))}
          </StyledRow>
        ))
      ) : (
        <StyledLoadingWrapper>
          <Loader text="Moisture condensing ..." />
        </StyledLoadingWrapper>
      )}
    </StyledCards>
  )
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [startTime, setStartTime] = useState(0)
  const [harvestable, setHarvestable] = useState(0)

  const { account } = useWallet()
  const { lpTokenAddress } = farm
  const yam = useYam()
  const { ethereum } = useWallet()

  const farmicon = "https://raw.githubusercontent.com/SayoshiNakamario/assets/master/blockchains/smartbch/assets/" + farm.icon + "/logo.png";
  const farmicon2 = "https://raw.githubusercontent.com/SayoshiNakamario/assets/master/blockchains/smartbch/assets/" + farm.icon2 + "/logo.png";

  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {paddedHours}:{paddedMinutes}:{paddedSeconds}
      </span>
    )
  }

  
  useEffect(() => {
    async function fetchEarned() {
      if (yam) return
      const earned = await getEarned(
        getMasterChefContract(yam),
        lpTokenAddress,
        account,
      )
     setHarvestable(bnToDec(earned))
    }
    if (yam && account) {
      fetchEarned()
    }
  }, [yam, lpTokenAddress, account, setHarvestable])


  const poolActive = true // startTime * 1000 - Date.now() <= 0

//Farm APY %
  let farmApy:any;
  if (farm.apy && farm.apy.isNaN()) {
    farmApy = '- %';
  } else {
    farmApy = farm.apy
        ? `${farm.apy
            .times(new BigNumber(100))
            .toNumber()
            .toLocaleString('en-US')
            .slice(0, -1) || '-' }%`
        : 'Loading...';
  }
//End farm APY %

{/* const earnings = useEarnings(pid)
    const mistearnings = useMistEarnings(pid)
    const [pendingTx, setPendingTx] = useState(false)
    const { onReward } = useReward(pid) */}
    
  return (
    <StyledCardWrapper>
      {farm.tokenSymbol === 'FOG' && <StyledCardAccent />}
      <Card>
        <CardContent>
          <StyledContent>
          <CardIcon><img src={farmicon} height="75" style={{border: "0", borderRadius: "40px"}}></img><img src={farmicon2} height="75" style={{border: "0", borderRadius: "40px"}}></img></CardIcon>
            <StyledTitle>{farm.name}</StyledTitle>
              <StyledInsight>
                APY: {farmApy}
              </StyledInsight>
            <StyledDetails>
              <StyledDetail>FOG: {/* {getBalanceNumber(earnings)} */}</StyledDetail>
              <StyledDetail>MIST: {/* {getBalanceNumber(mistearnings)} */}</StyledDetail>
            </StyledDetails>
              
             
              <Button
              disabled={!poolActive}
              text={poolActive ? 'Deposit' : undefined}
              to={`/farms/${farm.id}`}
            >
              {!poolActive && (
                <Countdown
                  date={new Date(startTime * 1000)}
                  renderer={renderer}
                />
              )}
            </Button>

              {/* <span>
                {farm.tokenAmount
                  ? (farm.tokenAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                {farm.tokenSymbol}
              </span>
              <span>
                {farm.wethAmount
                  ? (farm.wethAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                ETH
              </span> */}

          </StyledContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>
  )
}

const RainbowLight = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -6px;
  right: -6px;
  bottom: -6px;
  left: -6px;
  z-index: -1;
`

const StyledCards = styled.div`
  width: 900px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const DivTest = styled.div`
background: pink;
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 24px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[8]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  margin-top: ${(props) => props.theme.spacing[2]}px;
  text-align: center;
`

const StyledDetail = styled.div`
  color: ${(props) => props.theme.color.grey[400]};
  align-items: left;
  text-align: left;
  border: 1px solid #e6dcd5;
  margin-right: 190px;
  width: 75%;
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: right;
  box-sizing: border-box;
  border-radius: 0px;
  background-color: ${props => props.theme.color.grey[1000]};
  color: #ffffff;
  width: 100%;
  margin-top: 0px;
  line-height: 32px;
  font-size: 16px;
  border: 0px solid #e6dcd5;
  text-align: right;
  padding: 0px;
`

export default FarmCards
