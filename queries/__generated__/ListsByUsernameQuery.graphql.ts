/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ListsByUsernameQueryVariables = {
    username: string;
};
export type ListsByUsernameQueryResponse = {
    readonly lists_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly name: string;
                readonly description: string | null;
                readonly pk: unknown;
                readonly id: string;
            };
        }>;
    };
};
export type ListsByUsernameQuery = {
    readonly response: ListsByUsernameQueryResponse;
    readonly variables: ListsByUsernameQueryVariables;
};



/*
query ListsByUsernameQuery(
  $username: String!
) {
  lists_connection(where: {user: {username: {_eq: $username}}}) {
    edges {
      node {
        name
        description
        pk
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "_eq",
                    "variableName": "username"
                  }
                ],
                "kind": "ObjectValue",
                "name": "username"
              }
            ],
            "kind": "ObjectValue",
            "name": "user"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "listsConnection",
    "kind": "LinkedField",
    "name": "lists_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "listsEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "lists",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
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
                "name": "description",
                "storageKey": null
              },
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
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ListsByUsernameQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListsByUsernameQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3f315a2700865878b67da2ec07683bdb",
    "id": null,
    "metadata": {},
    "name": "ListsByUsernameQuery",
    "operationKind": "query",
    "text": "query ListsByUsernameQuery(\n  $username: String!\n) {\n  lists_connection(where: {user: {username: {_eq: $username}}}) {\n    edges {\n      node {\n        name\n        description\n        pk\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2c40fa73da965d727f5816482874ff31';
export default node;
