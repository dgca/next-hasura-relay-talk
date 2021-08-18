import Modal from "components/Modal/Modal";
import { graphql, useMutation } from "react-relay";
import { EditListMutation as EditListMutationType } from "queries/__generated__/EditListMutation.graphql";

const EditListMutation = graphql`
  mutation EditListMutation($pk: uuid!, $name: String!, $description: String!) {
    update_lists_by_pk(
      pk_columns: { pk: $pk }
      _set: { description: $description, name: $name }
    ) {
      pk
      name
      id
      description
      created_by
    }
  }
`;

type EditListProps = {
  name: string;
  description: string;
  pk: string;
  onClose: () => void;
};

export default function EditList({
  name,
  description,
  pk,
  onClose,
}: EditListProps) {
  const [commit, isInFlight] =
    useMutation<EditListMutationType>(EditListMutation);

  return (
    <Modal onClose={onClose}>
      <h3>Edit list</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // @ts-ignore
          const nextName = e.target.elements.name.value as string;
          // @ts-ignore
          const nextDescription = e.target.elements.description.value as string;

          commit({
            variables: {
              name: nextName,
              description: nextDescription,
              pk,
            },
            onCompleted() {
              onClose();
            },
          });
        }}
      >
        <label style={{ display: "block" }}>
          Name
          <br />
          <input defaultValue={name} type="text" name="name" />
        </label>
        <label style={{ display: "block" }}>
          Description
          <br />
          <textarea defaultValue={description} name="description" />
        </label>
        {!isInFlight && (
          <>
            <br />
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </Modal>
  );
}
