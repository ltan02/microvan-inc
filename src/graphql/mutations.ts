/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTruck = /* GraphQL */ `
  mutation CreateTruck(
    $input: CreateTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    createTruck(input: $input, condition: $condition) {
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
export const updateTruck = /* GraphQL */ `
  mutation UpdateTruck(
    $input: UpdateTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    updateTruck(input: $input, condition: $condition) {
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
export const deleteTruck = /* GraphQL */ `
  mutation DeleteTruck(
    $input: DeleteTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    deleteTruck(input: $input, condition: $condition) {
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
export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
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
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
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
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
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
