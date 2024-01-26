import styled from "styled-components";
import { useEffect } from "react";
import Form from "@/components/Form";
import SendingConfirmation from "@/components/SendingConfirmation";

export default function FormModal({ showModal }) {
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
          <Form showModal={showModal} />
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
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
`;
