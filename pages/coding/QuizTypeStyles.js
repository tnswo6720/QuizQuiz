import styled from "@emotion/styled";

// QuizTypeStyles.js
export const QuizTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0f7fa; // 파스텔 톤의 하늘색으로 변경
`;

export const QuizTypeHeader = styled.h1`
  font-size: 2.5em;
  color: #26c6da; // 밝은 하늘색으로 변경
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); // 그림자 효과를 좀 더 연하게 변경
`;

export const QuizTypeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #007bff; // 테두리 색상 변경
  border-radius: 10px;
  background-color: #ffffff; // 아이템 배경색을 하얀색으로 변경
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); // 박스에 그림자 효과 추가
`;

export const QuizTypeImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  image-rendering: crisp-edges;
`;

export const QuizTypeButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #80deea; // 버튼 배경색을 파스텔 톤의 하늘색으로 변경
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4bacb8; // 마우스 오버 시 배경색을 좀 더 어두운 하늘색으로 변경
  }
`;

export const QuizItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  gap: 20px;
`;

export const QuizSubTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const QuizModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 90%;
  max-height: 80%;
  overflow: auto;
  background-color: #ffffff; // 모달 배경색을 하얀색으로 변경
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
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

export const QuizItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 20px; // 가로 마진을 10px, 세로 마진을 20px로 설정
  padding: 20px;
  border: 1px solid #00acc1; // 청록색 테두리
  border-radius: 10px;
  background-color: #e0f7fa; // 하늘색 배경
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: calc(150% - 20px); // 50%에서 가로 마진의 두 배 값을 빼줌
  box-sizing: border-box; // 추가된 부분
  // max-width: calc(50% - 20px); // 최대 너비 지정
`;

export const QuizTitle = styled.h2`
  font-size: 1.1em;
  color: #00acc1; // 청록색 텍스트
  margin-bottom: 10px;
  text-decoration: none; // 추가된 부분
`;

export const QuizAuthor = styled.p`
  font-size: 1em;
  color: #00796b; // 진한 청록색 텍스트
`;

export const QuizItemLink = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;
