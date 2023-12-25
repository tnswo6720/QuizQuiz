import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: calc(100vh - 50px);

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

export const Button = styled.button`
  padding: 0.15rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #80deea;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; // 버튼과 선택지 사이의 간격을 조절합니다.
`;

export const TextArea = styled.textarea`
  width: 300px;
  min-height: 100px;
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

export const CodeBlock = styled.pre`
  background-color: #f0f0f0;
  padding: 0.5rem;
  border-radius: 4px;
  overflow-x: auto;
  width: 100%;
  max-width: 600px;

  code {
    font-family: "Courier New", Courier, monospace;
  }
`;

export const SelectBox = styled.select`
  width: 200px; // 너비 설정
  height: 35px; // 높이 설정
  margin: 10px; // 주변 여백 설정
  padding: 5px; // 내부 여백 설정
  border: 1px solid #ccc; // 테두리 설정
  border-radius: 5px; // 테두리 둥글게 설정
  background-color: #fff; // 배경색 설정
  font-size: 16px; // 글자 크기 설정
`;

export const ExplanationImage = styled.img`
  width: 100%; // 이미지의 너비를 섹션창의 너비에 맞게 조절
  max-width: 100%; // 이미지의 최대 너비를 섹션창의 너비로 제한
  height: auto; // 이미지의 높이를 원래의 비율에 맞게 자동으로 조절
`;

// Quiz 컴포넌트...
