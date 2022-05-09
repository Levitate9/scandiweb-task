import React from 'react'
import styled from 'styled-components'

const StyledCartImage = styled.div`
  width: 200px;
  height: 288px;
`

const Image = styled.div`
  width: inherit;
  height: inherit;
  border: 1px solid #E5E5E5;
`

export default class CartImage extends React.Component {
  render() {
    return (
      <StyledCartImage>
        <Image />
        {/* image arrows here */}
      </StyledCartImage>
    )
  }
}