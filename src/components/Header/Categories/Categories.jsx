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
`

const StyledLi = styled.li`
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  display: inline-block;
  padding: 0 10px;
`

const StyledNavLink = styled(NavLink)`
  &.active {
    color: #5ECE7B;
    padding-bottom: 20px;
    border-bottom: 2px solid #5ECE7B;
  }

  text-decoration: none;
  text-transform: uppercase;
  color: black;
`

class Categories extends React.Component {
  render() {
    return (
      <StyledUl>
        {this.props.categories.map((el, id) =>
          <StyledLi key={id}>
            <StyledNavLink
              to={`/${el.name}`}
              className={(navData) => (navData.isActive ? 'active' : '')}
            ><span>{el.name}</span></StyledNavLink>
          </StyledLi>
        )}
      </StyledUl>
    )
  }
}

export default Categories