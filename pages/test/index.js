import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
  body {
    background: linear-gradient(to right, #FFFFFF, #87CEFA);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledText = styled.div`
  font-family: "Roboto", sans-serif;
  color: #808080;
  text-align: center;
  animation: ${fadeIn} 2s ease;
`;

const SiteName = styled(StyledText)`
  font-family: "Playfair Display", serif;
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const SubHeading = styled(StyledText)`
  font-size: 1.2em;
  margin-bottom: 2em;
  font-style: italic;
  animation-delay: 1s;
`;

const Features = styled(StyledText)`
  font-size: 1em;
  line-height: 1.6em;
  max-width: 800px;
  margin: 0 auto;
  animation-delay: 2s;

  ul {
    list-style: none;
    padding-left: 0;

    li {
      transition: color 0.3s ease; // 색상 변화 효과를 부드럽게 만듭니다.

      &:hover {
        color: #87cefa; // 마우스를 올렸을 때 색상을 하늘색으로 변경합니다.
      }
    }
  }
`;

function TypographyExample() {
  return (
    <div>
      <GlobalStyle />
      <SiteName>퀴즈퀴즈</SiteName>
      <SubHeading>사이트 소개</SubHeading>
      <Features>
        <ul>
          <li>이용자분은 문제를 생성하실 수 있습니다!</li>
          <li>이용자분은 문제를 푸실 수 있습니다!</li>
          <li>다른 사람이 생성한 문제를 푸실 수 있습니다!</li>
          <li>
            다양한 주제의 문제를 푸실 수 있습니다!(코딩, 게임, 법률, 역사 등)
          </li>
          <li>
            다양한 형태의 문제를 푸실 수 있습니다!(4지 선다형, 빈칸 뚫기, 이미지
            첨부 등)
          </li>
        </ul>
      </Features>
    </div>
  );
}

export default TypographyExample;
