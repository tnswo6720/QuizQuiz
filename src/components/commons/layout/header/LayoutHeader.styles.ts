import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 152px;
  background-color: #f5f2fc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
  h2 {
    font-family: "Roboto", sans-serif; /* Roboto 폰트 사용, 없을 경우 sans-serif 폰트 사용 */
    color: #5d5490; /* 배경색과 대비되는 보라색 계열의 색상 */
    font-size: 24px; /* 글자 크기 */
    font-weight: bold; /* 글자 두께 */
    margin-left: 10px; /* 로고 이미지와의 간격 조정 */
  }
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;
