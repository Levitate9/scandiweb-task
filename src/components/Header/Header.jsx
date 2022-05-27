import React from 'react'
import styled from 'styled-components'
import Categories from './Categories/Categories'
import Logo from './Logo/Logo'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 11;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 1440px;
`

const ActionsPlug = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 10 1 35vw;
  height: 18.89px;
  margin: 18px 100px 18px 0;
`

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Categories categories={this.props.categories} setCategory={this.props.setCategory} />
        <Logo />
        <ActionsPlug />
      </StyledHeader>
    )
  }
}