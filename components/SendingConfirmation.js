import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export default function SendingConfirmation({ showModal }) {
  return (
    <ConfirmationLayout>
      <CloseButton onClick={() => showModal.toggle("close")} />
      {showModal.modal.isEdit ? (
        <>
          <h1>Updated! 🙌</h1>
          <p>Now go, explore some other games</p>
        </>
      ) : (
        <>
          <h1>Added! 🙌</h1>
          <p>Thank you, your game is added to the collection</p>
        </>
      )}
      <DoneButton
        onClick={() => {
          showModal.toggle("close");
        }}
      >
        Done
      </DoneButton>
    </ConfirmationLayout>
  );
}

const ConfirmationLayout = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  margin: auto;
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const DoneButton = styled.button`
  margin-top: 20px;
  border: 1px solid #0011ff;
  border-radius: 40px;

  padding: 10px 40px;
  background-color: #0011ff;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
    color: #0011ff;
    transition: 0.3s ease-in-out;
  }
`;
