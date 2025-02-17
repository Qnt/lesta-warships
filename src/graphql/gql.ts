/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Glossary_Query(\n    $isCatalogue: Boolean = true\n    $languageCode: String = \"ru\"\n  ) {\n    ...Vehicles_QueryFragment\n    ...Filters_QueryFragment\n  }\n": typeof types.Glossary_QueryDocument,
    "\n  fragment Nations_QueryFragment on GlossaryQuery {\n    nations(lang: $languageCode) {\n      name\n      title\n    }\n  }\n": typeof types.Nations_QueryFragmentFragmentDoc,
    "\n  fragment Filters_QueryFragment on GlossaryQuery {\n    ...Nations_QueryFragment\n    ...VehicleTypes_QueryFragment\n  }\n": typeof types.Filters_QueryFragmentFragmentDoc,
    "\n  fragment VehicleTypes_QueryFragment on GlossaryQuery {\n    vehicleTypes(lang: $languageCode) {\n      title\n      name\n    }\n  }\n": typeof types.VehicleTypes_QueryFragmentFragmentDoc,
    "\n  fragment Vehicle_QueryFragment on Vehicle {\n    title\n    icons {\n      large\n    }\n    level\n    description\n    type {\n      title\n      icons {\n        default\n      }\n    }\n    nation {\n      title\n      color\n      icons {\n        large\n      }\n    }\n  }\n": typeof types.Vehicle_QueryFragmentFragmentDoc,
    "\n  fragment Vehicles_QueryFragment on GlossaryQuery {\n    vehicles(isCatalogue: $isCatalogue, lang: $languageCode) {\n      id\n      level\n      nation {\n        name\n      }\n      type {\n        name\n      }\n      ...Vehicle_QueryFragment\n    }\n  }\n": typeof types.Vehicles_QueryFragmentFragmentDoc,
};
const documents: Documents = {
    "\n  query Glossary_Query(\n    $isCatalogue: Boolean = true\n    $languageCode: String = \"ru\"\n  ) {\n    ...Vehicles_QueryFragment\n    ...Filters_QueryFragment\n  }\n": types.Glossary_QueryDocument,
    "\n  fragment Nations_QueryFragment on GlossaryQuery {\n    nations(lang: $languageCode) {\n      name\n      title\n    }\n  }\n": types.Nations_QueryFragmentFragmentDoc,
    "\n  fragment Filters_QueryFragment on GlossaryQuery {\n    ...Nations_QueryFragment\n    ...VehicleTypes_QueryFragment\n  }\n": types.Filters_QueryFragmentFragmentDoc,
    "\n  fragment VehicleTypes_QueryFragment on GlossaryQuery {\n    vehicleTypes(lang: $languageCode) {\n      title\n      name\n    }\n  }\n": types.VehicleTypes_QueryFragmentFragmentDoc,
    "\n  fragment Vehicle_QueryFragment on Vehicle {\n    title\n    icons {\n      large\n    }\n    level\n    description\n    type {\n      title\n      icons {\n        default\n      }\n    }\n    nation {\n      title\n      color\n      icons {\n        large\n      }\n    }\n  }\n": types.Vehicle_QueryFragmentFragmentDoc,
    "\n  fragment Vehicles_QueryFragment on GlossaryQuery {\n    vehicles(isCatalogue: $isCatalogue, lang: $languageCode) {\n      id\n      level\n      nation {\n        name\n      }\n      type {\n        name\n      }\n      ...Vehicle_QueryFragment\n    }\n  }\n": types.Vehicles_QueryFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Glossary_Query(\n    $isCatalogue: Boolean = true\n    $languageCode: String = \"ru\"\n  ) {\n    ...Vehicles_QueryFragment\n    ...Filters_QueryFragment\n  }\n"): (typeof documents)["\n  query Glossary_Query(\n    $isCatalogue: Boolean = true\n    $languageCode: String = \"ru\"\n  ) {\n    ...Vehicles_QueryFragment\n    ...Filters_QueryFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Nations_QueryFragment on GlossaryQuery {\n    nations(lang: $languageCode) {\n      name\n      title\n    }\n  }\n"): (typeof documents)["\n  fragment Nations_QueryFragment on GlossaryQuery {\n    nations(lang: $languageCode) {\n      name\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Filters_QueryFragment on GlossaryQuery {\n    ...Nations_QueryFragment\n    ...VehicleTypes_QueryFragment\n  }\n"): (typeof documents)["\n  fragment Filters_QueryFragment on GlossaryQuery {\n    ...Nations_QueryFragment\n    ...VehicleTypes_QueryFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment VehicleTypes_QueryFragment on GlossaryQuery {\n    vehicleTypes(lang: $languageCode) {\n      title\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment VehicleTypes_QueryFragment on GlossaryQuery {\n    vehicleTypes(lang: $languageCode) {\n      title\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Vehicle_QueryFragment on Vehicle {\n    title\n    icons {\n      large\n    }\n    level\n    description\n    type {\n      title\n      icons {\n        default\n      }\n    }\n    nation {\n      title\n      color\n      icons {\n        large\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Vehicle_QueryFragment on Vehicle {\n    title\n    icons {\n      large\n    }\n    level\n    description\n    type {\n      title\n      icons {\n        default\n      }\n    }\n    nation {\n      title\n      color\n      icons {\n        large\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Vehicles_QueryFragment on GlossaryQuery {\n    vehicles(isCatalogue: $isCatalogue, lang: $languageCode) {\n      id\n      level\n      nation {\n        name\n      }\n      type {\n        name\n      }\n      ...Vehicle_QueryFragment\n    }\n  }\n"): (typeof documents)["\n  fragment Vehicles_QueryFragment on GlossaryQuery {\n    vehicles(isCatalogue: $isCatalogue, lang: $languageCode) {\n      id\n      level\n      nation {\n        name\n      }\n      type {\n        name\n      }\n      ...Vehicle_QueryFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;