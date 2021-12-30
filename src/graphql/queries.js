import { gql } from 'apollo-boost';


export const GET_CURRENCY = gql`
    query getCurriencies{
        currencies
    }
`;

export const QUERY_ALL = gql`
  query GetAllProducts {
    category{
      name
      products {
        id
        name
        inStock
        gallery
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
        description
        category
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

export const QUERY_TECH = gql`
  query GetTechProducts {
    category(input: { title: "tech" }){
      name
      products {
        id
        name
        inStock
        gallery
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
        description
        category
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

export const QUERY_CLOTHES = gql`
  query GetClothesProducts {
    category(input: { title: "clothes" }){
      name
      products {
        id
        name
        inStock
        gallery
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
        description
        category
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query GetSingleProduct ($id: String!){
      product(id: $id) {
          id
          name
          inStock
          gallery
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
          description
          category
          prices {
          currency
          amount
          }
          brand
      }
  }
`;