import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  background-color: #3a3a3a;
  background-size: contain;
  color: #c0c0c0;
  padding: 2rem;
  position: relative;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #1e1e1e;
  color: #c0c0c0;
  border: none;
  width: 100%;
  max-width: 400px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 30%;
  left: 80%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-image: url(/prison.png);
  background-size: contain;
  background-repeat: no-repeat;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

const NavItem = styled.div`
  cursor: pointer;
  background-color: #1e1e1e;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #c0c0c0;
    color: #3a3a3a;
  }
`;

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <StyledApp>
      <BackgroundImage></BackgroundImage>
      <SearchContainer>
        <h1>리부트 빌런 박제</h1>
        <p>죄를 지으면 벌을 받는게 세상 이치래더라</p>
        <Input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="범죄자 검색"
        />
      </SearchContainer>
      <Nav>
        <NavItem>닉변 현황</NavItem>
        <NavItem>사이트 소개</NavItem>
        <NavItem>제보/문의</NavItem>
      </Nav>
    </StyledApp>
  );
}

export default App;
