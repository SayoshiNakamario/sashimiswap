import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PageHeader from '../../../components/PageHeader'
import chef from '../../../assets/img/chef.png'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledExternalLink target="_blank" to={{ pathname: "https://app.mistswap.fi/pool" }}>
         
      </StyledExternalLink>
      <StyledExternalLink target="_blank" to={{ pathname: "https://app.mistswap.fi/pool" }}>
        Get Liquidity
      </StyledExternalLink>
      <StyledExternalLink target="_blank" to={{ pathname: "https://oasis.cash/" }}>
        Marketplace
      </StyledExternalLink>
      
      <StyledLogoLink exact activeClassName="active" to="/">
      <PageHeader
                icon={<img src={chef} height="120" style={{ marginTop: 25 }}/>} // logo
              />
      </StyledLogoLink>

      <StyledLink exact activeClassName="active" to="/farms">
        Farm
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/stake">
        Stake
      </StyledLink>
      {/*<StyledAbsoluteLink*/}
      {/*  href="https://medium.com/sushiswap/the-sushiswap-project-c4049ea9941e"*/}
      {/*  target="_blank"*/}
      {/*>*/}
      {/*  About*/}
      {/*</StyledAbsoluteLink>*/}
    </StyledNav>
    
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  border: 0px solid #e6dcd5;
  border-color: white;
  width: 75px;
  padding-left: ${(props) => props.theme.spacing[8]}px;
  padding-right: ${(props) => props.theme.spacing[8]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.green[100]};
  }
  &.active {
    color: ${(props) => props.theme.color.green[100]};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[8]}px;
    padding-right: ${(props) => props.theme.spacing[8]}px;
  }
`

const StyledLogoLink = styled(NavLink)``

const StyledExternalLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  border: 0px solid #e6dcd5;
  text-align: center;
  border-color: white;
  width: 100px;
  padding-left: ${(props) => props.theme.spacing[2]}px;
  padding-right: ${(props) => props.theme.spacing[8]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.green[100]};
  }
  &.active {
    color: ${(props) => props.theme.color.green[100]};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[8]}px;
    padding-right: ${(props) => props.theme.spacing[8]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[8]}px;
  padding-right: ${(props) => props.theme.spacing[8]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[8]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
