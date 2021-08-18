/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Pk_ListQueryVariables = {
    pk: unknown;
};
export type Pk_ListQueryResponse = {
    readonly lists_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly user: {
                    readonly pk: unknown;
                    readonly username: string;
                };
                readonly pk: unknown;
                readonly name: string;
                readonly description: string | null;
                readonly " $fragmentRefs": FragmentRefs<"ListItemsFragment">;
            };
        }>;
    };
};
export type Pk_ListQuery = {
    readonly response: Pk_ListQueryResponse;
    readonly variables: Pk_ListQueryVariables;
};



/*
query Pk_ListQuery(
  $pk: uuid!
) {
  lists_connection(where: {pk: {_eq: $pk}}) {
    edges {
      node {
        user {
          pk
          username
          id
        }
        pk
        name
        description
        ...ListItemsFragment
        id
      }
    }
  }
}

fragment ListItemsFragment on lists {
  items_connection(first: 3, order_by: {body: asc}) {
    edges {
      node {
        body
        pk
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "pk"
  }
],
v1 = [
  {
    "fields": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "_eq",
            "variableName": "pk"
          }
        ],
        "kind": "ObjectValue",
        "name": "pk"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pk",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  },
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "body": "asc"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Pk_ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                    "concreteType": "users",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ListItemsFragment"
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
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Pk_ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                    "concreteType": "users",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "concreteType": "itemsConnection",
                    "kind": "LinkedField",
                    "name": "items_connection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "itemsEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "items",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "body",
                                "storageKey": null
                              },
                              (v2/*: any*/),
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "__typename",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "kind": "LinkedField",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "endCursor",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hasNextPage",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "items_connection(first:3,order_by:{\"body\":\"asc\"})"
                  },
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "filters": [
                      "order_by"
                    ],
                    "handle": "connection",
                    "key": "ListItems_items_connection",
                    "kind": "LinkedHandle",
                    "name": "items_connection"
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3a42b29d3188b0575f7c85f90b81d2fc",
    "id": null,
    "metadata": {},
    "name": "Pk_ListQuery",
    "operationKind": "query",
    "text": "query Pk_ListQuery(\n  $pk: uuid!\n) {\n  lists_connection(where: {pk: {_eq: $pk}}) {\n    edges {\n      node {\n        user {\n          pk\n          username\n          id\n        }\n        pk\n        name\n        description\n        ...ListItemsFragment\n        id\n      }\n    }\n  }\n}\n\nfragment ListItemsFragment on lists {\n  items_connection(first: 3, order_by: {body: asc}) {\n    edges {\n      node {\n        body\n        pk\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '2aaefaf6f6d3b5ffa11ba09aaa7fa095';
export default node;
