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

export const GET_CATEGORY_PRODUCTS = gql`
query category($name: CategoryInput) {
  category(input: $name) {
    products {
      id
      name
      brand
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
    }
  }
}
`