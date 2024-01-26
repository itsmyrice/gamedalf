import styled from "styled-components";
import { useState, useEffect } from "react";
import Form from "@/components/Form";
import SendingConfirmation from "@/components/SendingConfirmation";

export default function FormModal({ showModal }) {
  const [content, setContent] = useState("form");


  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <Overlay onClick={() => showModal.toggle("create")} />
      <StyledModal>
        {content === "form" ? (
          <Form showModal={showModal} onSubmit={()=> setContent("confirm")} />
        ) : (
          <SendingConfirmation onClose={showModal} />
        )}
      </StyledModal>
    </>
  );
}

const StyledModal = styled.div`
  background-color: #f5f5f7;
  width: 90%;
  height: 80%;
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
