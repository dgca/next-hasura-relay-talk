/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import ListItemsRefetchableQuery from "./ListItemsRefetchableQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type ListItemsFragment = {
    readonly items_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly body: string;
                readonly pk: unknown;
            };
        }>;
    };
    readonly id: string;
    readonly " $refType": "ListItemsFragment";
};
export type ListItemsFragment$data = ListItemsFragment;
export type ListItemsFragment$key = {
    readonly " $data"?: ListItemsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ListItemsFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "items_connection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 3,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ListItemsRefetchableQuery,
      "identifierField": "id"
    }
  },
  "name": "ListItemsFragment",
  "selections": [
    {
      "alias": "items_connection",
      "args": [
        {
          "kind": "Literal",
          "name": "order_by",
          "value": {
            "body": "asc"
          }
        }
      ],
      "concreteType": "itemsConnection",
      "kind": "LinkedField",
      "name": "__ListItems_items_connection_connection",
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
      "storageKey": "__ListItems_items_connection_connection(order_by:{\"body\":\"asc\"})"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "lists",
  "abstractKey": null
};
})();
(node as any).hash = '630a931709c65e3b20ff9257d8178250';
export default node;
