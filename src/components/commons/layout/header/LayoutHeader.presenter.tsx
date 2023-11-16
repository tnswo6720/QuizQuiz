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
            src="/travelfriendd.png"
            alt="여행친구"
            style={{ width: "100px", height: "100px" }}
          />{" "}
          <h2>퀴즈퀴즈</h2>
        </InnerLogo>

        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
