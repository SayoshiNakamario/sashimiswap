import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarnedMist, getMasterChefContract } from '../sushi/utils'
import useYam from './useYam'
import useBlock from './useBlock'

const useMistEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const yam = useYam()
  const masterChefContract = getMasterChefContract(yam)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarnedMist(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, yam])

  useEffect(() => {
    if (account && masterChefContract && yam) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, yam])

  return balance
}

export default useMistEarnings
