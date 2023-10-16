import * as S from "./MyfirebaseWrite.styles";
import type { IMyfirebaseWriteUIProps } from "./MyfirebaseWrite.types";

export default function MyfirebaseWriteUI(
  props: IMyfirebaseWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        작성자:
        <S.MyInput
          type="text"
          onChange={props.onChangeWriter}
          placeholder="작성자를 입력하세요."
        />
      </S.InputWrapper>
      <S.InputWrapper>
        제 목:
        <S.MyInput
          type="text"
          onChange={props.onChangeTitle}
          placeholder="어디로 여행가셨어요?."
        />
      </S.InputWrapper>
      <S.InputWrapper>
        내 용:
        <S.MyInput
          type="text"
          onChange={props.onChangeContents}
          placeholder="여행에서의 이야기를 들려주세요"
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.MyButton onClick={props.onClickSubmit}>
          <S.InnerLogo></S.InnerLogo> 등록하기
        </S.MyButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
