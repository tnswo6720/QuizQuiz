import styled from "@emotion/styled";

// QuizTypeStyles.js
export const QuizTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2; // 배경색 변경
`;

// QuizTypeStyles.js
export const QuizTypeHeader = styled.h1`
  font-size: 2.5em;
  color: #007bff;
  margin-bottom: 20px;
`;

export const QuizTypeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd; // 테두리 추가
  border-radius: 10px; // 테두리 둥글게
`;

export const QuizTypeImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover; // 이미지 비율 유지
`;

// QuizTypeStyles.js
export const QuizTypeButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff; // 텍스트 색상을 흰색으로 변경
  background-color: #007bff; // 배경색을 파란색으로 변경
  border: none;
  border-radius: 5px; // 둥근 모서리 추가
  cursor: pointer;
  transition: background-color 0.3s ease; // 마우스 오버 시 배경색 변경 애니메이션 추가

  &:hover {
    background-color: #0056b3; // 마우스 오버 시 배경색을 어둡게 변경
  }
`;

export const QuizSubTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

// 모달

// QuizTypeStyles.js
export const QuizModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%; // 가로 길이 조정
  max-height: 80%; // 세로 길이 조정
  overflow: auto; // 내용이 넘치면 스크롤 생성
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); // 그림자 효과 추가
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

// 모달
