/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        brand {
          id
          name
          createdAt
          updatedAt
        }
        type {
          id
          name
          createdAt
          updatedAt
        }
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
        brand {
          id
          name
          createdAt
          updatedAt
        }
        type {
          id
          name
          createdAt
          updatedAt
        }
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
        brand {
          id
          name
          createdAt
          updatedAt
        }
        type {
          id
          name
          createdAt
          updatedAt
        }
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
      brand {
        id
        name
        createdAt
        updatedAt
      }
      type {
        id
        name
        createdAt
        updatedAt
      }
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
      brand {
        id
        name
        createdAt
        updatedAt
      }
      type {
        id
        name
        createdAt
        updatedAt
      }
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
      brand {
        id
        name
        createdAt
        updatedAt
      }
      type {
        id
        name
        createdAt
        updatedAt
      }
      images
      startingPrice
      sold
      bidder
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
