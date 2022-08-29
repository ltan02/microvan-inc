/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTruck = /* GraphQL */ `
  query GetTruck($id: ID!) {
    getTruck(id: $id) {
      id
      name
      chassisNumber
      lotId
      images
      description
      startingPrice
      categories
      sold
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
        name
        chassisNumber
        lotId
        images
        description
        startingPrice
        categories
        sold
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
        name
        chassisNumber
        lotId
        images
        description
        startingPrice
        categories
        sold
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
          name
          chassisNumber
          lotId
          images
          description
          startingPrice
          categories
          sold
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
