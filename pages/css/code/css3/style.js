import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: #f9f9f9;
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
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Sectionchoice = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  height: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; // 버튼과 선택지 사이의 간격을 조절합니다.
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100px; // 원하는 높이로 조절
  overflow: auto; // 내용이 더 많아져서 섹션의 높이를 초과할 경우 스크롤이 생기도록 설정
`;

export const InputAndButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start; // 왼쪽 정렬
  flex-direction: row; // 가로 배치
  align-items: center; // 세로 중앙 정렬
  margin-top: 20px;
  width: 100%; // 컨테이너의 너비를 100%로 설정

  input {
    margin-right: 1px; // 인풋창과 버튼 사이의 간격
  }
`;

// Quiz 컴포넌트...
