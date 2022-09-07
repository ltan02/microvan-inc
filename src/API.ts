/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTruckInput = {
  id?: string | null,
  unicode: number,
  model?: string | null,
  prefix?: string | null,
  chassis: string,
  engineNumber: string,
  description: string,
  images?: Array< string | null > | null,
  startingPrice: number,
  sold: boolean,
  bidder: string,
};

export type ModelTruckConditionInput = {
  unicode?: ModelIntInput | null,
  model?: ModelStringInput | null,
  prefix?: ModelStringInput | null,
  chassis?: ModelStringInput | null,
  engineNumber?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  startingPrice?: ModelIntInput | null,
  sold?: ModelBooleanInput | null,
  bidder?: ModelStringInput | null,
  and?: Array< ModelTruckConditionInput | null > | null,
  or?: Array< ModelTruckConditionInput | null > | null,
  not?: ModelTruckConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Truck = {
  __typename: "Truck",
  id: string,
  unicode: number,
  model?: string | null,
  prefix?: string | null,
  chassis: string,
  engineNumber: string,
  description: string,
  brand: Brand,
  type: Type,
  images?: Array< string | null > | null,
  startingPrice: number,
  sold: boolean,
  bidder: string,
  createdAt: string,
  updatedAt: string,
};

export type Brand = {
  __typename: "Brand",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type Type = {
  __typename: "Type",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTruckInput = {
  id: string,
  unicode?: number | null,
  model?: string | null,
  prefix?: string | null,
  chassis?: string | null,
  engineNumber?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  startingPrice?: number | null,
  sold?: boolean | null,
  bidder?: string | null,
};

export type DeleteTruckInput = {
  id: string,
};

export type CreateBrandInput = {
  id?: string | null,
  name: string,
};

export type ModelBrandConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBrandConditionInput | null > | null,
  or?: Array< ModelBrandConditionInput | null > | null,
  not?: ModelBrandConditionInput | null,
};

export type UpdateBrandInput = {
  id: string,
  name?: string | null,
};

export type DeleteBrandInput = {
  id: string,
};

export type CreateTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTypeConditionInput | null > | null,
  or?: Array< ModelTypeConditionInput | null > | null,
  not?: ModelTypeConditionInput | null,
};

export type UpdateTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteTypeInput = {
  id: string,
};

export type CreateBidInput = {
  id?: string | null,
  truckId: string,
  currentPrice: number,
  bidder: string,
};

export type ModelBidConditionInput = {
  truckId?: ModelIDInput | null,
  currentPrice?: ModelIntInput | null,
  bidder?: ModelStringInput | null,
  and?: Array< ModelBidConditionInput | null > | null,
  or?: Array< ModelBidConditionInput | null > | null,
  not?: ModelBidConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Bid = {
  __typename: "Bid",
  id: string,
  truckId: string,
  truck?: Truck | null,
  currentPrice: number,
  bidder: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBidInput = {
  id: string,
  truckId?: string | null,
  currentPrice?: number | null,
  bidder?: string | null,
};

export type DeleteBidInput = {
  id: string,
};

export type ModelBidFilterInput = {
  id?: ModelIDInput | null,
  truckId?: ModelIDInput | null,
  currentPrice?: ModelIntInput | null,
  bidder?: ModelStringInput | null,
  and?: Array< ModelBidFilterInput | null > | null,
  or?: Array< ModelBidFilterInput | null > | null,
  not?: ModelBidFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBidConnection = {
  __typename: "ModelBidConnection",
  items:  Array<Bid | null >,
  nextToken?: string | null,
};

export type ModelTruckFilterInput = {
  id?: ModelIDInput | null,
  unicode?: ModelIntInput | null,
  model?: ModelStringInput | null,
  prefix?: ModelStringInput | null,
  chassis?: ModelStringInput | null,
  engineNumber?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  startingPrice?: ModelIntInput | null,
  sold?: ModelBooleanInput | null,
  bidder?: ModelStringInput | null,
  and?: Array< ModelTruckFilterInput | null > | null,
  or?: Array< ModelTruckFilterInput | null > | null,
  not?: ModelTruckFilterInput | null,
};

export type ModelTruckConnection = {
  __typename: "ModelTruckConnection",
  items:  Array<Truck | null >,
  nextToken?: string | null,
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBrandFilterInput | null > | null,
  or?: Array< ModelBrandFilterInput | null > | null,
  not?: ModelBrandFilterInput | null,
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection",
  items:  Array<Brand | null >,
  nextToken?: string | null,
};

export type ModelTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTypeFilterInput | null > | null,
  or?: Array< ModelTypeFilterInput | null > | null,
  not?: ModelTypeFilterInput | null,
};

export type ModelTypeConnection = {
  __typename: "ModelTypeConnection",
  items:  Array<Type | null >,
  nextToken?: string | null,
};

export type CreateTruckMutationVariables = {
  input: CreateTruckInput,
  condition?: ModelTruckConditionInput | null,
};

export type CreateTruckMutation = {
  createTruck?:  {
    __typename: "Truck",
    id: string,
    unicode: number,
    model?: string | null,
    prefix?: string | null,
    chassis: string,
    engineNumber: string,
    description: string,
    brand:  {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTruckMutationVariables = {
  input: UpdateTruckInput,
  condition?: ModelTruckConditionInput | null,
};

export type UpdateTruckMutation = {
  updateTruck?:  {
    __typename: "Truck",
    id: string,
    unicode: number,
    model?: string | null,
    prefix?: string | null,
    chassis: string,
    engineNumber: string,
    description: string,
    brand:  {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTruckMutationVariables = {
  input: DeleteTruckInput,
  condition?: ModelTruckConditionInput | null,
};

export type DeleteTruckMutation = {
  deleteTruck?:  {
    __typename: "Truck",
    id: string,
    unicode: number,
    model?: string | null,
    prefix?: string | null,
    chassis: string,
    engineNumber: string,
    description: string,
    brand:  {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBrandMutationVariables = {
  input: CreateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type CreateBrandMutation = {
  createBrand?:  {
    __typename: "Brand",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBrandMutationVariables = {
  input: UpdateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type UpdateBrandMutation = {
  updateBrand?:  {
    __typename: "Brand",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBrandMutationVariables = {
  input: DeleteBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type DeleteBrandMutation = {
  deleteBrand?:  {
    __typename: "Brand",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTypeMutationVariables = {
  input: CreateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type CreateTypeMutation = {
  createType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTypeMutationVariables = {
  input: UpdateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type UpdateTypeMutation = {
  updateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTypeMutationVariables = {
  input: DeleteTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type DeleteTypeMutation = {
  deleteType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBidMutationVariables = {
  input: CreateBidInput,
  condition?: ModelBidConditionInput | null,
};

export type CreateBidMutation = {
  createBid?:  {
    __typename: "Bid",
    id: string,
    truckId: string,
    truck?:  {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBidMutationVariables = {
  input: UpdateBidInput,
  condition?: ModelBidConditionInput | null,
};

export type UpdateBidMutation = {
  updateBid?:  {
    __typename: "Bid",
    id: string,
    truckId: string,
    truck?:  {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBidMutationVariables = {
  input: DeleteBidInput,
  condition?: ModelBidConditionInput | null,
};

export type DeleteBidMutation = {
  deleteBid?:  {
    __typename: "Bid",
    id: string,
    truckId: string,
    truck?:  {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBidQueryVariables = {
  id: string,
};

export type GetBidQuery = {
  getBid?:  {
    __typename: "Bid",
    id: string,
    truckId: string,
    truck?:  {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBidsQueryVariables = {
  id?: string | null,
  filter?: ModelBidFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBidsQuery = {
  listBids?:  {
    __typename: "ModelBidConnection",
    items:  Array< {
      __typename: "Bid",
      id: string,
      truckId: string,
      truck?:  {
        __typename: "Truck",
        id: string,
        unicode: number,
        model?: string | null,
        prefix?: string | null,
        chassis: string,
        engineNumber: string,
        description: string,
        images?: Array< string | null > | null,
        startingPrice: number,
        sold: boolean,
        bidder: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      currentPrice: number,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTruckQueryVariables = {
  id: string,
};

export type GetTruckQuery = {
  getTruck?:  {
    __typename: "Truck",
    id: string,
    unicode: number,
    model?: string | null,
    prefix?: string | null,
    chassis: string,
    engineNumber: string,
    description: string,
    brand:  {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTrucksQueryVariables = {
  id?: string | null,
  filter?: ModelTruckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTrucksQuery = {
  listTrucks?:  {
    __typename: "ModelTruckConnection",
    items:  Array< {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBrandQueryVariables = {
  id: string,
};

export type GetBrandQuery = {
  getBrand?:  {
    __typename: "Brand",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBrandsQueryVariables = {
  id?: string | null,
  filter?: ModelBrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBrandsQuery = {
  listBrands?:  {
    __typename: "ModelBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTypeQueryVariables = {
  id: string,
};

export type GetTypeQuery = {
  getType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTypesQueryVariables = {
  id?: string | null,
  filter?: ModelTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTypesQuery = {
  listTypes?:  {
    __typename: "ModelTypeConnection",
    items:  Array< {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBidSubscription = {
  onCreateBid?:  {
    __typename: "Bid",
    id: string,
    truckId: string,
    truck?:  {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBidSubscription = {
  onUpdateBid?:  {
    __typename: "Bid",
    id: string,
    truckId: string,
    truck?:  {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBidSubscription = {
  onDeleteBid?:  {
    __typename: "Bid",
    id: string,
    truckId: string,
    truck?:  {
      __typename: "Truck",
      id: string,
      unicode: number,
      model?: string | null,
      prefix?: string | null,
      chassis: string,
      engineNumber: string,
      description: string,
      brand:  {
        __typename: "Brand",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      images?: Array< string | null > | null,
      startingPrice: number,
      sold: boolean,
      bidder: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTruckSubscription = {
  onCreateTruck?:  {
    __typename: "Truck",
    id: string,
    unicode: number,
    model?: string | null,
    prefix?: string | null,
    chassis: string,
    engineNumber: string,
    description: string,
    brand:  {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTruckSubscription = {
  onUpdateTruck?:  {
    __typename: "Truck",
    id: string,
    unicode: number,
    model?: string | null,
    prefix?: string | null,
    chassis: string,
    engineNumber: string,
    description: string,
    brand:  {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTruckSubscription = {
  onDeleteTruck?:  {
    __typename: "Truck",
    id: string,
    unicode: number,
    model?: string | null,
    prefix?: string | null,
    chassis: string,
    engineNumber: string,
    description: string,
    brand:  {
      __typename: "Brand",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBrandSubscription = {
  onCreateBrand?:  {
    __typename: "Brand",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBrandSubscription = {
  onUpdateBrand?:  {
    __typename: "Brand",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBrandSubscription = {
  onDeleteBrand?:  {
    __typename: "Brand",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTypeSubscription = {
  onCreateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTypeSubscription = {
  onUpdateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTypeSubscription = {
  onDeleteType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
