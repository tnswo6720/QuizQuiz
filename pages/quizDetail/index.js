import { useRouter } from "next/router";
import { useState } from "react";
import * as Styled from "./StyledComponents";

const QuizPage = () => {
  const router = useRouter();

  const allTopics = [
    { name: "코딩", image: "/coding.jpg" },
    { name: "역사", image: "/history.jpg" },
    { name: "법률", image: "raw.jpg" },
    // 추가 주제들...
  ];

  const [topics, setTopics] = useState(allTopics);
  const [search, setSearch] = useState("");

  const goToQuizDetail = (topic) => {
    router.push(`/quizDetail/${topic.name}`);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setTopics(
      allTopics.filter((topic) =>
        topic.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Styled.Container>
      <Styled.Title>원하시는 퀴즈 주제를 선택해주세요!</Styled.Title>
      <Styled.SearchInput
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="퀴즈 주제 검색"
      />

      {/* 검색창에 원하는 주제로 퀴즈를 검색하면 해당 퀴즈 버튼창이 뜨게 됩니다 */}

      <h2>현재까지 업데이트된 퀴즈 주제들:</h2>
      <ul>
        {allTopics.map((topic, index) => (
          <li key={index}>{topic.name}</li>
        ))}
      </ul>

      <Styled.TopicContainer>
        {topics.slice(0, 1).map((topic, index) => (
          <Styled.TopicButton key={index} onClick={() => goToQuizDetail(topic)}>
            <div>
              <img src={topic.image} alt={topic.name} />
              <p>{topic.name}</p>
            </div>
          </Styled.TopicButton>
        ))}
      </Styled.TopicContainer>
    </Styled.Container>
  );
};

export default QuizPage;
