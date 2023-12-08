// questions2.js
export const typescriptNotionLibrary = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "1다음 코드에서 '@ant-design/icons' 라이브러리에서 어떤 아이콘을 가져오는가?",
    code: `
      import { UpOutlined } from "@ant-design/icons";
    `,
    answerOptions: [
      { text: "UpOutlined 아이콘", isCorrect: true },
      { text: "DownOutlined 아이콘", isCorrect: false },
      { text: "LeftOutlined 아이콘", isCorrect: false },
      { text: "RightOutlined 아이콘", isCorrect: false },
    ],
    answer: "UpOutlined 아이콘",
    explanation:
      "'@ant-design/icons' 라이브러리에서 'UpOutlined' 아이콘을 가져오고 있습니다.",
    explanationCode: "",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "2다음 코드에서 '@emotion/styled' 라이브러리를 어떤 목적으로 사용하는가?",
    code: `
      import styled from "@emotion/styled";
      
      const MyIcon = styled(UpOutlined)\`
        color: red;
        font-size: 50px;
      \`;
    `,
    answerOptions: [
      { text: "컴포넌트에 스타일을 적용하기 위해", isCorrect: true },
      { text: "컴포넌트를 만들기 위해", isCorrect: false },
      { text: "컴포넌트를 테스트하기 위해", isCorrect: false },
      { text: "컴포넌트를 렌더링하기 위해", isCorrect: false },
    ],
    answer: "컴포넌트에 스타일을 적용하기 위해",
    explanation:
      "'@emotion/styled' 라이브러리는 CSS-in-JS 라이브러리로, 컴포넌트에 스타일을 적용하기 위해 사용합니다.",
    explanationCode: "",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "2다음 코드에서 'Rate' 컴포넌트의 'onChange' prop에 전달된 함수는 어떤 역할을 하는가?",
    code: `
      <Rate onChange={setValue} value={value} />
    `,
    answerOptions: [
      {
        text: "별점이 변경될 때마다 'value' 상태를 업데이트한다.",
        isCorrect: true,
      },
      { text: "별점을 렌더링한다.", isCorrect: false },
      { text: "별점의 생명주기를 관리한다.", isCorrect: false },
      { text: "별점의 이벤트를 처리한다.", isCorrect: false },
    ],
    answer: "별점이 변경될 때마다 'value' 상태를 업데이트한다.",
    explanation:
      "'Rate' 컴포넌트의 'onChange' prop에 전달된 'setValue' 함수는 별점이 변경될 때마다 'value' 상태를 업데이트하는 역할을 합니다.",
    explanationCode: "",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "1'Rate' 컴포넌트에서 별점의 초기값을 설정하는 방법은?",
    code: `
      import React, { useState } from "react";
      import { Rate } from "antd";
  
      export default function App(): JSX.Element {
        const [value, setValue] = useState(3);
  
        return (
          <Rate onChange={setValue} value={value} />
        );
      }
    `,
    answerOptions: [
      { text: "useState 훅의 인자로 초기값을 설정한다.", isCorrect: true },
      {
        text: "'Rate' 컴포넌트의 'init' prop에 초기값을 설정한다.",
        isCorrect: false,
      },
      {
        text: "'Rate' 컴포넌트의 'default' prop에 초기값을 설정한다.",
        isCorrect: false,
      },
      {
        text: "'Rate' 컴포넌트의 'start' prop에 초기값을 설정한다.",
        isCorrect: false,
      },
    ],
    answer: "useState 훅의 인자로 초기값을 설정한다.",
    explanation:
      "별점의 초기값은 'useState' 훅의 인자로 설정합니다. 이 경우, 초기값은 3입니다.",
    explanationCode: "",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "2'Rate' 컴포넌트에서 사용자가 별점을 변경할 때마다 실행되는 함수를 설정하는 방법은?",
    code: `
      import React, { useState } from "react";
      import { Rate } from "antd";
  
      export default function App(): JSX.Element {
        const [value, setValue] = useState(3);
  
        return (
          <Rate onChange={setValue} value={value} />
        );
      }
    `,
    answerOptions: [
      {
        text: "'Rate' 컴포넌트의 'onChange' prop에 함수를 설정한다.",
        isCorrect: true,
      },
      {
        text: "'Rate' 컴포넌트의 'onRate' prop에 함수를 설정한다.",
        isCorrect: false,
      },
      {
        text: "'Rate' 컴포넌트의 'onUpdate' prop에 함수를 설정한다.",
        isCorrect: false,
      },
      {
        text: "'Rate' 컴포넌트의 'onValue' prop에 함수를 설정한다.",
        isCorrect: false,
      },
    ],
    answer: "'Rate' 컴포넌트의 'onChange' prop에 함수를 설정한다.",
    explanation:
      "'Rate' 컴포넌트에서 사용자가 별점을 변경할 때마다 실행되는 함수는 'onChange' prop에 설정합니다.",
    explanationCode: "",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서, 모달창이 띄워지는 원리와 흐름에 대한 설명 중 옳지 않은 것은 무엇인가요?",
    code: `
      export default function ModalAlertPage(): JSX.Element {
        const [isOpen, setIsOpen] = useState(false);
    
        const showModal = (): void => {
          setIsOpen(true);
        };
    
        const handleOk = (): void => {
          setIsOpen(false);
        };
    
        const handleCancel = (): void => {
          setIsOpen(false);
        };
    
        return (
          <>
            <button onClick={showModal}>모달창 열기</button>
            {isOpen && (
              <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={handleComplete} />
              </Modal>
            )}
          </>
        );
      }
    `,
    answerOptions: [
      "showModal 함수가 호출되면, isOpen 상태가 true로 설정되어 모달창이 열립니다.",
      "handleOk 또는 handleCancel 함수가 호출되면, isOpen 상태가 false로 설정되어 모달창이 닫힙니다.",
      "isOpen 상태에 따라 모달창이 열리거나 닫힙니다.",
      "모달창이 열렸을 때, handleOk 함수를 호출하면 모달창이 더욱 확대됩니다.",
    ],
    answer:
      "모달창이 열렸을 때, handleOk 함수를 호출하면 모달창이 더욱 확대됩니다.",
    explanation:
      "handleOk 함수가 호출되면 isOpen 상태가 false로 설정되므로 모달창이 닫힙니다. 따라서, handleOk 함수를 호출하면 모달창이 더욱 확대되는 것이 아닙니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서, '모달 종료 방식 - 1'에 대한 설명 중 옳지 않은 것은 무엇인가요?",
    code: `
      export default function ModalAlertPage(): JSX.Element {
        const [isOpen, setIsOpen] = useState(false);
    
        const showModal = (): void => {
          setIsOpen(true);
        };
    
        const handleOk = (): void => {
          setIsOpen(false);
        };
    
        const handleCancel = (): void => {
          setIsOpen(false);
        };
    
        return (
          <>
            <button onClick={showModal}>모달창 열기</button>
            <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
              <DaumPostcodeEmbed onComplete={handleComplete} />
            </Modal>
          </>
        );
      }
    `,
    answerOptions: [
      "'모달 종료 방식 - 1'은 isOpen 상태를 변경하여 모달창을 표시하거나 숨기는 방식입니다.",
      "handleOk 또는 handleCancel 함수가 호출되면 isOpen 상태가 false로 변경되어 모달창이 숨겨집니다.",
      "이 방식은 모달창의 내용을 임시로 숨기고 나중에 다시 보여줘야 하는 경우에 사용합니다.",
      "'모달 종료 방식 - 1'은 모달창을 삭제하는 방식입니다.",
    ],
    answer: "'모달 종료 방식 - 1'은 모달창을 삭제하는 방식입니다.",
    explanation:
      "'모달 종료 방식 - 1'은 모달창을 삭제하는 것이 아니라, isOpen 상태를 변경하여 모달창을 표시하거나 숨기는 방식입니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서, '모달 종료 방식 - 2'에 대한 설명 중 옳지 않은 것은 무엇인가요?",
    code: `
      export default function ModalAlertPage(): JSX.Element {
        const [isOpen, setIsOpen] = useState(false);
    
        const showModal = (): void => {
          setIsOpen(true);
        };
    
        const handleOk = (): void => {
          setIsOpen(false);
        };
    
        const handleCancel = (): void => {
          setIsOpen(false);
        };
    
        return (
          <>
            <button onClick={showModal}>모달창 열기</button>
            {isOpen && (
              <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={handleComplete} />
              </Modal>
            )}
          </>
        );
      }
    `,
    answerOptions: [
      "'모달 종료 방식 - 2'는 isOpen 상태에 따라 모달창 컴포넌트 자체를 생성하거나 제거하는 방식입니다.",
      "isOpen 값이 true일 때만 Modal 컴포넌트가 생성되고, false일 때는 Modal 컴포넌트가 사라집니다.",
      "이 방식은 모달창 내의 정보가 민감한 정보(예, 신용카드 정보, 비밀번호 등)이며, 모달창이 닫히면 그 정보를 완전히 삭제해야 하는 경우에 사용합니다.",
      "'모달 종료 방식 - 2'는 모달창을 숨기는 방식입니다.",
    ],
    answer: "'모달 종료 방식 - 2'는 모달창을 숨기는 방식입니다.",
    explanation:
      "'모달 종료 방식 - 2'는 모달창을 숨기는 것이 아니라, isOpen 상태에 따라 모달창 컴포넌트 자체를 생성하거나 제거하는 방식입니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
];
