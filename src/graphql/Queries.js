import { gql } from '@apollo/client'

export const GET_START_DATA = gql`
{
	categories {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
    }
  }
  currencies {
    label
    symbol
  }
}
`

// export const GET_CURRENCIES = gql`

// `
