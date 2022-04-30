import React from 'react'
import styled from 'styled-components'

const StyledColor = styled.div`
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


  &:hover .tooltipcolor {
    visibility: visible;
  }
}
`

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

export default class Color extends React.Component {

  componentDidMount() {
    if (this.props.id === 'White') {
      document.getElementById('White').style.outline = '1px solid #bababa'
    }
  }

  render() {
    return (
      <Background>
        <StyledColor 
          id={this.props.id} 
          className={this.props.className} 
          value={this.props.value}
          onClick={this.props.onSelect.bind(this)}
        ><Tooltip className={`tooltip${this.props.className}`}>{this.props.displayValue}</Tooltip>
        </StyledColor>
      </Background>
    )
  }
}