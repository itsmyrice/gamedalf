export default function EditButton({ showModal, data }) {
  return (
    <button type="button" onClick={() => showModal.toggle("edit", data)}>
      Edit
    </button>
  );
}
