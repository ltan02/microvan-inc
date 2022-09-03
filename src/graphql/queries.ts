/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBrands = /* GraphQL */ `
  query GetBrands($id: ID!) {
    getBrands(id: $id) {
      brand
      id
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        brand
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTypes = /* GraphQL */ `
  query GetTypes($id: ID!) {
    getTypes(id: $id) {
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTruck = /* GraphQL */ `
  query GetTruck($id: ID!) {
    getTruck(id: $id) {
      id
      unicode
      model
      prefix
      chassis
      engineNumber
      description
      brand
      type
      images
      startingPrice
      sold
      bidder
      createdAt
      updatedAt
    }
  }
`;
export const listTrucks = /* GraphQL */ `
  query ListTrucks(
    $id: ID
    $filter: ModelTruckFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTrucks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        unicode
        model
        prefix
        chassis
        engineNumber
        description
        brand
        type
        images
        startingPrice
        sold
        bidder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
      id
      truckId
      truck {
        id
        unicode
        model
        prefix
        chassis
        engineNumber
        description
        brand
        type
        images
        startingPrice
        sold
        bidder
        createdAt
        updatedAt
      }
      currentPrice
      bidder
      createdAt
      updatedAt
    }
  }
`;
export const listBids = /* GraphQL */ `
  query ListBids(
    $id: ID
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBids(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        truckId
        truck {
          id
          unicode
          model
          prefix
          chassis
          engineNumber
          description
          brand
          type
          images
          startingPrice
          sold
          bidder
          createdAt
          updatedAt
        }
        currentPrice
        bidder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
