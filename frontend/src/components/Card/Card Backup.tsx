import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
)

const StyledCard = styled.div`
  background: ${props => props.theme.color.grey[700]};
  border: 1px solid ${props => props.theme.color.green[100]}ff;
  border-radius: 0px;
  box-shadow: 5px 5px 3px ${props => props.theme.color.green[300]};
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card