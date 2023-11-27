import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  background-color: #e0f7fa; // 파스텔 톤의 하늘색으로 변경
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
  color: white;
  cursor: pointer;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // 텍스트에 그림자 효과 추가
  background-color: #e0f7fa; // 파스텔 톤의 하늘색으로 배경색 변경
`;
