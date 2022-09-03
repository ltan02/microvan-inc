/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBrandsInput = {
  brand: Array< string >,
  id?: string | null,
};

export type ModelBrandsConditionInput = {
  brand?: ModelStringInput | null,
  and?: Array< ModelBrandsConditionInput | null > | null,
  or?: Array< ModelBrandsConditionInput | null > | null,
  not?: ModelBrandsConditionInput | null,
};

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


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Brands = {
  __typename: "Brands",
  brand: Array< string >,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBrandsInput = {
  brand?: Array< string > | null,
  id: string,
};

export type DeleteBrandsInput = {
  id: string,
};

export type CreateTypesInput = {
  type: Array< string >,
  id?: string | null,
};

export type ModelTypesConditionInput = {
  type?: ModelStringInput | null,
  and?: Array< ModelTypesConditionInput | null > | null,
  or?: Array< ModelTypesConditionInput | null > | null,
  not?: ModelTypesConditionInput | null,
};

export type Types = {
  __typename: "Types",
  type: Array< string >,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTypesInput = {
  type?: Array< string > | null,
  id: string,
};

export type DeleteTypesInput = {
  id: string,
};

export type CreateTruckInput = {
  id?: string | null,
  unicode: number,
  model?: string | null,
  prefix?: string | null,
  chassis: string,
  engineNumber: string,
  description: string,
  brand: string,
  type: string,
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
  brand?: ModelStringInput | null,
  type?: ModelStringInput | null,
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
  brand: string,
  type: string,
  images?: Array< string | null > | null,
  startingPrice: number,
  sold: boolean,
  bidder: string,
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
  brand?: string | null,
  type?: string | null,
  images?: Array< string | null > | null,
  startingPrice?: number | null,
  sold?: boolean | null,
  bidder?: string | null,
};

export type DeleteTruckInput = {
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

export type ModelBrandsFilterInput = {
  brand?: ModelStringInput | null,
  and?: Array< ModelBrandsFilterInput | null > | null,
  or?: Array< ModelBrandsFilterInput | null > | null,
  not?: ModelBrandsFilterInput | null,
};

export type ModelBrandsConnection = {
  __typename: "ModelBrandsConnection",
  items:  Array<Brands | null >,
  nextToken?: string | null,
};

export type ModelTypesFilterInput = {
  type?: ModelStringInput | null,
  and?: Array< ModelTypesFilterInput | null > | null,
  or?: Array< ModelTypesFilterInput | null > | null,
  not?: ModelTypesFilterInput | null,
};

export type ModelTypesConnection = {
  __typename: "ModelTypesConnection",
  items:  Array<Types | null >,
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
  brand?: ModelStringInput | null,
  type?: ModelStringInput | null,
  images?: ModelStringInput | null,
  startingPrice?: ModelIntInput | null,
  sold?: ModelBooleanInput | null,
  bidder?: ModelStringInput | null,
  and?: Array< ModelTruckFilterInput | null > | null,
  or?: Array< ModelTruckFilterInput | null > | null,
  not?: ModelTruckFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTruckConnection = {
  __typename: "ModelTruckConnection",
  items:  Array<Truck | null >,
  nextToken?: string | null,
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

export type ModelBidConnection = {
  __typename: "ModelBidConnection",
  items:  Array<Bid | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBrandsFilterInput = {
  brand?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBrandsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBrandsFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTypesFilterInput = {
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTypesFilterInput | null > | null,
  or?: Array< ModelSubscriptionTypesFilterInput | null > | null,
};

export type CreateBrandsMutationVariables = {
  input: CreateBrandsInput,
  condition?: ModelBrandsConditionInput | null,
};

export type CreateBrandsMutation = {
  createBrands?:  {
    __typename: "Brands",
    brand: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBrandsMutationVariables = {
  input: UpdateBrandsInput,
  condition?: ModelBrandsConditionInput | null,
};

export type UpdateBrandsMutation = {
  updateBrands?:  {
    __typename: "Brands",
    brand: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBrandsMutationVariables = {
  input: DeleteBrandsInput,
  condition?: ModelBrandsConditionInput | null,
};

export type DeleteBrandsMutation = {
  deleteBrands?:  {
    __typename: "Brands",
    brand: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTypesMutationVariables = {
  input: CreateTypesInput,
  condition?: ModelTypesConditionInput | null,
};

export type CreateTypesMutation = {
  createTypes?:  {
    __typename: "Types",
    type: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTypesMutationVariables = {
  input: UpdateTypesInput,
  condition?: ModelTypesConditionInput | null,
};

export type UpdateTypesMutation = {
  updateTypes?:  {
    __typename: "Types",
    type: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTypesMutationVariables = {
  input: DeleteTypesInput,
  condition?: ModelTypesConditionInput | null,
};

export type DeleteTypesMutation = {
  deleteTypes?:  {
    __typename: "Types",
    type: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    brand: string,
    type: string,
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
    brand: string,
    type: string,
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
    brand: string,
    type: string,
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
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
      brand: string,
      type: string,
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
      brand: string,
      type: string,
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
      brand: string,
      type: string,
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

export type GetBrandsQueryVariables = {
  id: string,
};

export type GetBrandsQuery = {
  getBrands?:  {
    __typename: "Brands",
    brand: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBrandsQueryVariables = {
  filter?: ModelBrandsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrandsQuery = {
  listBrands?:  {
    __typename: "ModelBrandsConnection",
    items:  Array< {
      __typename: "Brands",
      brand: Array< string >,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTypesQueryVariables = {
  id: string,
};

export type GetTypesQuery = {
  getTypes?:  {
    __typename: "Types",
    type: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTypesQueryVariables = {
  filter?: ModelTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTypesQuery = {
  listTypes?:  {
    __typename: "ModelTypesConnection",
    items:  Array< {
      __typename: "Types",
      type: Array< string >,
      id: string,
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
    brand: string,
    type: string,
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
      brand: string,
      type: string,
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
      brand: string,
      type: string,
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
        brand: string,
        type: string,
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

export type OnCreateBrandsSubscriptionVariables = {
  filter?: ModelSubscriptionBrandsFilterInput | null,
};

export type OnCreateBrandsSubscription = {
  onCreateBrands?:  {
    __typename: "Brands",
    brand: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBrandsSubscriptionVariables = {
  filter?: ModelSubscriptionBrandsFilterInput | null,
};

export type OnUpdateBrandsSubscription = {
  onUpdateBrands?:  {
    __typename: "Brands",
    brand: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBrandsSubscriptionVariables = {
  filter?: ModelSubscriptionBrandsFilterInput | null,
};

export type OnDeleteBrandsSubscription = {
  onDeleteBrands?:  {
    __typename: "Brands",
    brand: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTypesSubscriptionVariables = {
  filter?: ModelSubscriptionTypesFilterInput | null,
};

export type OnCreateTypesSubscription = {
  onCreateTypes?:  {
    __typename: "Types",
    type: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTypesSubscriptionVariables = {
  filter?: ModelSubscriptionTypesFilterInput | null,
};

export type OnUpdateTypesSubscription = {
  onUpdateTypes?:  {
    __typename: "Types",
    type: Array< string >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTypesSubscriptionVariables = {
  filter?: ModelSubscriptionTypesFilterInput | null,
};

export type OnDeleteTypesSubscription = {
  onDeleteTypes?:  {
    __typename: "Types",
    type: Array< string >,
    id: string,
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
    brand: string,
    type: string,
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
    brand: string,
    type: string,
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
    brand: string,
    type: string,
    images?: Array< string | null > | null,
    startingPrice: number,
    sold: boolean,
    bidder: string,
    createdAt: string,
    updatedAt: string,
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
      brand: string,
      type: string,
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
      brand: string,
      type: string,
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
      brand: string,
      type: string,
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
