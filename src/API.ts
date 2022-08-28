/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTruckInput = {
  lotId: string,
  name: string,
  description?: string | null,
  chassisNumber?: number | null,
  sold: boolean,
  price: number,
  buyer: string,
  id?: string | null,
};

export type ModelTruckConditionInput = {
  lotId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  chassisNumber?: ModelIntInput | null,
  sold?: ModelBooleanInput | null,
  price?: ModelIntInput | null,
  buyer?: ModelStringInput | null,
  and?: Array< ModelTruckConditionInput | null > | null,
  or?: Array< ModelTruckConditionInput | null > | null,
  not?: ModelTruckConditionInput | null,
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
  lotId: string,
  name: string,
  description?: string | null,
  chassisNumber?: number | null,
  sold: boolean,
  price: number,
  buyer: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTruckInput = {
  lotId?: string | null,
  name?: string | null,
  description?: string | null,
  chassisNumber?: number | null,
  sold?: boolean | null,
  price?: number | null,
  buyer?: string | null,
  id: string,
};

export type DeleteTruckInput = {
  id: string,
};

export type ModelTruckFilterInput = {
  lotId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  chassisNumber?: ModelIntInput | null,
  sold?: ModelBooleanInput | null,
  price?: ModelIntInput | null,
  buyer?: ModelStringInput | null,
  and?: Array< ModelTruckFilterInput | null > | null,
  or?: Array< ModelTruckFilterInput | null > | null,
  not?: ModelTruckFilterInput | null,
};

export type ModelTruckConnection = {
  __typename: "ModelTruckConnection",
  items:  Array<Truck | null >,
  nextToken?: string | null,
};

export type CreateTruckMutationVariables = {
  input: CreateTruckInput,
  condition?: ModelTruckConditionInput | null,
};

export type CreateTruckMutation = {
  createTruck?:  {
    __typename: "Truck",
    lotId: string,
    name: string,
    description?: string | null,
    chassisNumber?: number | null,
    sold: boolean,
    price: number,
    buyer: string,
    id: string,
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
    lotId: string,
    name: string,
    description?: string | null,
    chassisNumber?: number | null,
    sold: boolean,
    price: number,
    buyer: string,
    id: string,
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
    lotId: string,
    name: string,
    description?: string | null,
    chassisNumber?: number | null,
    sold: boolean,
    price: number,
    buyer: string,
    id: string,
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
    lotId: string,
    name: string,
    description?: string | null,
    chassisNumber?: number | null,
    sold: boolean,
    price: number,
    buyer: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTrucksQueryVariables = {
  filter?: ModelTruckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrucksQuery = {
  listTrucks?:  {
    __typename: "ModelTruckConnection",
    items:  Array< {
      __typename: "Truck",
      lotId: string,
      name: string,
      description?: string | null,
      chassisNumber?: number | null,
      sold: boolean,
      price: number,
      buyer: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTruckSubscription = {
  onCreateTruck?:  {
    __typename: "Truck",
    lotId: string,
    name: string,
    description?: string | null,
    chassisNumber?: number | null,
    sold: boolean,
    price: number,
    buyer: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTruckSubscription = {
  onUpdateTruck?:  {
    __typename: "Truck",
    lotId: string,
    name: string,
    description?: string | null,
    chassisNumber?: number | null,
    sold: boolean,
    price: number,
    buyer: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTruckSubscription = {
  onDeleteTruck?:  {
    __typename: "Truck",
    lotId: string,
    name: string,
    description?: string | null,
    chassisNumber?: number | null,
    sold: boolean,
    price: number,
    buyer: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
