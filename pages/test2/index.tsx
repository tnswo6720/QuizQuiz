import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Container,
  TitleInput,
  QuillEditorContainer,
  SubmitButton,
} from "./styledQuill"; // 스타일을 임포트합니다.

// SSR을 사용하지 않는 dynamic import 설정
const ReactQuill = dynamic(import("react-quill"), { ssr: false });

// Quill 에디터 툴바 옵션
const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ size: ["small", false, "large", "huge"] }],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
    ["link", "image"],
  ],
};

export default function NoticeForm(): JSX.Element {
  const [title, setTitle] = useState(""); // 제목 상태 관리
  const [content, setContent] = useState(""); // 내용 상태 관리
  return (
    <Container>
      <h2>공지사항 작성</h2>
      <label>
        제목:
        <TitleInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <QuillEditorContainer>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          className="quill" // 스타일 지정을 위한 클래스명 추가
        />
      </QuillEditorContainer>
      <SubmitButton
        onClick={() => {
          console.log(title, content); // 제출 로직을 구현해야 함
        }}
      >
        공지사항 등록하기
      </SubmitButton>
    </Container>
  );
}
