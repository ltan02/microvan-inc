/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBrands = /* GraphQL */ `
  mutation CreateBrands(
    $input: CreateBrandsInput!
    $condition: ModelBrandsConditionInput
  ) {
    createBrands(input: $input, condition: $condition) {
      brand
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateBrands = /* GraphQL */ `
  mutation UpdateBrands(
    $input: UpdateBrandsInput!
    $condition: ModelBrandsConditionInput
  ) {
    updateBrands(input: $input, condition: $condition) {
      brand
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteBrands = /* GraphQL */ `
  mutation DeleteBrands(
    $input: DeleteBrandsInput!
    $condition: ModelBrandsConditionInput
  ) {
    deleteBrands(input: $input, condition: $condition) {
      brand
      id
      createdAt
      updatedAt
    }
  }
`;
export const createTypes = /* GraphQL */ `
  mutation CreateTypes(
    $input: CreateTypesInput!
    $condition: ModelTypesConditionInput
  ) {
    createTypes(input: $input, condition: $condition) {
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateTypes = /* GraphQL */ `
  mutation UpdateTypes(
    $input: UpdateTypesInput!
    $condition: ModelTypesConditionInput
  ) {
    updateTypes(input: $input, condition: $condition) {
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTypes = /* GraphQL */ `
  mutation DeleteTypes(
    $input: DeleteTypesInput!
    $condition: ModelTypesConditionInput
  ) {
    deleteTypes(input: $input, condition: $condition) {
      type
      id
      createdAt
      updatedAt
    }
  }
`;
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
