/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type EditListMutationVariables = {
    pk: unknown;
    name: string;
    description: string;
};
export type EditListMutationResponse = {
    readonly update_lists_by_pk: {
        readonly pk: unknown;
        readonly name: string;
        readonly id: string;
        readonly description: string | null;
        readonly created_by: unknown;
    } | null;
};
export type EditListMutation = {
    readonly response: EditListMutationResponse;
    readonly variables: EditListMutationVariables;
};



/*
mutation EditListMutation(
  $pk: uuid!
  $name: String!
  $description: String!
) {
  update_lists_by_pk(pk_columns: {pk: $pk}, _set: {description: $description, name: $name}) {
    pk
    name
    id
    description
    created_by
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pk"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "_set"
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "pk",
            "variableName": "pk"
          }
        ],
        "kind": "ObjectValue",
        "name": "pk_columns"
      }
    ],
    "concreteType": "lists",
    "kind": "LinkedField",
    "name": "update_lists_by_pk",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pk",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_by",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditListMutation",
    "selections": (v3/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditListMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ea0d09f6b6b1b8a3c05c522842a18454",
    "id": null,
    "metadata": {},
    "name": "EditListMutation",
    "operationKind": "mutation",
    "text": "mutation EditListMutation(\n  $pk: uuid!\n  $name: String!\n  $description: String!\n) {\n  update_lists_by_pk(pk_columns: {pk: $pk}, _set: {description: $description, name: $name}) {\n    pk\n    name\n    id\n    description\n    created_by\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e341a10f1dc9d15cd86acd2f94bb2aac';
export default node;
