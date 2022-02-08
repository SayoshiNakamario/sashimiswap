import React from 'react'
import styled from 'styled-components'

interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div`
  font-size: 36px;
  height: 80px;
  width: 80px;
  opacity: 0.85;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 0px ${props => props.theme.color.grey[300]},
    inset 0px 0px 0px ${props => props.theme.color.grey[100]};
  margin: 0 auto ${props => props.theme.spacing[1]}px; 
`

export default CardIcon