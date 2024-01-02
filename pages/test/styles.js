// styles.js 파일

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: #fafafa;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Select = styled.select`
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
