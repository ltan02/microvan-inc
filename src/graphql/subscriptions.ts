/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTruck = /* GraphQL */ `
  subscription OnCreateTruck {
    onCreateTruck {
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
export const onUpdateTruck = /* GraphQL */ `
  subscription OnUpdateTruck {
    onUpdateTruck {
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
export const onDeleteTruck = /* GraphQL */ `
  subscription OnDeleteTruck {
    onDeleteTruck {
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
export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid {
    onCreateBid {
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
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid {
    onUpdateBid {
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
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid {
    onDeleteBid {
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
