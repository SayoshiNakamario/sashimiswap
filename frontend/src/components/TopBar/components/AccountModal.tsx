import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useYam from '../../../hooks/useYam'
import { getSushiAddress } from '../../../sushi/utils'

import useTokenBalance from '../../../hooks/useTokenBalance'
import {
  getDisplayBalance,
  getBalanceNumber,
} from '../../../utils/formatBalance'

import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Label from '../../Label'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Separator from '../../Separator'
import Spacer from '../../Spacer'
import Value from '../../Value'
import {getEthChainInfo} from "../../../utils/getEthChainInfo";

import logo from '../../../assets/img/logo.png'

const {
  ethscanType
} = getEthChainInfo();

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const yam = useYam()
  const sushiBalance = useTokenBalance(getSushiAddress(yam))

  return (
    <Modal>
      <ModalTitle text="Your Account" />
      <StyledBalance>{account}</StyledBalance>
      <ModalContent>
      


        <div style={{ display: 'flex' }}>
          <StyledBalanceWrapper>
            <CardIcon>
              <img src={logo} height="120"></img>
            </CardIcon>
            <StyledBalance>
              <Value value={getBalanceNumber(sushiBalance)} />
              {/*<Label text="SUSHI Balance" />*/}
              <Label text="FOG Balance"/>
            </StyledBalance>
          </StyledBalanceWrapper>
        </div>

        <Spacer />
        <Button
          href={`https://${ethscanType}smartscan.cash/address/${account}`}
          text="View on Smartscan.cash"
          variant="secondary"
        />
        <Spacer />
        <Button
          onClick={handleSignOutClick}
          text="Sign out"
          variant="secondary"
        />
      </ModalContent>
      <ModalActions>
        <Button onClick={onDismiss} text="Cancel" />
      </ModalActions>
    </Modal>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[8]}px;
  margin-top: ${(props) => props.theme.spacing[8]}px;
`

export default AccountModal
