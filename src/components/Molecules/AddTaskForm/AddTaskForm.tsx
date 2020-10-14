import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const AddTaskFormWrapper = styled.div`
  padding: 8px;
  padding-top: 0;
`;

const ChangeBgOnHover = styled.div`
  &:hover {
    & > :first-child {
      background-color: rgba(9, 30, 66, 0.08);
      color: #172b4d;
    }
  }
`;
const AddTaskFormContent = styled.div`
  padding: 4px 8px;
  cursor: pointer;
  display: block;

  max-width: 300px;
  min-height: 20px;
  position: relative;
  z-index: 0;
`;

const AddTaskFormTitle = styled.span`
  font-size: 14px;
  color: #5e6c84;

  clear: both;
  display: block;
  margin: 0 0 4px;
  overflow: hidden;
  text-decoration: none;
  word-wrap: break-word;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const FormWrapper = styled.form`
  position: relative;
  z-index: 3;
`;

const FormFields = styled.div`
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;

  max-width: 300px;
  min-height: 20px;

  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  height: 54px;

  background: none;
  border: none;
  box-shadow: none;
  margin-bottom: 4px;
  max-height: 162px;
  min-height: 54px;
  padding: 0;
`;

const FormControls = styled.div`
  & > :first-child {
    background-color: #5aac44;
    color: #fff;
  }
  & > :last-child {
    background-color: transparent;
    color: #5e6c84;
  }
`;

const FormButton = styled.button`
  box-shadow: none;
  border: none;

  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  line-height: 20px;
  padding: 6px 12px;
  text-align: center;

  box-sizing: border-box;
  border-radius: 3px;

  margin-right: 6px;

  &:disabled,
  [disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface Props {
  handleAddTask: (title: string) => void;
}

const AddTaskForm: React.FC<Props> = ({ handleAddTask }) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleShowForm = () => setShowForm((prev) => !prev);
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask(value);
    setShowForm(false);
    setValue("");
  };

  useLayoutEffect(() => {
    if (showForm) {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [showForm]);

  return (
    <>
      {showForm && <BackDrop onClick={handleShowForm} />}
      <AddTaskFormWrapper>
        {showForm ? (
          <FormWrapper onSubmit={handleOnSubmit}>
            <FormFields>
              <FormTextArea
                ref={inputRef}
                placeholder="Enter a title for this task..."
                value={value}
                onChange={handleOnChange}
              />
            </FormFields>
            <FormControls>
              <FormButton type="submit" disabled={value === ""}>
                Create
              </FormButton>
              <FormButton onClick={handleShowForm} type="button">
                Cancel
              </FormButton>
            </FormControls>
          </FormWrapper>
        ) : (
          <ChangeBgOnHover>
            <AddTaskFormContent onClick={handleShowForm}>
              <AddTaskFormTitle>+ Add task</AddTaskFormTitle>
            </AddTaskFormContent>
          </ChangeBgOnHover>
        )}
      </AddTaskFormWrapper>
    </>
  );
};

export default AddTaskForm;
