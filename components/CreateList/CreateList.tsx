import { useState, useContext } from "react";
import { graphql, useMutation } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import { AuthContext } from "components/Auth/Auth";
import Modal from "components/Modal/Modal";
import { CreateListMutation as CreateListMutationType } from "queries/__generated__/CreateListMutation.graphql";

const CreateListMutation = graphql`
  mutation CreateListMutation(
    $userId: uuid!
    $name: String!
    $description: String
  ) {
    insert_lists_one(
      object: { created_by: $userId, name: $name, description: $description }
    ) {
      pk
      name
      id
      description
      created_by
    }
  }
`;

export default function CreateList() {
  const { pk, username } = useContext(AuthContext);
  const [isCreating, setIsCreating] = useState(false);
  const [commit, isInFlight] =
    useMutation<CreateListMutationType>(CreateListMutation);

  const handleClose = () => setIsCreating(false);

  return isCreating ? (
    <>
      <Modal onClose={handleClose}>
        <h3>New list:</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-ignore
            const name = e.target.elements.name.value as string;
            // @ts-ignore
            const description = e.target.elements.description.value as string;

            commit({
              variables: {
                userId: pk,
                name,
                description,
              },
              onCompleted() {
                setIsCreating(false);
              },
              updater(store, item) {
                const id = item.insert_lists_one?.id;

                if (!id) {
                  return;
                }

                /**
                 * `store` is a RecordSourceSelectorProxy
                 * @see {@link https://relay.dev/docs/api-reference/store/#recordsourceselectorproxy}
                 *
                 * `recordProxy` is a RecordProxy of the `insert_lists_one` field that was the
                 * result of our mutation.
                 * @see {@link https://relay.dev/docs/api-reference/store/#recordproxy}
                 */
                const recordProxy = store.getRootField("insert_lists_one");

                /**
                 * `getRoot()` returns a RecordProxy for the root of the GraphQL document.
                 * We can then get the RecordProxy of the lists query from that.
                 */
                const lists = store
                  .getRoot()
                  .getLinkedRecord(
                    `lists_connection(where:{"user":{"username":{"_eq":"${username}"}}})`
                  );

                if (!lists) {
                  return;
                }

                /**
                 * We make a new edge using the mutation results and the previous lists request.
                 */
                const edge = ConnectionHandler.createEdge(
                  store,
                  lists,
                  recordProxy,
                  "listsEdge"
                );

                /**
                 * Finally, we insert it into the lists.
                 */
                ConnectionHandler.insertEdgeAfter(lists, edge);
              },
            });
          }}
        >
          <label>
            Name
            <input type="text" name="name" disabled={isInFlight} />
          </label>
          <br />
          <label>
            Description
            <textarea name="description" disabled={isInFlight} />
          </label>
          {!isInFlight && (
            <>
              <br />
              <button type="button" onClick={handleClose}>
                Cancel
              </button>
              <button type="submit">Create</button>
            </>
          )}
        </form>
      </Modal>
    </>
  ) : (
    <button onClick={() => setIsCreating(true)}>Create list</button>
  );
}
