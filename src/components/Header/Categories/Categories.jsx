import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding-inline-start: 0;
  flex: 10 1 35vw;
  margin-left: 100px;
`

const StyledLi = styled.li`
  display: inline-block;
  padding: 0 10px;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

const StyledNavLink = styled(NavLink)`
  &.active {
    color: #5ECE7B;
    padding-bottom: 20px;
    border-bottom: 2px solid #5ECE7B;
  }

  text-decoration: none;
  text-transform: uppercase;
  color: #1D1F22;

  & span {
    margin: 0 7px;
    padding: 0 7px 20px 7px;
  }
`

export default class Categories extends React.Component {
  onCategoryChange() {
    this.props.setCategory(this.props.id)
  }

  render() {
    return (
      <StyledUl>
        {this.props.categories.map((el, id) =>
          <StyledLi key={id}>
            <StyledNavLink
              to={`/${el.name}`}
              className={(navData) => (navData.isActive ? 'active' : '')}
            ><span id={el.name} onClick={this.onCategoryChange.bind(this)}>{el.name}</span></StyledNavLink>
          </StyledLi>
        )}
      </StyledUl>
    )
  }
}