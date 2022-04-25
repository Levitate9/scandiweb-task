import React from 'react'
import styled from 'styled-components'

const StyledPreloader = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: 50%;
  left: 50%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: inherit;
  }

  &:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient( 0deg, #ffffff 0%, #5ECE7B 100% );
    animation: spin .5s infinite linear;
  }

  &:after {
    width: 85%;
    height: 85%;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

class Preloader extends React.Component {
  render() {
    return (
      <StyledPreloader />
    )
  }
}

export default Preloader