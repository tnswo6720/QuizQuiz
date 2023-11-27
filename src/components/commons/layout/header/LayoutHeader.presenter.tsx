import WeatherComponent from "../../../../../pages/Weather";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>
          <img
            src="/quizquiz.png"
            alt="퀴즈퀴즈"
            style={{ width: "100px", height: "80px" }}
          />{" "}
          <h2
            style={{
              color: "#26c6da", // 밝은 하늘색으로 변경
              textShadow: "2px 2px 4px rgba(192, 192, 192, 0.5)", // 그림자 효과를 회색으로 변경
              backgroundColor: "#e0f7fa", // 파스텔 톤의 하늘색으로 배경색 변경
              borderRadius: "5px", // 둥근 모서리 효과 추가
              padding: "10px", // 패딩 추가
            }}
          >
            콘텐츠로 빠른 이동
          </h2>
        </InnerLogo>

        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>옵션1</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션2</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션3</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션4</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션5</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션6</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션7</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션8</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션9</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션10</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션11</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>옵션12</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
