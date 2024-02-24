/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  float8: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** columns and relationships of "Buildings" */
export type Buildings = {
  __typename?: 'Buildings';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  rFloors: Array<Floors>;
  /** An aggregate relationship */
  rFloors_aggregate: Floors_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "Buildings" */
export type BuildingsRFloorsArgs = {
  distinct_on?: InputMaybe<Array<Floors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Floors_Order_By>>;
  where?: InputMaybe<Floors_Bool_Exp>;
};


/** columns and relationships of "Buildings" */
export type BuildingsRFloors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Floors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Floors_Order_By>>;
  where?: InputMaybe<Floors_Bool_Exp>;
};

/** aggregated selection of "Buildings" */
export type Buildings_Aggregate = {
  __typename?: 'Buildings_aggregate';
  aggregate?: Maybe<Buildings_Aggregate_Fields>;
  nodes: Array<Buildings>;
};

/** aggregate fields of "Buildings" */
export type Buildings_Aggregate_Fields = {
  __typename?: 'Buildings_aggregate_fields';
  avg?: Maybe<Buildings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buildings_Max_Fields>;
  min?: Maybe<Buildings_Min_Fields>;
  stddev?: Maybe<Buildings_Stddev_Fields>;
  stddev_pop?: Maybe<Buildings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buildings_Stddev_Samp_Fields>;
  sum?: Maybe<Buildings_Sum_Fields>;
  var_pop?: Maybe<Buildings_Var_Pop_Fields>;
  var_samp?: Maybe<Buildings_Var_Samp_Fields>;
  variance?: Maybe<Buildings_Variance_Fields>;
};


/** aggregate fields of "Buildings" */
export type Buildings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buildings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buildings_Avg_Fields = {
  __typename?: 'Buildings_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Buildings". All fields are combined with a logical 'AND'. */
export type Buildings_Bool_Exp = {
  _and?: InputMaybe<Array<Buildings_Bool_Exp>>;
  _not?: InputMaybe<Buildings_Bool_Exp>;
  _or?: InputMaybe<Array<Buildings_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rFloors?: InputMaybe<Floors_Bool_Exp>;
  rFloors_aggregate?: InputMaybe<Floors_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Buildings" */
export enum Buildings_Constraint {
  /** unique or primary key constraint on columns "id" */
  BuildingsPkey = 'Buildings_pkey'
}

/** input type for incrementing numeric columns in table "Buildings" */
export type Buildings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Buildings" */
export type Buildings_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rFloors?: InputMaybe<Floors_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buildings_Max_Fields = {
  __typename?: 'Buildings_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buildings_Min_Fields = {
  __typename?: 'Buildings_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "Buildings" */
export type Buildings_Mutation_Response = {
  __typename?: 'Buildings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buildings>;
};

/** input type for inserting object relation for remote table "Buildings" */
export type Buildings_Obj_Rel_Insert_Input = {
  data: Buildings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buildings_On_Conflict>;
};

/** on_conflict condition type for table "Buildings" */
export type Buildings_On_Conflict = {
  constraint: Buildings_Constraint;
  update_columns?: Array<Buildings_Update_Column>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};

/** Ordering options when selecting data from "Buildings". */
export type Buildings_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rFloors_aggregate?: InputMaybe<Floors_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Buildings */
export type Buildings_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Buildings" */
export enum Buildings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Buildings" */
export type Buildings_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buildings_Stddev_Fields = {
  __typename?: 'Buildings_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buildings_Stddev_Pop_Fields = {
  __typename?: 'Buildings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buildings_Stddev_Samp_Fields = {
  __typename?: 'Buildings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Buildings" */
export type Buildings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buildings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buildings_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buildings_Sum_Fields = {
  __typename?: 'Buildings_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Buildings" */
export enum Buildings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Buildings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buildings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buildings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buildings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buildings_Var_Pop_Fields = {
  __typename?: 'Buildings_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buildings_Var_Samp_Fields = {
  __typename?: 'Buildings_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buildings_Variance_Fields = {
  __typename?: 'Buildings_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Floors" */
export type Floors = {
  __typename?: 'Floors';
  building_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  rBuilding: Buildings;
  /** An array relationship */
  rNodes: Array<GuidingNodes>;
  /** An aggregate relationship */
  rNodes_aggregate: GuidingNodes_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "Floors" */
export type FloorsRNodesArgs = {
  distinct_on?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GuidingNodes_Order_By>>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};


/** columns and relationships of "Floors" */
export type FloorsRNodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GuidingNodes_Order_By>>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};

/** aggregated selection of "Floors" */
export type Floors_Aggregate = {
  __typename?: 'Floors_aggregate';
  aggregate?: Maybe<Floors_Aggregate_Fields>;
  nodes: Array<Floors>;
};

export type Floors_Aggregate_Bool_Exp = {
  count?: InputMaybe<Floors_Aggregate_Bool_Exp_Count>;
};

export type Floors_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Floors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Floors_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Floors" */
export type Floors_Aggregate_Fields = {
  __typename?: 'Floors_aggregate_fields';
  avg?: Maybe<Floors_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Floors_Max_Fields>;
  min?: Maybe<Floors_Min_Fields>;
  stddev?: Maybe<Floors_Stddev_Fields>;
  stddev_pop?: Maybe<Floors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Floors_Stddev_Samp_Fields>;
  sum?: Maybe<Floors_Sum_Fields>;
  var_pop?: Maybe<Floors_Var_Pop_Fields>;
  var_samp?: Maybe<Floors_Var_Samp_Fields>;
  variance?: Maybe<Floors_Variance_Fields>;
};


/** aggregate fields of "Floors" */
export type Floors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Floors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Floors" */
export type Floors_Aggregate_Order_By = {
  avg?: InputMaybe<Floors_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Floors_Max_Order_By>;
  min?: InputMaybe<Floors_Min_Order_By>;
  stddev?: InputMaybe<Floors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Floors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Floors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Floors_Sum_Order_By>;
  var_pop?: InputMaybe<Floors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Floors_Var_Samp_Order_By>;
  variance?: InputMaybe<Floors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Floors" */
export type Floors_Arr_Rel_Insert_Input = {
  data: Array<Floors_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Floors_On_Conflict>;
};

/** aggregate avg on columns */
export type Floors_Avg_Fields = {
  __typename?: 'Floors_avg_fields';
  building_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Floors" */
export type Floors_Avg_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Floors". All fields are combined with a logical 'AND'. */
export type Floors_Bool_Exp = {
  _and?: InputMaybe<Array<Floors_Bool_Exp>>;
  _not?: InputMaybe<Floors_Bool_Exp>;
  _or?: InputMaybe<Array<Floors_Bool_Exp>>;
  building_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rBuilding?: InputMaybe<Buildings_Bool_Exp>;
  rNodes?: InputMaybe<GuidingNodes_Bool_Exp>;
  rNodes_aggregate?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Floors" */
export enum Floors_Constraint {
  /** unique or primary key constraint on columns "id" */
  FloorsPkey = 'Floors_pkey'
}

/** input type for incrementing numeric columns in table "Floors" */
export type Floors_Inc_Input = {
  building_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Floors" */
export type Floors_Insert_Input = {
  building_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rBuilding?: InputMaybe<Buildings_Obj_Rel_Insert_Input>;
  rNodes?: InputMaybe<GuidingNodes_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Floors_Max_Fields = {
  __typename?: 'Floors_max_fields';
  building_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "Floors" */
export type Floors_Max_Order_By = {
  building_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Floors_Min_Fields = {
  __typename?: 'Floors_min_fields';
  building_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "Floors" */
export type Floors_Min_Order_By = {
  building_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Floors" */
export type Floors_Mutation_Response = {
  __typename?: 'Floors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Floors>;
};

/** input type for inserting object relation for remote table "Floors" */
export type Floors_Obj_Rel_Insert_Input = {
  data: Floors_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Floors_On_Conflict>;
};

/** on_conflict condition type for table "Floors" */
export type Floors_On_Conflict = {
  constraint: Floors_Constraint;
  update_columns?: Array<Floors_Update_Column>;
  where?: InputMaybe<Floors_Bool_Exp>;
};

/** Ordering options when selecting data from "Floors". */
export type Floors_Order_By = {
  building_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rBuilding?: InputMaybe<Buildings_Order_By>;
  rNodes_aggregate?: InputMaybe<GuidingNodes_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Floors */
export type Floors_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Floors" */
export enum Floors_Select_Column {
  /** column name */
  BuildingId = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Floors" */
export type Floors_Set_Input = {
  building_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Floors_Stddev_Fields = {
  __typename?: 'Floors_stddev_fields';
  building_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Floors" */
export type Floors_Stddev_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Floors_Stddev_Pop_Fields = {
  __typename?: 'Floors_stddev_pop_fields';
  building_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Floors" */
export type Floors_Stddev_Pop_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Floors_Stddev_Samp_Fields = {
  __typename?: 'Floors_stddev_samp_fields';
  building_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Floors" */
export type Floors_Stddev_Samp_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Floors" */
export type Floors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Floors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Floors_Stream_Cursor_Value_Input = {
  building_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Floors_Sum_Fields = {
  __typename?: 'Floors_sum_fields';
  building_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Floors" */
export type Floors_Sum_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Floors" */
export enum Floors_Update_Column {
  /** column name */
  BuildingId = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Floors_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Floors_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Floors_Set_Input>;
  /** filter the rows which have to be updated */
  where: Floors_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Floors_Var_Pop_Fields = {
  __typename?: 'Floors_var_pop_fields';
  building_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Floors" */
export type Floors_Var_Pop_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Floors_Var_Samp_Fields = {
  __typename?: 'Floors_var_samp_fields';
  building_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Floors" */
export type Floors_Var_Samp_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Floors_Variance_Fields = {
  __typename?: 'Floors_variance_fields';
  building_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Floors" */
export type Floors_Variance_Order_By = {
  building_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "GuidingNodes" */
export type GuidingNodes = {
  __typename?: 'GuidingNodes';
  created_at: Scalars['timestamptz']['output'];
  floor_id: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  lat: Scalars['float8']['output'];
  lon: Scalars['float8']['output'];
  /** An object relationship */
  rFloor: Floors;
  /** An array relationship */
  rFroms: Array<Point_Relation>;
  /** An aggregate relationship */
  rFroms_aggregate: Point_Relation_Aggregate;
  /** An array relationship */
  rTos: Array<Point_Relation>;
  /** An aggregate relationship */
  rTos_aggregate: Point_Relation_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "GuidingNodes" */
export type GuidingNodesRFromsArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};


/** columns and relationships of "GuidingNodes" */
export type GuidingNodesRFroms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};


/** columns and relationships of "GuidingNodes" */
export type GuidingNodesRTosArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};


/** columns and relationships of "GuidingNodes" */
export type GuidingNodesRTos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};

/** aggregated selection of "GuidingNodes" */
export type GuidingNodes_Aggregate = {
  __typename?: 'GuidingNodes_aggregate';
  aggregate?: Maybe<GuidingNodes_Aggregate_Fields>;
  nodes: Array<GuidingNodes>;
};

export type GuidingNodes_Aggregate_Bool_Exp = {
  avg?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<GuidingNodes_Aggregate_Bool_Exp_Var_Samp>;
};

export type GuidingNodes_Aggregate_Bool_Exp_Avg = {
  arguments: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Corr = {
  arguments: GuidingNodes_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Corr_Arguments = {
  X: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type GuidingNodes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: GuidingNodes_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type GuidingNodes_Aggregate_Bool_Exp_Max = {
  arguments: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Min = {
  arguments: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Sum = {
  arguments: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type GuidingNodes_Aggregate_Bool_Exp_Var_Samp = {
  arguments: GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GuidingNodes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "GuidingNodes" */
export type GuidingNodes_Aggregate_Fields = {
  __typename?: 'GuidingNodes_aggregate_fields';
  avg?: Maybe<GuidingNodes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<GuidingNodes_Max_Fields>;
  min?: Maybe<GuidingNodes_Min_Fields>;
  stddev?: Maybe<GuidingNodes_Stddev_Fields>;
  stddev_pop?: Maybe<GuidingNodes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GuidingNodes_Stddev_Samp_Fields>;
  sum?: Maybe<GuidingNodes_Sum_Fields>;
  var_pop?: Maybe<GuidingNodes_Var_Pop_Fields>;
  var_samp?: Maybe<GuidingNodes_Var_Samp_Fields>;
  variance?: Maybe<GuidingNodes_Variance_Fields>;
};


/** aggregate fields of "GuidingNodes" */
export type GuidingNodes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "GuidingNodes" */
export type GuidingNodes_Aggregate_Order_By = {
  avg?: InputMaybe<GuidingNodes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GuidingNodes_Max_Order_By>;
  min?: InputMaybe<GuidingNodes_Min_Order_By>;
  stddev?: InputMaybe<GuidingNodes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<GuidingNodes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<GuidingNodes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<GuidingNodes_Sum_Order_By>;
  var_pop?: InputMaybe<GuidingNodes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<GuidingNodes_Var_Samp_Order_By>;
  variance?: InputMaybe<GuidingNodes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "GuidingNodes" */
export type GuidingNodes_Arr_Rel_Insert_Input = {
  data: Array<GuidingNodes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GuidingNodes_On_Conflict>;
};

/** aggregate avg on columns */
export type GuidingNodes_Avg_Fields = {
  __typename?: 'GuidingNodes_avg_fields';
  floor_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "GuidingNodes" */
export type GuidingNodes_Avg_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "GuidingNodes". All fields are combined with a logical 'AND'. */
export type GuidingNodes_Bool_Exp = {
  _and?: InputMaybe<Array<GuidingNodes_Bool_Exp>>;
  _not?: InputMaybe<GuidingNodes_Bool_Exp>;
  _or?: InputMaybe<Array<GuidingNodes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  floor_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  lon?: InputMaybe<Float8_Comparison_Exp>;
  rFloor?: InputMaybe<Floors_Bool_Exp>;
  rFroms?: InputMaybe<Point_Relation_Bool_Exp>;
  rFroms_aggregate?: InputMaybe<Point_Relation_Aggregate_Bool_Exp>;
  rTos?: InputMaybe<Point_Relation_Bool_Exp>;
  rTos_aggregate?: InputMaybe<Point_Relation_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "GuidingNodes" */
export enum GuidingNodes_Constraint {
  /** unique or primary key constraint on columns "id" */
  GuidingNodesPkey = 'GuidingNodes_pkey'
}

/** input type for incrementing numeric columns in table "GuidingNodes" */
export type GuidingNodes_Inc_Input = {
  floor_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  lon?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "GuidingNodes" */
export type GuidingNodes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  floor_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  lon?: InputMaybe<Scalars['float8']['input']>;
  rFloor?: InputMaybe<Floors_Obj_Rel_Insert_Input>;
  rFroms?: InputMaybe<Point_Relation_Arr_Rel_Insert_Input>;
  rTos?: InputMaybe<Point_Relation_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type GuidingNodes_Max_Fields = {
  __typename?: 'GuidingNodes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  floor_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  lon?: Maybe<Scalars['float8']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "GuidingNodes" */
export type GuidingNodes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GuidingNodes_Min_Fields = {
  __typename?: 'GuidingNodes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  floor_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  lon?: Maybe<Scalars['float8']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "GuidingNodes" */
export type GuidingNodes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "GuidingNodes" */
export type GuidingNodes_Mutation_Response = {
  __typename?: 'GuidingNodes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GuidingNodes>;
};

/** input type for inserting object relation for remote table "GuidingNodes" */
export type GuidingNodes_Obj_Rel_Insert_Input = {
  data: GuidingNodes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GuidingNodes_On_Conflict>;
};

/** on_conflict condition type for table "GuidingNodes" */
export type GuidingNodes_On_Conflict = {
  constraint: GuidingNodes_Constraint;
  update_columns?: Array<GuidingNodes_Update_Column>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};

/** Ordering options when selecting data from "GuidingNodes". */
export type GuidingNodes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  rFloor?: InputMaybe<Floors_Order_By>;
  rFroms_aggregate?: InputMaybe<Point_Relation_Aggregate_Order_By>;
  rTos_aggregate?: InputMaybe<Point_Relation_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: GuidingNodes */
export type GuidingNodes_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FloorId = 'floor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "GuidingNodes_aggregate_bool_exp_avg_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** select "GuidingNodes_aggregate_bool_exp_corr_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** select "GuidingNodes_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** select "GuidingNodes_aggregate_bool_exp_max_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** select "GuidingNodes_aggregate_bool_exp_min_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** select "GuidingNodes_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** select "GuidingNodes_aggregate_bool_exp_sum_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** select "GuidingNodes_aggregate_bool_exp_var_samp_arguments_columns" columns of table "GuidingNodes" */
export enum GuidingNodes_Select_Column_GuidingNodes_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon'
}

/** input type for updating data in table "GuidingNodes" */
export type GuidingNodes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  floor_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  lon?: InputMaybe<Scalars['float8']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type GuidingNodes_Stddev_Fields = {
  __typename?: 'GuidingNodes_stddev_fields';
  floor_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "GuidingNodes" */
export type GuidingNodes_Stddev_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type GuidingNodes_Stddev_Pop_Fields = {
  __typename?: 'GuidingNodes_stddev_pop_fields';
  floor_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "GuidingNodes" */
export type GuidingNodes_Stddev_Pop_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type GuidingNodes_Stddev_Samp_Fields = {
  __typename?: 'GuidingNodes_stddev_samp_fields';
  floor_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "GuidingNodes" */
export type GuidingNodes_Stddev_Samp_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "GuidingNodes" */
export type GuidingNodes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GuidingNodes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GuidingNodes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  floor_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  lon?: InputMaybe<Scalars['float8']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type GuidingNodes_Sum_Fields = {
  __typename?: 'GuidingNodes_sum_fields';
  floor_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  lon?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "GuidingNodes" */
export type GuidingNodes_Sum_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** update columns of table "GuidingNodes" */
export enum GuidingNodes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FloorId = 'floor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type GuidingNodes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GuidingNodes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GuidingNodes_Set_Input>;
  /** filter the rows which have to be updated */
  where: GuidingNodes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GuidingNodes_Var_Pop_Fields = {
  __typename?: 'GuidingNodes_var_pop_fields';
  floor_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "GuidingNodes" */
export type GuidingNodes_Var_Pop_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type GuidingNodes_Var_Samp_Fields = {
  __typename?: 'GuidingNodes_var_samp_fields';
  floor_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "GuidingNodes" */
export type GuidingNodes_Var_Samp_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type GuidingNodes_Variance_Fields = {
  __typename?: 'GuidingNodes_variance_fields';
  floor_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "GuidingNodes" */
export type GuidingNodes_Variance_Order_By = {
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Buildings" */
  delete_Buildings?: Maybe<Buildings_Mutation_Response>;
  /** delete single row from the table: "Buildings" */
  delete_Buildings_by_pk?: Maybe<Buildings>;
  /** delete data from the table: "Floors" */
  delete_Floors?: Maybe<Floors_Mutation_Response>;
  /** delete single row from the table: "Floors" */
  delete_Floors_by_pk?: Maybe<Floors>;
  /** delete data from the table: "GuidingNodes" */
  delete_GuidingNodes?: Maybe<GuidingNodes_Mutation_Response>;
  /** delete single row from the table: "GuidingNodes" */
  delete_GuidingNodes_by_pk?: Maybe<GuidingNodes>;
  /** delete data from the table: "point_relation" */
  delete_point_relation?: Maybe<Point_Relation_Mutation_Response>;
  /** delete single row from the table: "point_relation" */
  delete_point_relation_by_pk?: Maybe<Point_Relation>;
  /** insert data into the table: "Buildings" */
  insert_Buildings?: Maybe<Buildings_Mutation_Response>;
  /** insert a single row into the table: "Buildings" */
  insert_Buildings_one?: Maybe<Buildings>;
  /** insert data into the table: "Floors" */
  insert_Floors?: Maybe<Floors_Mutation_Response>;
  /** insert a single row into the table: "Floors" */
  insert_Floors_one?: Maybe<Floors>;
  /** insert data into the table: "GuidingNodes" */
  insert_GuidingNodes?: Maybe<GuidingNodes_Mutation_Response>;
  /** insert a single row into the table: "GuidingNodes" */
  insert_GuidingNodes_one?: Maybe<GuidingNodes>;
  /** insert data into the table: "point_relation" */
  insert_point_relation?: Maybe<Point_Relation_Mutation_Response>;
  /** insert a single row into the table: "point_relation" */
  insert_point_relation_one?: Maybe<Point_Relation>;
  /** update data of the table: "Buildings" */
  update_Buildings?: Maybe<Buildings_Mutation_Response>;
  /** update single row of the table: "Buildings" */
  update_Buildings_by_pk?: Maybe<Buildings>;
  /** update multiples rows of table: "Buildings" */
  update_Buildings_many?: Maybe<Array<Maybe<Buildings_Mutation_Response>>>;
  /** update data of the table: "Floors" */
  update_Floors?: Maybe<Floors_Mutation_Response>;
  /** update single row of the table: "Floors" */
  update_Floors_by_pk?: Maybe<Floors>;
  /** update multiples rows of table: "Floors" */
  update_Floors_many?: Maybe<Array<Maybe<Floors_Mutation_Response>>>;
  /** update data of the table: "GuidingNodes" */
  update_GuidingNodes?: Maybe<GuidingNodes_Mutation_Response>;
  /** update single row of the table: "GuidingNodes" */
  update_GuidingNodes_by_pk?: Maybe<GuidingNodes>;
  /** update multiples rows of table: "GuidingNodes" */
  update_GuidingNodes_many?: Maybe<Array<Maybe<GuidingNodes_Mutation_Response>>>;
  /** update data of the table: "point_relation" */
  update_point_relation?: Maybe<Point_Relation_Mutation_Response>;
  /** update single row of the table: "point_relation" */
  update_point_relation_by_pk?: Maybe<Point_Relation>;
  /** update multiples rows of table: "point_relation" */
  update_point_relation_many?: Maybe<Array<Maybe<Point_Relation_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BuildingsArgs = {
  where: Buildings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Buildings_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_FloorsArgs = {
  where: Floors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Floors_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GuidingNodesArgs = {
  where: GuidingNodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GuidingNodes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Point_RelationArgs = {
  where: Point_Relation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Point_Relation_By_PkArgs = {
  from: Scalars['Int']['input'];
  to: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_BuildingsArgs = {
  objects: Array<Buildings_Insert_Input>;
  on_conflict?: InputMaybe<Buildings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Buildings_OneArgs = {
  object: Buildings_Insert_Input;
  on_conflict?: InputMaybe<Buildings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FloorsArgs = {
  objects: Array<Floors_Insert_Input>;
  on_conflict?: InputMaybe<Floors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Floors_OneArgs = {
  object: Floors_Insert_Input;
  on_conflict?: InputMaybe<Floors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuidingNodesArgs = {
  objects: Array<GuidingNodes_Insert_Input>;
  on_conflict?: InputMaybe<GuidingNodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuidingNodes_OneArgs = {
  object: GuidingNodes_Insert_Input;
  on_conflict?: InputMaybe<GuidingNodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Point_RelationArgs = {
  objects: Array<Point_Relation_Insert_Input>;
  on_conflict?: InputMaybe<Point_Relation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Point_Relation_OneArgs = {
  object: Point_Relation_Insert_Input;
  on_conflict?: InputMaybe<Point_Relation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BuildingsArgs = {
  _inc?: InputMaybe<Buildings_Inc_Input>;
  _set?: InputMaybe<Buildings_Set_Input>;
  where: Buildings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Buildings_By_PkArgs = {
  _inc?: InputMaybe<Buildings_Inc_Input>;
  _set?: InputMaybe<Buildings_Set_Input>;
  pk_columns: Buildings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Buildings_ManyArgs = {
  updates: Array<Buildings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FloorsArgs = {
  _inc?: InputMaybe<Floors_Inc_Input>;
  _set?: InputMaybe<Floors_Set_Input>;
  where: Floors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Floors_By_PkArgs = {
  _inc?: InputMaybe<Floors_Inc_Input>;
  _set?: InputMaybe<Floors_Set_Input>;
  pk_columns: Floors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Floors_ManyArgs = {
  updates: Array<Floors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GuidingNodesArgs = {
  _inc?: InputMaybe<GuidingNodes_Inc_Input>;
  _set?: InputMaybe<GuidingNodes_Set_Input>;
  where: GuidingNodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GuidingNodes_By_PkArgs = {
  _inc?: InputMaybe<GuidingNodes_Inc_Input>;
  _set?: InputMaybe<GuidingNodes_Set_Input>;
  pk_columns: GuidingNodes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GuidingNodes_ManyArgs = {
  updates: Array<GuidingNodes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Point_RelationArgs = {
  _inc?: InputMaybe<Point_Relation_Inc_Input>;
  _set?: InputMaybe<Point_Relation_Set_Input>;
  where: Point_Relation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Point_Relation_By_PkArgs = {
  _inc?: InputMaybe<Point_Relation_Inc_Input>;
  _set?: InputMaybe<Point_Relation_Set_Input>;
  pk_columns: Point_Relation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Point_Relation_ManyArgs = {
  updates: Array<Point_Relation_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "point_relation" */
export type Point_Relation = {
  __typename?: 'point_relation';
  created_at: Scalars['timestamptz']['output'];
  from: Scalars['Int']['output'];
  /** An object relationship */
  rFrom: GuidingNodes;
  /** An object relationship */
  rTo: GuidingNodes;
  to: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "point_relation" */
export type Point_Relation_Aggregate = {
  __typename?: 'point_relation_aggregate';
  aggregate?: Maybe<Point_Relation_Aggregate_Fields>;
  nodes: Array<Point_Relation>;
};

export type Point_Relation_Aggregate_Bool_Exp = {
  count?: InputMaybe<Point_Relation_Aggregate_Bool_Exp_Count>;
};

export type Point_Relation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Point_Relation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Point_Relation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "point_relation" */
export type Point_Relation_Aggregate_Fields = {
  __typename?: 'point_relation_aggregate_fields';
  avg?: Maybe<Point_Relation_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Point_Relation_Max_Fields>;
  min?: Maybe<Point_Relation_Min_Fields>;
  stddev?: Maybe<Point_Relation_Stddev_Fields>;
  stddev_pop?: Maybe<Point_Relation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Point_Relation_Stddev_Samp_Fields>;
  sum?: Maybe<Point_Relation_Sum_Fields>;
  var_pop?: Maybe<Point_Relation_Var_Pop_Fields>;
  var_samp?: Maybe<Point_Relation_Var_Samp_Fields>;
  variance?: Maybe<Point_Relation_Variance_Fields>;
};


/** aggregate fields of "point_relation" */
export type Point_Relation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Point_Relation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "point_relation" */
export type Point_Relation_Aggregate_Order_By = {
  avg?: InputMaybe<Point_Relation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Point_Relation_Max_Order_By>;
  min?: InputMaybe<Point_Relation_Min_Order_By>;
  stddev?: InputMaybe<Point_Relation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Point_Relation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Point_Relation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Point_Relation_Sum_Order_By>;
  var_pop?: InputMaybe<Point_Relation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Point_Relation_Var_Samp_Order_By>;
  variance?: InputMaybe<Point_Relation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "point_relation" */
export type Point_Relation_Arr_Rel_Insert_Input = {
  data: Array<Point_Relation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Point_Relation_On_Conflict>;
};

/** aggregate avg on columns */
export type Point_Relation_Avg_Fields = {
  __typename?: 'point_relation_avg_fields';
  from?: Maybe<Scalars['Float']['output']>;
  to?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "point_relation" */
export type Point_Relation_Avg_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "point_relation". All fields are combined with a logical 'AND'. */
export type Point_Relation_Bool_Exp = {
  _and?: InputMaybe<Array<Point_Relation_Bool_Exp>>;
  _not?: InputMaybe<Point_Relation_Bool_Exp>;
  _or?: InputMaybe<Array<Point_Relation_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  from?: InputMaybe<Int_Comparison_Exp>;
  rFrom?: InputMaybe<GuidingNodes_Bool_Exp>;
  rTo?: InputMaybe<GuidingNodes_Bool_Exp>;
  to?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "point_relation" */
export enum Point_Relation_Constraint {
  /** unique or primary key constraint on columns "from", "to" */
  PointRelationPkey = 'point_relation_pkey'
}

/** input type for incrementing numeric columns in table "point_relation" */
export type Point_Relation_Inc_Input = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "point_relation" */
export type Point_Relation_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  rFrom?: InputMaybe<GuidingNodes_Obj_Rel_Insert_Input>;
  rTo?: InputMaybe<GuidingNodes_Obj_Rel_Insert_Input>;
  to?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Point_Relation_Max_Fields = {
  __typename?: 'point_relation_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['Int']['output']>;
  to?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "point_relation" */
export type Point_Relation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Point_Relation_Min_Fields = {
  __typename?: 'point_relation_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['Int']['output']>;
  to?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "point_relation" */
export type Point_Relation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "point_relation" */
export type Point_Relation_Mutation_Response = {
  __typename?: 'point_relation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Point_Relation>;
};

/** on_conflict condition type for table "point_relation" */
export type Point_Relation_On_Conflict = {
  constraint: Point_Relation_Constraint;
  update_columns?: Array<Point_Relation_Update_Column>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};

/** Ordering options when selecting data from "point_relation". */
export type Point_Relation_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  rFrom?: InputMaybe<GuidingNodes_Order_By>;
  rTo?: InputMaybe<GuidingNodes_Order_By>;
  to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: point_relation */
export type Point_Relation_Pk_Columns_Input = {
  from: Scalars['Int']['input'];
  to: Scalars['Int']['input'];
};

/** select columns of table "point_relation" */
export enum Point_Relation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  From = 'from',
  /** column name */
  To = 'to',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "point_relation" */
export type Point_Relation_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Point_Relation_Stddev_Fields = {
  __typename?: 'point_relation_stddev_fields';
  from?: Maybe<Scalars['Float']['output']>;
  to?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "point_relation" */
export type Point_Relation_Stddev_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Point_Relation_Stddev_Pop_Fields = {
  __typename?: 'point_relation_stddev_pop_fields';
  from?: Maybe<Scalars['Float']['output']>;
  to?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "point_relation" */
export type Point_Relation_Stddev_Pop_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Point_Relation_Stddev_Samp_Fields = {
  __typename?: 'point_relation_stddev_samp_fields';
  from?: Maybe<Scalars['Float']['output']>;
  to?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "point_relation" */
export type Point_Relation_Stddev_Samp_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "point_relation" */
export type Point_Relation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Point_Relation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Point_Relation_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Point_Relation_Sum_Fields = {
  __typename?: 'point_relation_sum_fields';
  from?: Maybe<Scalars['Int']['output']>;
  to?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "point_relation" */
export type Point_Relation_Sum_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** update columns of table "point_relation" */
export enum Point_Relation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  From = 'from',
  /** column name */
  To = 'to',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Point_Relation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Point_Relation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Point_Relation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Point_Relation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Point_Relation_Var_Pop_Fields = {
  __typename?: 'point_relation_var_pop_fields';
  from?: Maybe<Scalars['Float']['output']>;
  to?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "point_relation" */
export type Point_Relation_Var_Pop_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Point_Relation_Var_Samp_Fields = {
  __typename?: 'point_relation_var_samp_fields';
  from?: Maybe<Scalars['Float']['output']>;
  to?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "point_relation" */
export type Point_Relation_Var_Samp_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Point_Relation_Variance_Fields = {
  __typename?: 'point_relation_variance_fields';
  from?: Maybe<Scalars['Float']['output']>;
  to?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "point_relation" */
export type Point_Relation_Variance_Order_By = {
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Buildings" */
  Buildings: Array<Buildings>;
  /** fetch aggregated fields from the table: "Buildings" */
  Buildings_aggregate: Buildings_Aggregate;
  /** fetch data from the table: "Buildings" using primary key columns */
  Buildings_by_pk?: Maybe<Buildings>;
  /** fetch data from the table: "Floors" */
  Floors: Array<Floors>;
  /** fetch aggregated fields from the table: "Floors" */
  Floors_aggregate: Floors_Aggregate;
  /** fetch data from the table: "Floors" using primary key columns */
  Floors_by_pk?: Maybe<Floors>;
  /** fetch data from the table: "GuidingNodes" */
  GuidingNodes: Array<GuidingNodes>;
  /** fetch aggregated fields from the table: "GuidingNodes" */
  GuidingNodes_aggregate: GuidingNodes_Aggregate;
  /** fetch data from the table: "GuidingNodes" using primary key columns */
  GuidingNodes_by_pk?: Maybe<GuidingNodes>;
  /** fetch data from the table: "point_relation" */
  point_relation: Array<Point_Relation>;
  /** fetch aggregated fields from the table: "point_relation" */
  point_relation_aggregate: Point_Relation_Aggregate;
  /** fetch data from the table: "point_relation" using primary key columns */
  point_relation_by_pk?: Maybe<Point_Relation>;
};


export type Query_RootBuildingsArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Query_RootBuildings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Query_RootBuildings_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootFloorsArgs = {
  distinct_on?: InputMaybe<Array<Floors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Floors_Order_By>>;
  where?: InputMaybe<Floors_Bool_Exp>;
};


export type Query_RootFloors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Floors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Floors_Order_By>>;
  where?: InputMaybe<Floors_Bool_Exp>;
};


export type Query_RootFloors_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGuidingNodesArgs = {
  distinct_on?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GuidingNodes_Order_By>>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};


export type Query_RootGuidingNodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GuidingNodes_Order_By>>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};


export type Query_RootGuidingNodes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPoint_RelationArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};


export type Query_RootPoint_Relation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};


export type Query_RootPoint_Relation_By_PkArgs = {
  from: Scalars['Int']['input'];
  to: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Buildings" */
  Buildings: Array<Buildings>;
  /** fetch aggregated fields from the table: "Buildings" */
  Buildings_aggregate: Buildings_Aggregate;
  /** fetch data from the table: "Buildings" using primary key columns */
  Buildings_by_pk?: Maybe<Buildings>;
  /** fetch data from the table in a streaming manner: "Buildings" */
  Buildings_stream: Array<Buildings>;
  /** fetch data from the table: "Floors" */
  Floors: Array<Floors>;
  /** fetch aggregated fields from the table: "Floors" */
  Floors_aggregate: Floors_Aggregate;
  /** fetch data from the table: "Floors" using primary key columns */
  Floors_by_pk?: Maybe<Floors>;
  /** fetch data from the table in a streaming manner: "Floors" */
  Floors_stream: Array<Floors>;
  /** fetch data from the table: "GuidingNodes" */
  GuidingNodes: Array<GuidingNodes>;
  /** fetch aggregated fields from the table: "GuidingNodes" */
  GuidingNodes_aggregate: GuidingNodes_Aggregate;
  /** fetch data from the table: "GuidingNodes" using primary key columns */
  GuidingNodes_by_pk?: Maybe<GuidingNodes>;
  /** fetch data from the table in a streaming manner: "GuidingNodes" */
  GuidingNodes_stream: Array<GuidingNodes>;
  /** fetch data from the table: "point_relation" */
  point_relation: Array<Point_Relation>;
  /** fetch aggregated fields from the table: "point_relation" */
  point_relation_aggregate: Point_Relation_Aggregate;
  /** fetch data from the table: "point_relation" using primary key columns */
  point_relation_by_pk?: Maybe<Point_Relation>;
  /** fetch data from the table in a streaming manner: "point_relation" */
  point_relation_stream: Array<Point_Relation>;
};


export type Subscription_RootBuildingsArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Subscription_RootBuildings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Subscription_RootBuildings_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBuildings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buildings_Stream_Cursor_Input>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Subscription_RootFloorsArgs = {
  distinct_on?: InputMaybe<Array<Floors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Floors_Order_By>>;
  where?: InputMaybe<Floors_Bool_Exp>;
};


export type Subscription_RootFloors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Floors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Floors_Order_By>>;
  where?: InputMaybe<Floors_Bool_Exp>;
};


export type Subscription_RootFloors_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootFloors_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Floors_Stream_Cursor_Input>>;
  where?: InputMaybe<Floors_Bool_Exp>;
};


export type Subscription_RootGuidingNodesArgs = {
  distinct_on?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GuidingNodes_Order_By>>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};


export type Subscription_RootGuidingNodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GuidingNodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GuidingNodes_Order_By>>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};


export type Subscription_RootGuidingNodes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGuidingNodes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GuidingNodes_Stream_Cursor_Input>>;
  where?: InputMaybe<GuidingNodes_Bool_Exp>;
};


export type Subscription_RootPoint_RelationArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};


export type Subscription_RootPoint_Relation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Point_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Point_Relation_Order_By>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};


export type Subscription_RootPoint_Relation_By_PkArgs = {
  from: Scalars['Int']['input'];
  to: Scalars['Int']['input'];
};


export type Subscription_RootPoint_Relation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Point_Relation_Stream_Cursor_Input>>;
  where?: InputMaybe<Point_Relation_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type GetMapPairQueryVariables = Exact<{
  floor: Scalars['Int']['input'];
}>;


export type GetMapPairQuery = { __typename?: 'query_root', GuidingNodes: Array<{ __typename?: 'GuidingNodes', id: any, lat: any, lon: any }> };

export type GetCorrespondQueryVariables = Exact<{
  floor?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCorrespondQuery = { __typename?: 'query_root', point_relation: Array<{ __typename?: 'point_relation', rFrom: { __typename?: 'GuidingNodes', id: any }, rTo: { __typename?: 'GuidingNodes', id: any } }> };


export const GetMapPairDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMapPair"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"floor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GuidingNodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"floor_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"floor"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}}]}}]}}]} as unknown as DocumentNode<GetMapPairQuery, GetMapPairQueryVariables>;
export const GetCorrespondDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCorrespond"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"floor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"point_relation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"rFrom"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"floor_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"floor"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rFrom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetCorrespondQuery, GetCorrespondQueryVariables>;