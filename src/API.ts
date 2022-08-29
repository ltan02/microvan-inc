/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTruckInput = {
  id?: string | null,
  name: string,
  chassisNumber: number,
  lotId?: number | null,
  images?: Array< string | null > | null,
  description: string,
  startingPrice: number,
  categories?: Array< string | null > | null,
  sold?: boolean | null,
};

export type ModelTruckConditionInput = {
  name?: ModelStringInput | null,
  chassisNumber?: ModelIntInput | null,
  lotId?: ModelIntInput | null,
  images?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startingPrice?: ModelIntInput | null,
  categories?: ModelStringInput | null,
  sold?: ModelBooleanInput | null,
  and?: Array< ModelTruckConditionInput | null > | null,
  or?: Array< ModelTruckConditionInput | null > | null,
  not?: ModelTruckConditionInput | null,
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
  name: string,
  chassisNumber: number,
  lotId?: number | null,
  images?: Array< string | null > | null,
  description: string,
  startingPrice: number,
  categories?: Array< string | null > | null,
  sold?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTruckInput = {
  id: string,
  name?: string | null,
  chassisNumber?: number | null,
  lotId?: number | null,
  images?: Array< string | null > | null,
  description?: string | null,
  startingPrice?: number | null,
  categories?: Array< string | null > | null,
  sold?: boolean | null,
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

export type ModelTruckFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  chassisNumber?: ModelIntInput | null,
  lotId?: ModelIntInput | null,
  images?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startingPrice?: ModelIntInput | null,
  categories?: ModelStringInput | null,
  sold?: ModelBooleanInput | null,
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

export type CreateTruckMutationVariables = {
  input: CreateTruckInput,
  condition?: ModelTruckConditionInput | null,
};

export type CreateTruckMutation = {
  createTruck?:  {
    __typename: "Truck",
    id: string,
    name: string,
    chassisNumber: number,
    lotId?: number | null,
    images?: Array< string | null > | null,
    description: string,
    startingPrice: number,
    categories?: Array< string | null > | null,
    sold?: boolean | null,
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
    name: string,
    chassisNumber: number,
    lotId?: number | null,
    images?: Array< string | null > | null,
    description: string,
    startingPrice: number,
    categories?: Array< string | null > | null,
    sold?: boolean | null,
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
    name: string,
    chassisNumber: number,
    lotId?: number | null,
    images?: Array< string | null > | null,
    description: string,
    startingPrice: number,
    categories?: Array< string | null > | null,
    sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTruckQueryVariables = {
  id: string,
};

export type GetTruckQuery = {
  getTruck?:  {
    __typename: "Truck",
    id: string,
    name: string,
    chassisNumber: number,
    lotId?: number | null,
    images?: Array< string | null > | null,
    description: string,
    startingPrice: number,
    categories?: Array< string | null > | null,
    sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
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
        name: string,
        chassisNumber: number,
        lotId?: number | null,
        images?: Array< string | null > | null,
        description: string,
        startingPrice: number,
        categories?: Array< string | null > | null,
        sold?: boolean | null,
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

export type OnCreateTruckSubscription = {
  onCreateTruck?:  {
    __typename: "Truck",
    id: string,
    name: string,
    chassisNumber: number,
    lotId?: number | null,
    images?: Array< string | null > | null,
    description: string,
    startingPrice: number,
    categories?: Array< string | null > | null,
    sold?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTruckSubscription = {
  onUpdateTruck?:  {
    __typename: "Truck",
    id: string,
    name: string,
    chassisNumber: number,
    lotId?: number | null,
    images?: Array< string | null > | null,
    description: string,
    startingPrice: number,
    categories?: Array< string | null > | null,
    sold?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTruckSubscription = {
  onDeleteTruck?:  {
    __typename: "Truck",
    id: string,
    name: string,
    chassisNumber: number,
    lotId?: number | null,
    images?: Array< string | null > | null,
    description: string,
    startingPrice: number,
    categories?: Array< string | null > | null,
    sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
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
      name: string,
      chassisNumber: number,
      lotId?: number | null,
      images?: Array< string | null > | null,
      description: string,
      startingPrice: number,
      categories?: Array< string | null > | null,
      sold?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentPrice: number,
    bidder: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
