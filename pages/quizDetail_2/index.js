// QuizTypePage.js
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as Styles from "./QuizTypeStyles";
import Link from "next/link";

const QuizTypePage = () => {
  const router = useRouter();
  const { topic } = router.query;

  const quizSubTypes = [
    {
      name: "빈칸 뚫기",
      image: "/fillInTheBlank.jpg",
      path: `/quiz/${topic}/fillInTheBlank`,
    },
    {
      name: "4지 선다형",
      image: "/multipleChoice.jpg",
      path: `/quiz/${topic}/multipleChoice`,
    },
    {
      name: "이미지 예시 문제",
      image: "/image.jpg",
      path: `/quiz/${topic}/image`,
    },
    // ...
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 열림/닫힘 상태

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const quizList = [
    { id: "array", title: "array", author: "배열 퀴즈" },
    { id: "object", title: "object", author: "오브젝트" },
    { id: "function", title: "function", author: "함수" },
    { id: "event", title: "array", author: "이벤트 처리" },
    { id: "promise", title: "object", author: "동기화와 비동기화" },
    { id: "basic", title: "function", author: "기초 개념" },
    // ...
  ];

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <Styles.QuizTypeContainer>
      <Styles.QuizTypeHeader>{topic} 퀴즈 유형 선택</Styles.QuizTypeHeader>
      <Styles.QuizSubTypesContainer>
        {quizSubTypes.map((quizSubType, index) => (
          <Styles.QuizTypeItem key={index}>
            <Styles.QuizTypeImage
              src={quizSubType.image}
              alt={quizSubType.name}
            />
            <Styles.QuizTypeButton onClick={openModal}>
              {quizSubType.name}
            </Styles.QuizTypeButton>
          </Styles.QuizTypeItem>
        ))}
      </Styles.QuizSubTypesContainer>

      {isModalOpen && (
        <>
          <Styles.Overlay onClick={closeModal} />
          <Styles.QuizModal>
            {quizList.map((quiz) => (
              <div key={quiz.id}>
                <Link href={`/javascript/code/${quiz.id}`}>
                  <a>
                    <h2>{quiz.title}</h2>
                  </a>
                </Link>
                <p>{quiz.author}</p>
              </div>
            ))}
          </Styles.QuizModal>
        </>
      )}
    </Styles.QuizTypeContainer>
  );
};

export default QuizTypePage;
