// StyledComponents.js
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #fff9c4;
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
  color: #fbc02d;
  font-size: 3em;
  padding: 20px;
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
  background-color: #f9a825;
  border: none;
  color: #ffffff;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  margin: 10px;
  border-radius: 20px;
`;
