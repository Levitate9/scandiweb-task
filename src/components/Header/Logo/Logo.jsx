import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logo.png'

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  top: 30px;
`

class Logo extends React.Component {
  render() {
    return (
      <StyledLogo>
        <img src={logo} alt='logo' />
      </StyledLogo>
    )
  }
}

export default Logo