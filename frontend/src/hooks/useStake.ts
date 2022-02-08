import { useCallback } from 'react'

import useYam from './useYam'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../sushi/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const yam = useYam()

  const handleStake = useCallback(
    async (amount: string) => {
      console.log(pid)
      console.log(amount)
      console.log(account)
      const txHash = await stake(
        getMasterChefContract(yam),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, yam],
  )

  return { onStake: handleStake }
}

export default useStake
