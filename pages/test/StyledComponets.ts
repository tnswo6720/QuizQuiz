import styled from "@emotion/styled";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: #80deea;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  margin: 10px;
  border-radius: 20px;

  &:hover {
    background-color: #b2ebf2;
  }
`;
