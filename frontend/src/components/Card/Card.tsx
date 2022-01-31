import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
)

const StyledCard = styled.div`
  background-image: url("fog.gif");
  border: 1px solid ${props => props.theme.color.green[100]}ff;
  border-radius: 4px;
  box-shadow: 5px 5px 7px ${props => props.theme.color.green[300]};
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card