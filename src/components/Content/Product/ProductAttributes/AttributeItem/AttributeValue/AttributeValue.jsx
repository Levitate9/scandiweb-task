import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  margin: 0 8px 8px 0;
`

const StyledAttributeValue = styled.div`
  &.color {
    width: 32px;
    height: 32px;
    background-color: ${props => props.value};

    &:nth-child(6n+6) {
      margin: 0;
    }

    &:hover {
      cursor: pointer;
    }

    &.selected {
      outline: 2px solid #5ECE7B !important;
    }
  }

  &.capacity {
    width: 34px;
    margin: 0 10px 10px 0;
    padding: 4px 8px;
    border-radius: 3px;
    outline: 1px solid #bababa;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(5n+5) {
      margin: 0 0 10px 0;
    }

    &.selected {
      color: #ffffff;
      background-color: #1D1F22;
    }
  }

  &.size {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 63px;
    height: 45px;
    margin: 0 12px 12px 0;
    border: 1px solid #1D1F22;
    box-sizing: border-box;

    &:nth-child(4n+4) {
      margin: 0 0 12px 0;
    }

    &:hover {
      color: #ffffff;
      background-color: #1D1F22;
      cursor: pointer;
    }

    &.selected {
      color: #ffffff;
      background-color: #1D1F22;
    }
  }

  &:hover .tooltipText,
  &:hover .tooltipColor,
  &:hover .tooltipCapacity,
  &:hover .tooltipSize {
    visibility: visible;
  }
`

const Tooltip = styled.span`
  visibility: hidden;
  position: absolute;
  font-size: 12px;
  width: 50px;
  margin-left: -25px;
  padding: 5px 0;
  border-radius: 3px;
  color: #1D1F22;
  background-color: #ffffff;
  top: 130%;
  left: 50%;
  text-align: center;
  box-shadow: 0px 2px 15px rgba(168, 172, 176, 0.3);
  z-index: 1;

  &::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
  
`

export default class AttributeValue extends React.Component {

  componentDidMount() {
    if (this.props.id === 'White') {
      document.getElementById('White').style.outline = '1px solid #bababa'
    }

    switch (this.props.className) {
      case 'Color':
        return this.addSelected('color')
      case 'Capacity':
        return this.addSelected('capacity')
      case 'Size':
        return this.addSelected('size')
      default:
    }
  }

  addSelected(className) {
    document.getElementsByClassName(className)[0].classList.add('selected')
  }

  onItemSelected(e) {
    if (e.target.classList.contains('color') && e.target.id === 'White') {
      document.getElementById('White').removeAttribute('outline')
      document.getElementById('White').classList.add('selected')
    }

    const handler = (className) => {
      let divs = document.getElementsByClassName(className)
      Array.from(divs).map((el) => el.classList.contains('selected') && el.classList.remove('selected'))
      document.getElementById(e.target.id).classList.add('selected')
    }

    handler(this.props.className.toLowerCase())
  }

  render() {
    const valueClass = this.props.className.toLowerCase()
    
    switch (this.props.className) {
      case 'Color':
        return (
          <Background>
            <StyledAttributeValue 
              id={this.props.id} 
              className={valueClass} 
              value={this.props.value}
              onClick={this.onItemSelected.bind(this)}
            ><Tooltip className={`tooltip${this.props.className}`}>{this.props.displayValue}</Tooltip>
            </StyledAttributeValue>
          </Background>
        )
      case 'Capacity':
      case 'Size':
      default:
        return (
          <StyledAttributeValue
            id={this.props.id} 
            className={valueClass}
            value={this.props.value}
            onClick={this.onItemSelected.bind(this)}
          >{this.props.value}</StyledAttributeValue>
        )
    }
  }
}