// StyledComponents.js
import styled from "@emotion/styled";
export const Container = styled.div`
  background: linear-gradient(
    to right,
    #ffffff,
    #e0f7fa
  ); // 하얀색과 하늘색이 섞인 그라디언트 배경
  font-family: Arial, sans-serif;
  color: #424242;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #87ceeb; // 색상을 하늘색으로 변경
  font-size: 3em;
  padding: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); // 텍스트 그림자 효과를 강조
  font-family: "Courier New", Courier, monospace; // 글꼴 변경
  letter-spacing: 2px; // 글자 간격 조정
  animation: glow 2s ease-in-out infinite alternate; // 깜빡이는 애니메이션 효과 추가

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #87ceeb, 0 0 20px #87ceeb, 0 0 30px #87ceeb,
        0 0 40px #87ceeb;
    }
    to {
      text-shadow: 0 0 20px #87ceeb, 0 0 30px #87ceeb, 0 0 40px #87ceeb,
        0 0 50px #87ceeb, 0 0 60px #87ceeb;
    }
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30px;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #80deea; // 파스텔톤 계열의 버튼 색상으로 변경
  border: none;
  color: white; // 버튼 텍스트 색상을 어두운 색으로 변경
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  margin: 10px;
  border-radius: 20px;

  &:hover {
    background-color: #b2ebf2; // 마우스 오버 시 하얀색과 하늘색이 섞인 색상으로 변경
  }
`;
