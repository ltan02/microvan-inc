/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBrands = /* GraphQL */ `
  subscription OnCreateBrands($filter: ModelSubscriptionBrandsFilterInput) {
    onCreateBrands(filter: $filter) {
      brand
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBrands = /* GraphQL */ `
  subscription OnUpdateBrands($filter: ModelSubscriptionBrandsFilterInput) {
    onUpdateBrands(filter: $filter) {
      brand
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBrands = /* GraphQL */ `
  subscription OnDeleteBrands($filter: ModelSubscriptionBrandsFilterInput) {
    onDeleteBrands(filter: $filter) {
      brand
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTypes = /* GraphQL */ `
  subscription OnCreateTypes($filter: ModelSubscriptionTypesFilterInput) {
    onCreateTypes(filter: $filter) {
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTypes = /* GraphQL */ `
  subscription OnUpdateTypes($filter: ModelSubscriptionTypesFilterInput) {
    onUpdateTypes(filter: $filter) {
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTypes = /* GraphQL */ `
  subscription OnDeleteTypes($filter: ModelSubscriptionTypesFilterInput) {
    onDeleteTypes(filter: $filter) {
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTruck = /* GraphQL */ `
  subscription OnCreateTruck {
    onCreateTruck {
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
export const onUpdateTruck = /* GraphQL */ `
  subscription OnUpdateTruck {
    onUpdateTruck {
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
export const onDeleteTruck = /* GraphQL */ `
  subscription OnDeleteTruck {
    onDeleteTruck {
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
export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid {
    onCreateBid {
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
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid {
    onUpdateBid {
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
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid {
    onDeleteBid {
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
