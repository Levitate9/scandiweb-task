import React from 'react'
import styled from 'styled-components'

const StyledImageButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 24px;
`

const ArrowButton = styled.div`
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.73);
  color: #ffffff;

  &:first-child {
    margin-right: 8px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: rgba(0, 0, 0, 1);
  }

  &.right:after {
    position: absolute;
    top: 30%;
    left 70%;
    content: '';
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
  }

  &.left:after {
    position: absolute;
    top: 30%;
    left: 17%;
    content: '';
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
  }
`

export default class ImageButtons extends React.Component {
  prev() {
    this.props.prevImg()
  }

  next() {
    this.props.nextImg()
  }

  render() {
    return (
      <StyledImageButtons>
        <ArrowButton className='left' onClick={this.prev.bind(this)}></ArrowButton>
        <ArrowButton className='right' onClick={this.next.bind(this)}></ArrowButton>
      </StyledImageButtons>
    )
  }
}