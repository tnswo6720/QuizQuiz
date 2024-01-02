import React, { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useAnswerOptions } from "./useAnswerOptions";
import { Container, Form, Input, TextArea, Button, Select } from "./styles";

interface ICommentRules {
  javascript: string;
  python: string;
  [key: string]: string;
}

const commentRules: ICommentRules = {
  javascript: "// ",
  python: "# ",
};

interface IFormState {
  subject: string;
  subSubject: string;
  questionText: string;
  code: string;
  language: string;
  answerOptions: string;
  answer: string;
  explanation: string;
  quizType: string;
}

// 현재는 하드코딩 데이터로 세팅되어 있습니다.
const subjectData = ["Math", "Science", "English"];
const subSubjectData = {
  Math: ["Algebra", "Geometry", "Calculus"],
  Science: ["Biology", "Chemistry", "Physics"],
  English: ["Grammar", "Literature", "Writing"],
};

function FillInTheBlankQuestion(): JSX.Element {
  // 사용자가 직접 입력한 주제를 관리하는 상태를 추가합니다.
  const [customSubject, setCustomSubject] = useState("");

  // 사용자가 직접 입력한 주제를 설정하는 함수입니다.
  const handleCustomSubjectChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setCustomSubject(e.target.value);
  };

  // 사용자가 직접 입력한 주제를 추가하는 함수입니다.
  const handleAddSubject = (): void => {
    if (customSubject && !subjectData.includes(customSubject)) {
      subjectData.push(customSubject);
      setSubject(customSubject);
      setCustomSubject("");
    }
  };

  // 사용자가 직접 입력한 세부 주제를 관리하는 상태를 추가합니다.
  const [customSubSubject, setCustomSubSubject] = useState("");

  // 사용자가 직접 입력한 세부 주제를 설정하는 함수입니다.
  const handleCustomSubSubjectChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setCustomSubSubject(e.target.value);
  };

  const [formState, setFormState] = useState<IFormState>({
    subject: "",
    subSubject: "",
    questionText: "",
    code: "",
    language: "",
    answerOptions: "",
    answer: "",
    explanation: "",
    quizType: "",
  });

  // 사용자가 직접 입력한 세부 주제를 추가하는 함수입니다.
  const handleAddSubSubject = (): void => {
    if (
      customSubSubject &&
      subject &&
      !subSubjectData[subject].includes(customSubSubject)
    ) {
      subSubjectData[subject].push(customSubSubject);
      setSubSubject(customSubSubject);
      setCustomSubSubject("");
    }
  };

  // subject와 subSubject 상태를 추가합니다.
  const [subject, setSubject] = useState("");
  const [subSubject, setSubSubject] = useState("");

  useEffect(() => {
    // subject가 변경되면 subSubject를 초기화합니다.
    setSubSubject("");
  }, [subject]);

  const handleSubjectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSubject(e.target.value);
  };

  const handleSubSubjectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSubSubject(e.target.value);
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const commentPrefix =
      formState.language !== "" ? commentRules[formState.language] : "// ";
    const newCode = formState.code
      .split("\n")
      .map((line) => commentPrefix + line)
      .join("\n")
      .replace(/`/g, "\\`");

    setFormState({
      ...formState,
      code: newCode,
    });

    console.log(formState);
  };

  // 선택지 함수 useAnswerOptions.ts에서 임포트
  const {
    answerOptions,
    handleAnswerOptionChange,
    handleAnswerOptionIsCorrectChange,
    handleDeleteAnswerOption,
    handleAddAnswerOption,
  } = useAnswerOptions();

  return (
    <Container>
      <h1>문제를 입력해주세요.</h1>
      <Form onSubmit={handleSubmit}>
        <label>언어:</label>
        <Input
          type="radio"
          id="javascript"
          name="language"
          value="javascript"
          onChange={handleChange}
        />
        <label htmlFor="javascript">JavaScript</label>
        <Input
          type="radio"
          id="python"
          name="language"
          value="python"
          onChange={handleChange}
        />
        <label htmlFor="python">Python</label>
        <label htmlFor="subject">주제:</label>
        <Select
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
          required
        >
          <option value="">-- 주제를 선택해 주세요 --</option>
          {subjectData.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </Select>
        <br />
        <label htmlFor="customSubject">직접 주제 입력:</label>
        <Input
          type="text"
          id="customSubject"
          value={customSubject}
          onChange={handleCustomSubjectChange}
        />
        <Button onClick={handleAddSubject}>주제 추가</Button>
        <label htmlFor="subSubject">세부주제:</label>
        <Select
          id="subSubject"
          value={subSubject}
          onChange={handleSubSubjectChange}
          required
        >
          <option value="">-- 세부주제를 선택해 주세요 --</option>
          {subject &&
            subjectData.includes(subject) &&
            subSubjectData[subject].map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
        </Select>
        <br />
        <label htmlFor="customSubSubject">직접 세부 주제 입력:</label>
        <Input
          type="text"
          id="customSubSubject"
          value={customSubSubject}
          onChange={handleCustomSubSubjectChange}
        />
        <Button onClick={handleAddSubSubject}>세부 주제 추가</Button>
        <br />
        <label htmlFor="questionText">문제:</label>
        <TextArea
          id="questionText"
          name="questionText"
          value={formState.questionText}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="code">코드:</label>
        <TextArea
          id="code"
          name="code"
          value={formState.code}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="answerOptions">선택지:</label>
        {answerOptions.map((option, index) => (
          <div key={index}>
            <Input
              type="text"
              id={`answerOptionText${index + 1}`}
              value={option.text}
              onChange={(e) => {
                handleAnswerOptionChange(index, e);
              }}
              required
            />
            <Input
              type="checkbox"
              id={`answerOptionIsCorrect${index + 1}`}
              checked={option.isCorrect}
              onChange={(e) => {
                handleAnswerOptionIsCorrectChange(index, e);
              }}
            />
            <label htmlFor={`answerOptionIsCorrect${index + 1}`}>정답</label>
            <Button
              onClick={() => {
                handleDeleteAnswerOption(index);
              }}
            >
              선택지 삭제
            </Button>
          </div>
        ))}
        <Button onClick={handleAddAnswerOption}>선택지 추가</Button>
        <br />
        <br />
        <label htmlFor="answer">정답:</label>
        <TextArea
          id="answer"
          name="answer"
          value={formState.answer}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="explanation">해설:</label>
        <TextArea
          id="explanation"
          name="explanation"
          value={formState.explanation}
          onChange={handleChange}
          required
        />
        <br />
        <Button type="submit">제출</Button>
      </Form>
    </Container>
  );
}

export default FillInTheBlankQuestion;
