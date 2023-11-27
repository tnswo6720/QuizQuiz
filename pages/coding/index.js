// QuizTypePage.js
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as Styles from "./QuizTypeStyles.js";
import Link from "next/link";
import {
  javascriptQuizList,
  typescriptQuizList,
  cssQuizList,
  nestjsQuizList,
  nestjsImageQuizList, // 추가된 부분
} from "./quizList.js";

const QuizTypePage = () => {
  const router = useRouter();
  const { topic } = router.query;

  // 초기값을 "선택"에서 null로 변경
  const [currentTopic, setCurrentTopic] = useState(null);

  const [filteredQuizList, setFilteredQuizList] = useState([]);
  const [quizList, setQuizList] = useState([]);
  const [currentQuizType, setCurrentQuizType] = useState("");
  const [quizSubTypes, setQuizSubTypes] = useState([]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeModal(); // closeModal 함수 호출
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (router.isReady) {
      setCurrentTopic(router.query.topic);
      setQuizSubTypes([
        {
          name: "빈칸 뚫기",
          image: "/blank.png",
          path: `/quiz/${router.query.topic}/code`, // "빈칸 뚫기" 퀴즈의 경로를 동적으로 설정
          type: "빈칸 뚫기",
        },
        {
          name: "4지 선다형",
          image: "/select.png",
          path: `/quiz/${router.query.topic}/notion`, // "4지 선다형" 퀴즈의 경로를 동적으로 설정
          type: "4지 선다형",
        },

        {
          name: "이미지 문제",
          image: "/select.png",
          path: `/quiz/${router.query.topic}/image`, // "4지 선다형" 퀴즈의 경로를 동적으로 설정
          type: "이미지 문제",
        },
        // ... 나머지 퀴즈 유형도 동일하게 수정
      ]);
    }
  }, [router.isReady, router.query.topic]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // 검색어를 저장하는 state

  const openModal = (quizType) => {
    setCurrentQuizType(quizType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTopic(null);
    setCurrentQuizType(null);
    setSearchTerm("");
  };
  const topicKoreanMap = {
    javascript: "자바스크립트",
    typescript: "타입스크립트",

    // 앞으로 추가될 주제를 여기에 추가
  };
  useEffect(() => {
    const allQuizList = [
      ...javascriptQuizList,
      ...typescriptQuizList,
      ...cssQuizList,
      ...nestjsQuizList,
      ...nestjsImageQuizList, // 추가된 부분
    ];
    let newFilteredQuizList = [];

    if (currentTopic && currentTopic !== "선택" && currentQuizType) {
      newFilteredQuizList = allQuizList.filter(
        (quiz) =>
          quiz.topic &&
          quiz.topic.toLowerCase() === currentTopic.toLowerCase() &&
          quiz.type === currentQuizType // 퀴즈 유형이 현재 선택한 유형과 일치하는지 확인
      );
    } else if (searchTerm && currentQuizType) {
      const normalizedSearchTerm = searchTerm.replace(/\s/g, "").toLowerCase();
      newFilteredQuizList = allQuizList.filter(
        (quiz) =>
          quiz.type === currentQuizType && // 퀴즈 유형이 현재 선택한 유형과 일치하는지 확인
          quiz.topic &&
          (quiz.topic.toLowerCase().includes(normalizedSearchTerm) ||
            Object.entries(topicKoreanMap).some(
              ([key, value]) =>
                key === quiz.topic.toLowerCase() &&
                value === normalizedSearchTerm
            ))
      );
    }
    setFilteredQuizList(newFilteredQuizList);
  }, [searchTerm, currentQuizType, currentTopic]);

  useEffect(() => {
    if (router.isReady) {
      setCurrentTopic(router.query.topic);
      setQuizSubTypes([
        {
          name: "빈칸 뚫기",
          image: "/blank.png",
          path: `/quiz/${router.query.topic}/fillInTheBlank`,
        },
        {
          name: "4지 선다형",
          image: "/select.png",
          path: `/quiz/${router.query.topic}/multipleChoice`,
        },
        {
          name: "이미지 문제",
          image: "/image.jpg",
          path: `/quiz/${router.query.topic}/image`,
        },
        // ...
      ]);
    }
  }, [router.isReady, router.query.topic]);

  const handleTopicChange = (e) => {
    console.log(e.target.value); // 여기에 토픽 값 출력
    setCurrentTopic(e.target.value);
    setSearchTerm(""); // 토픽 변경 시 검색어 초기화
  };
  return (
    <Styles.QuizTypeContainer>
      <Styles.QuizTypeHeader>퀴즈 타입 선택</Styles.QuizTypeHeader>
      <Styles.QuizSubTypesContainer>
        {quizSubTypes.map((quizSubType) => (
          <Styles.QuizTypeItem key={quizSubType.name}>
            <Styles.QuizTypeImage
              src={quizSubType.image}
              alt={quizSubType.name}
            />
            <Styles.QuizTypeButton onClick={() => openModal(quizSubType.name)}>
              {quizSubType.name}
            </Styles.QuizTypeButton>
          </Styles.QuizTypeItem>
        ))}
      </Styles.QuizSubTypesContainer>
      {isModalOpen && (
        <>
          <Styles.Overlay onClick={closeModal} />
          <Styles.QuizModal>
            <select onChange={handleTopicChange}>
              <option value="선택">직접 검색</option>
              <option value="javascript">자바스크립트</option>
              <option value="typescript">타입스크립트</option>
              <option value="css">CSS</option>
              <option value="nestjs">nestjs</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {router.isReady &&
              filteredQuizList.map((quiz) => (
                <div key={quiz.id}>
                  <Link href={`/${currentTopic}/${quiz.category}/${quiz.id}`}>
                    <a>
                      {quiz.type === "이미지 문제" ? (
                        <img src={quiz.image} alt={quiz.title} />
                      ) : (
                        <h2>{quiz.title}</h2>
                      )}
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
