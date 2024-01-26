import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { mutate } from "swr";

export default function Form({ showModal }) {
  const [validationError, setValidationError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    categories: "",
    minAge: "",
    description: "",
    minPlayers: "",
    maxPlayers: "",
    image: "",
    yearpublished: "",
    playtime: "",
    userCreated: true,
  });

  useEffect(() => {
    if (showModal.modal.isEdit && showModal.modal.game) {
      setFormData(showModal.modal.game);
    }
  }, [showModal.modal.isEdit, showModal.modal.game]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.image.startsWith("https://images.unsplash.com")) {
      setValidationError("Only images from unsplash.com are allowed");
      return;
    }

    const url = showModal.modal.isEdit
      ? `/api/games/${showModal.modal.game._id}`
      : "/api/games";
    console.log("🚀  url:", url);

    const response = await fetch(url, {
      method: showModal.modal.isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("🚀  response:", response);
    if (response.ok) {
      mutate("/api/games");
    } else {
      const error = await response.json();
      setValidationError(error.message || "An error occurred");
    }
  }

  return (
    <FormLayout>
      <CloseButton onClick={() => showModal.toggle("create")} />
      {showModal.modal.isEdit ? <h2>Edit</h2> : <h2>Create</h2>}
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="image">Image URL</Label>
        <Input
          required
          type="text"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        <SmallText>
          Only images from{" "}
          <StyledAnchor
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            unsplash.com
          </StyledAnchor>{" "}
          are allowed
        </SmallText>

        <Label htmlFor="name">Name</Label>
        <Input
          required
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Label htmlFor="categories">Categories</Label>
        <Input
          required
          type="text"
          name="categories"
          id="categories"
          value={formData.categories}
          onChange={handleInputChange}
        />
        <Label htmlFor="yearpublished">Year</Label>
        <Input
          required
          type="number"
          name="yearpublished"
          id="yearpublished"
          value={formData.yearpublished}
          onChange={handleInputChange}
        />
        <Label htmlFor="playtime">Play time</Label>
        <Input
          required
          type="number"
          name="playtime"
          id="playtime"
          value={formData.playtime}
          onChange={handleInputChange}
        />
        <Label htmlFor="minAge">Min Age</Label>
        <Input
          required
          type="number"
          name="minAge"
          id="minAge"
          value={formData.minAge}
          onChange={handleInputChange}
        />
        <Label htmlFor="minPlayers">Min Players</Label>
        <Input
          required
          type="number"
          name="minPlayers"
          id="minPlayers"
          value={formData.minPlayers}
          onChange={handleInputChange}
        />
        <Label htmlFor="maxPlayers">Max Players</Label>
        <Input
          required
          type="number"
          name="maxPlayers"
          id="maxPlayers"
          value={formData.maxPlayers}
          onChange={handleInputChange}
        />
        <Label htmlFor="description">Description</Label>
        <textarea
          required
          name="description"
          id="description"
          rows="4"
          value={formData.description}
          onChange={handleInputChange}
        />
        {validationError && (
          <ValidationError>{validationError}</ValidationError>
        )}

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </FormLayout>
  );
}

const ValidationError = styled.div`
  color: red;
  margin-top: 10px;
`;

const SmallText = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;

const StyledAnchor = styled.a`
  color: #0011ff;
`;

const FormLayout = styled.section`
  width: 90%;
  margin: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 4px;
  margin-top: 4px;
`;

const Label = styled.label`
  margin: 10px 0px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  border: 1px solid #0011ff;
  background-color: #0011ff;
  color: white;
  padding: 10px 40px;
  border-radius: 40px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-top: 20px;
  align-self: center;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
    color: #0011ff;
    transition: 0.3s ease-in-out;
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;
