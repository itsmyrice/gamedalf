import styled from "styled-components";
import Form from "@/components/Form";
import SendingConfirmation from "@/components/SendingConfirmation";
import { mutate } from "swr";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function FormModal({ showModal }) {
  async function handleCreate(formData) {
    const url = "/api/games";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      mutate("/api/games");
    } else {
      const error = await response.json();
      return error.message || "An error occurred while creating the game";
    }
  }

  async function handleEdit(formData) {
    const url = `/api/games/${showModal.modal.game._id}`;

    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      mutate("/api/games");
    } else {
      const error = await response.json();
      return error.message || "An error occurred while editing the game";
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <Overlay onClick={() => showModal.toggle("close")} />
      <StyledModal>
        {!showModal.modal.isSubmit ? (
          <Form
            showModal={showModal}
            onSubmit={showModal.modal.isEdit ? handleEdit : handleCreate}
            initialFormData={showModal.modal.isEdit && showModal.modal.game}
          />
        ) : (
          <SendingConfirmation showModal={showModal} />
        )}
      </StyledModal>
    </>
  );
}

const StyledModal = styled.div`
  background-color: #f5f5f7;
  width: 90%;
  height: 90%;
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  overflow: scroll;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
`;
