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
export const updateTruck = /* GraphQL */ `
  mutation UpdateTruck(
    $input: UpdateTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    updateTruck(input: $input, condition: $condition) {
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
export const deleteTruck = /* GraphQL */ `
  mutation DeleteTruck(
    $input: DeleteTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    deleteTruck(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
      id
      name
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
