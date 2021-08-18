/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateListMutationVariables = {
    userId: unknown;
    name: string;
    description?: string | null;
};
export type CreateListMutationResponse = {
    readonly insert_lists_one: {
        readonly pk: unknown;
        readonly name: string;
        readonly id: string;
        readonly description: string | null;
        readonly created_by: unknown;
    } | null;
};
export type CreateListMutation = {
    readonly response: CreateListMutationResponse;
    readonly variables: CreateListMutationVariables;
};



/*
mutation CreateListMutation(
  $userId: uuid!
  $name: String!
  $description: String
) {
  insert_lists_one(object: {created_by: $userId, name: $name, description: $description}) {
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
  "name": "userId"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "created_by",
            "variableName": "userId"
          },
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
        "name": "object"
      }
    ],
    "concreteType": "lists",
    "kind": "LinkedField",
    "name": "insert_lists_one",
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
    "name": "CreateListMutation",
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
    "name": "CreateListMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "6cae92f80b45e422bbfd3b98c8959038",
    "id": null,
    "metadata": {},
    "name": "CreateListMutation",
    "operationKind": "mutation",
    "text": "mutation CreateListMutation(\n  $userId: uuid!\n  $name: String!\n  $description: String\n) {\n  insert_lists_one(object: {created_by: $userId, name: $name, description: $description}) {\n    pk\n    name\n    id\n    description\n    created_by\n  }\n}\n"
  }
};
})();
(node as any).hash = '9e51906e1e58257b0c0d4e21d675afa0';
export default node;
