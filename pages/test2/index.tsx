import React, { useState, useRef } from "react";

function PostCreateForm() {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState(""); // 유튜브 영상 URL 상태
  const contentRef = useRef(null); // contenteditable을 위한 ref

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 이미지 파일을 읽어서 contenteditable div에 이미지 태그로 삽입합니다.
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 현재 커서 위치에 이미지 태그를 삽입합니다.
        insertImageInContentEditable(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const insertImageInContentEditable = (imageUrl) => {
    const imgTag = `<img src="${imageUrl}" alt="이미지" style="max-width:100%;"/>`;
    contentRef.current.innerHTML += imgTag;
  };

  // 유튜브 영상 URL을 입력받는 핸들러
  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  // 유튜브 영상을 contentEditable에 삽입하는 함수
  const insertVideoInContentEditable = () => {
    const videoId = extractVideoID(videoUrl);
    if (videoId) {
      const iframeTag = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      contentRef.current.innerHTML += iframeTag;
    }
    setVideoUrl(""); // URL 입력 필드 초기화
  };

  // 유튜브 URL에서 비디오 ID 추출하는 함수
  const extractVideoID = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = contentRef.current.innerHTML; // contenteditable div의 내용을 가져옵니다.
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    // 폼 데이터를 서버로 전송하는 로직을 추가합니다.
    // ...

    // 폼 제출 후 초기화
    setTitle("");
    contentRef.current.innerHTML = ""; // contenteditable div를 비웁니다.
    setVideoUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">내용:</label>
        <div
          ref={contentRef}
          contentEditable
          style={{
            border: "1px solid gray",
            minHeight: "100px",
            padding: "5px",
          }}
        ></div>
      </div>
      <div>
        <label htmlFor="image">이미지 첨부:</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
      <div>
        <label htmlFor="video">유튜브 영상 URL:</label>
        <input
          type="text"
          id="video"
          value={videoUrl}
          onChange={handleVideoUrlChange}
          placeholder="유튜브 영상 URL을 입력하세요"
        />
        <button type="button" onClick={insertVideoInContentEditable}>
          영상 추가
        </button>
      </div>
      <button type="submit">게시글 작성</button>
    </form>
  );
}

export default PostCreateForm;
