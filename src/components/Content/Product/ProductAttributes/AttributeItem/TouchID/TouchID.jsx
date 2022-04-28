import React from 'react'
import styled from 'styled-components'

const StyledTouchID = styled.div`
  width: 28px;
  padding: 4px 8px;
  margin: 0 10px 0 0;
  border-radius: 3px;
  outline: 1px solid #bababa;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    color: #ffffff;
    background-color: #1D1F22;
  }
`

export default class TouchID extends React.Component {

  onSelected(e) {
    let divs = document.getElementsByClassName(this.props.className)
    Array.from(divs).map((el) => el.classList.contains('selected') && el.classList.remove('selected'))
    document.getElementById(e.target.id).classList.add('selected')
  }

  render() {
    return (
      <StyledTouchID
        id={`${this.props.className}-${this.props.id}`}
        value={this.props.value}
        className={this.props.className}
        onClick={this.onSelected.bind(this)}
      >{this.props.displayValue}</StyledTouchID>
    )
  }
}