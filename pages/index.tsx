import { useRouter } from "next/router";
import React from "react";
import * as Styled from "./StyledComponents";
const MainPage = () => {
  const router = useRouter(); // useRouter 훅 사용

  const goToGuestPage = () => {
    router.push("/coding"); // '/guest'는 이동하고자 하는 페이지의 경로로 변경하세요
  };

  const goToMemberPage = () => {
    router.push("/quizDetail"); // '/member'는 이동하고자 하는 페이지의 경로로 변경하세요
  };

  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Styled.Logo src="/quizquiz.png" alt="logo" />
        <Styled.Title>퀴즈퀴즈</Styled.Title>
      </Styled.LogoContainer>
      <Styled.ButtonContainer>
        <Styled.Button onClick={goToGuestPage}>게스트로 들어가기</Styled.Button>
        <Styled.Button onClick={goToMemberPage}>
          회원으로 들어가기
        </Styled.Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default MainPage;
