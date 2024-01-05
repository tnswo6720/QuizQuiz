// styles.js
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TitleInput = styled.input`
  margin-top: 0.5em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const QuillEditorContainer = styled.div`
  margin-top: 1em;
  max-width: 700px;

  .quill {
    height: 400px;
  }

  .ql-editor img {
    max-width: 100%;
    height: auto;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
