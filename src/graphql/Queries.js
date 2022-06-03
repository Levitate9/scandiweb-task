import { gql } from '@apollo/client'

export const GET_START_DATA = gql`
{
	categories {
    name
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

export const GET_PRODUCT = gql`
query product($id: String!) {
  product(id: $id) {
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
`