/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTruck = /* GraphQL */ `
  query GetTruck($id: ID!) {
    getTruck(id: $id) {
      lotId
      name
      description
      chassisNumber
      sold
      price
      buyer
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTrucks = /* GraphQL */ `
  query ListTrucks(
    $filter: ModelTruckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrucks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        lotId
        name
        description
        chassisNumber
        sold
        price
        buyer
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
