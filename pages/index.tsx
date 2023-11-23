import { useRouter } from "next/router";
import React from "react";
import * as Styled from "./StyledComponents";

const MainPage = () => {
  const router = useRouter(); // useRouter 훅 사용

  const goToGuestPage = () => {
    router.push("/guest"); // '/guest'는 이동하고자 하는 페이지의 경로로 변경하세요
  };

  const goToMemberPage = () => {
    router.push("/member"); // '/member'는 이동하고자 하는 페이지의 경로로 변경하세요
  };

  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Styled.Logo src="/logo.jpg" alt="logo" />
        <Styled.Title>퀴즈퀴즈</Styled.Title>
      </Styled.LogoContainer>
      <Styled.ButtonContainer>
        <Styled.Button
          onClick={goToGuestPage} // 버튼 클릭 시, goToGuestPage 함수 실행
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#FBC02D")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#F9A825")
          }
        >
          게스트로 들어가기
        </Styled.Button>
        <Styled.Button
          onClick={goToMemberPage} // 버튼 클릭 시, goToMemberPage 함수 실행
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#FBC02D")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#F9A825")
          }
        >
          회원으로 들어가기
        </Styled.Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default MainPage;
