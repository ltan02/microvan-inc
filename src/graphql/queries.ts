/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $id: ID
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBrands(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $id: ID
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTypes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
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
