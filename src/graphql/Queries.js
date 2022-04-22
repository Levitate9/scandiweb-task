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
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
  currencies {
    label
    symbol
  }
}
`
// export const GET_CATEGORIES = gql`
// {
// 	categories {
//     name
//   }
// }
// `

