import React from 'react'
import styled from 'styled-components'

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 16px 32px 16px;
  width: 293px;

  & .primary {
    width: 140px;
    height: 43px;
    text-transform: uppercase;
    color: white;
    border: none;
    background-color: #5ECE7B;
  }

  & .secondary {
    width: 140px;
    height: 43px;
    text-transform: uppercase;
    color: #1D1F22;
    border: 1px solid #1D1F22;
    font-weight: 500;
    font-size: 14px;
  }

  & .primary:hover, .secondary:hover {
    cursor: pointer;
  }

  & .disabled {
    width: 140px;
    height: 43px;
    text-transform: uppercase;
    color: #A6A6A6;
    background-color: rgba(166, 166, 166, 0.2);
    border: 1px solid #A6A6A6;
    font-weight: 500;
    font-size: 14px;
  }

  & .disabled:hover {
    cursor: default;
  }

`

export default class Buttons extends React.Component {
  render() {
    return (
      <StyledButtons>
        <button className='secondary'>view bag</button>
        <button className={this.props.cartLength === 0 ? 'disabled' : 'primary'}>check out</button>
      </StyledButtons>
    )
  }
}