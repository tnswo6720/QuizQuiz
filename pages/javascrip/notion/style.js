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
  max-width: 600px; // 섹션의 최대 너비를 600px로 제한
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  overflow-wrap: break-word; // 추가된 부분: 단어가 너무 길어서 줄바꿈이 필요한 경우 단어를 끊어서 표시
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

export const CodeBlock = styled.pre`
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const QuizImage = styled.div`
  width: 100%;
  max-width: 600px;
  height: 200px; // 높이 제한
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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

export const IndexWrapper = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  margin-right: 10px;
  background-color: paleturquoise;
  color: #333;
  font-size: 1em;
  border-radius: 50%;
`;
// Quiz 컴포넌트...
