import React from 'react'
//import styled from 'styled-components'
import styled, { ThemeContext } from 'styled-components'

export interface IconProps {
  color?: string,
  children?: React.ReactNode,
  size?: number,
}

let boxShadow: string
boxShadow = `4px 4px 8px #008d5c`

const Icon: React.FC<IconProps> = ({ children, color, size = 24 }) => (
  <StyledIcon>
    {React.isValidElement(children) && React.cloneElement(children, {
      color,
      size,
      boxShadow,
    })}
  </StyledIcon>
)

const StyledIcon = styled.div`
box-shadow: 4px 4px 8px #008d5c;
`


export default Icon