import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

// 폰트 크기를 2rem으로 설정,
// 색상을 #333으로 설정
// 제목 아래에 마진을 1rem으로 설정
// 제목 아래의 요소와의 간격

export const SearchInput = styled.input`
  width: 25%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

//  검색창의 너비를 100%로 설정,
// 패딩과 마진을 적용.
// 테두리의 색상과 둥근 모서리를 적용

export const TopicContainer = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const TopicButton = styled.button`
  position: relative;
  width: 250px;
  height: 250px;
  padding: 1rem;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(243, 229, 171, 0.2); /* 바닐라 색, 투명도 70% */
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* 스케일 10% 확대 */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
