import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: #f9f9f9;
  /* 뷰포트의 높이로 설정 */
  min-height: calc(100vh - 50px);
  height: 100%;
  overflow: auto;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 0.15rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #80deea;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Quiz 컴포넌트...
