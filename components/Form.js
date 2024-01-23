import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export default function Form({ onClose, onSubmit }) {
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    categories: "",
    age: "",
    description: "",
    minplayers: "",
    maxplayers: "",
    imageFile: null,
    yearpublished: "",
    playtime: "",
  });

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setFormData((prevFormData) => ({ ...prevFormData, imageFile: file }));
    }
  };

  const handleFilePreview = () => {
    if (formData.imageFile) {
      const url = URL.createObjectURL(formData.imageFile);
      window.open(url, "_blank");
    }
  };

  const handleRemoveFile = () => {
    setFormData((prevFormData) => ({ ...prevFormData, imageFile: null }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, imageFile: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <FormLayout>
      <CloseButton onClick={onClose} />
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="image">Image</Label>
        <FileDropArea
          id="image"
          isDragging={isDragging}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FileInput type="file" name="imageFile" onChange={handleFileChange} />
          {formData.imageFile ? (
            <FilePreview onClick={handleFilePreview}>
              {formData.imageFile.name}
            </FilePreview>
          ) : (
            "Drag an image here or click to select"
          )}
        </FileDropArea>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formData.imageFile && (
          <button onClick={handleRemoveFile}>Remove File</button>
        )}

        <Label htmlFor="categories">Categories</Label>
        <Input
          type="text"
          name="categories"
          id="categories"
          value={formData.categories}
          onChange={handleInputChange}
        />
        <Label htmlFor="yearpublished">Year</Label>
        <Input
          type="text"
          name="yearpublished"
          id="yearpublished"
          value={formData.yearpublished}
          onChange={handleInputChange}
        />
        <Label htmlFor="playtime">Play time</Label>
        <Input
          type="number"
          name="playtime"
          id="playtime"
          value={formData.playtime}
          onChange={handleInputChange}
        />
        <Label htmlFor="age">Age</Label>
        <Input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <Label htmlFor="minplayers">Minplayers</Label>
        <Input
          type="number"
          name="minplayers"
          id="minplayers"
          value={formData.minplayers}
          onChange={handleInputChange}
        />
        <Label htmlFor="maxplayers">Maxplayers</Label>
        <Input
          type="number"
          name="maxplayers"
          id="maxplayers"
          value={formData.maxplayers}
          onChange={handleInputChange}
        />
        <Label htmlFor="description">Description</Label>
        <textarea
          name="description"
          id="description"
          rows="4"
          value={formData.description}
          onChange={handleInputChange}
        />
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </StyledForm>
    </FormLayout>
  );
}

const FormLayout = styled.section`
  width: 90%;
  margin: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FileDropArea = styled.label`
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  margin: 10px 0;
  background-color: ${(props) =>
    props.isDragging ? "#e3e3e3" : "transparent"};
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
`;

const FileInput = styled.input`
  display: none;
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
const FilePreview = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubmitBtn = styled.button`
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
