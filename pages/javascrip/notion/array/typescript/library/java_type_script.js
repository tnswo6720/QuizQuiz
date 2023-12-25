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
      {
        text: "showModal 함수가 호출되면, isOpen 상태가 true로 설정되어 모달창이 열립니다.",
        isCorrect: false,
      },
      {
        text: "handleOk 또는 handleCancel 함수가 호출되면, isOpen 상태가 false로 설정되어 모달창이 닫힙니다.",
        isCorrect: false,
      },
      {
        text: "isOpen 상태에 따라 모달창이 열리거나 닫힙니다.",
        isCorrect: false,
      },
      {
        text: "모달창이 열렸을 때, handleOk 함수를 호출하면 모달창이 더욱 확대됩니다.",
        isCorrect: true,
      },
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
      {
        text: "모달 종료 방식 - 1'은 isOpen 상태를 변경하여 모달창을 표시하거나 숨기는 방식입니다.",
        isCorrect: false,
      },
      {
        text: "handleOk 또는 handleCancel 함수가 호출되면 isOpen 상태가 false로 변경되어 모달창이 숨겨집니다.",
        isCorrect: false,
      },
      {
        text: "이 방식은 모달창의 내용을 임시로 숨기고 나중에 다시 보여줘야 하는 경우에 사용합니다.",
        isCorrect: false,
      },
      {
        text: "'모달 종료 방식 - 1'은 모달창을 삭제하는 방식입니다.",
        isCorrect: true,
      },
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
      "React의 useState hook에서 이전 상태를 기반으로 새로운 상태를 설정하려면 어떻게 해야 할까요?",
    code: `
    const [isOpen, setIsOpen] = useState(false);
  
    const onToggleModal = (): void => {
      setIsOpen((prev) => !prev);
    };
    `,
    answerOptions: [
      {
        text: "setIsOpen(!isOpen)",
        isCorrect: false,
      },
      {
        text: "setIsOpen(prev => !prev)",
        isCorrect: true,
      },
      {
        text: "setIsOpen(isOpen = !isOpen)",
        isCorrect: false,
      },
      {
        text: "setIsOpen(prev => prev = !prev)",
        isCorrect: false,
      },
    ],
    answer: "setIsOpen(prev => !prev)",
    explanation:
      "React의 useState hook에서 이전 상태를 기반으로 새로운 상태를 설정하려면 함수를 전달해야 합니다. 이 함수는 이전 상태를 인자로 받아 새로운 상태를 반환합니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "React에서 모달창을 열고 닫는 방법 중 옳은 것은 무엇인가요?",
    code: `
    const [isOpen, setIsOpen] = useState(false);
  
    const onToggleModal = (): void => {
      setIsOpen((prev) => !prev);
    };
  
    return (
      <button onClick={onToggleModal}>모달창 열기!!</button>
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          // Modal Contents
        </Modal>
      )}
    );
    `,
    answerOptions: [
      {
        text: "모달창을 항상 열어놓고, 내용을 보여줄지 말지 결정한다.",
        isCorrect: false,
      },
      {
        text: "모달창의 상태를 관리하는 state를 만들고, 이 state를 기반으로 모달창을 열거나 닫는다.",
        isCorrect: true,
      },
      {
        text: "모달창을 여는 버튼을 누를 때마다 새로운 모달창 컴포넌트를 생성한다.",
        isCorrect: false,
      },
      {
        text: "모달창을 열 때마다 모든 상태를 초기화한다.",
        isCorrect: false,
      },
    ],
    answer:
      "모달창의 상태를 관리하는 state를 만들고, 이 state를 기반으로 모달창을 열거나 닫는다.",
    explanation:
      "React에서는 상태 관리를 통해 동적인 UI를 만듭니다. 모달창을 열고 닫는 것도 상태를 사용하여 제어할 수 있습니다. 이를 위해 useState hook을 사용하여 모달창의 열림/닫힘 상태를 관리합니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "`setIsOpen((prev) => !prev)` 코드에서 `prev`는 어떤 값을 의미하는가?",
    code: `
    const [isOpen, setIsOpen] = useState(false);
  
    const onToggleModal = (): void => {
      setIsOpen((prev) => !prev);
    };
    `,
    answerOptions: [
      {
        text: "항상 `false`",
        isCorrect: false,
      },
      {
        text: "`isOpen`의 초기값",
        isCorrect: true,
      },
      {
        text: "`setIsOpen` 함수",
        isCorrect: false,
      },
      {
        text: "`onToggleModal` 함수",
        isCorrect: false,
      },
    ],
    answer: "`isOpen`의 초기값",
    explanation:
      "`setIsOpen` 함수에 전달되는 `prev`는 `isOpen`의 현재 상태를 의미합니다. `setIsOpen((prev) => !prev)`는 `isOpen`의 이전 상태를 부정하여 새 상태를 생성하는 함수입니다. 따라서 `onToggleModal` 함수가 호출되면 `isOpen`의 상태가 토글됩니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "'App' 컴포넌트에서 'ApolloSetting' 컴포넌트를 사용하여 컴포넌트 합성이 이루어지고 있습니다. 이에 대한 설명 중 틀린 것은 무엇인가요?",
    code: `
      // App 컴포넌트
      export default function App({ Component, pageProps }: AppProps): JSX.Element {
        return (
          <ApolloSetting>
            <>
              <Global styles={globalStyles} />
              <Layout>
                <Component />
              </Layout>
            </>
          </ApolloSetting>
        );
      }
  
      // ApolloSetting 컴포넌트
      export default function ApolloSetting(props: IApolloSetting): JSX.Element {
        const client = new ApolloClient({
          uri: "http://backend-example.codebootcamp.co.kr/graphql",
          cache: new InMemoryCache(),
        });
        return(
          <ApolloProvider client={client}>
            {props.children}
          </ApolloProvider>
        )
      }
    `,
    answerOptions: [
      {
        text: "'App' 컴포넌트는 'ApolloSetting' 컴포넌트를 자식 컴포넌트로 사용합니다.",
        isCorrect: false,
      },
      {
        text: "'ApolloSetting' 컴포넌트는 'props.children'을 통해 자식 컴포넌트를 렌더링합니다.",
        isCorrect: false,
      },
      {
        text: "'App' 컴포넌트는 'ApolloSetting' 컴포넌트 안에서 렌더링됩니다.",
        isCorrect: false,
      },
      {
        text: "'ApolloSetting' 컴포넌트는 'App' 컴포넌트의 자식 컴포넌트로 사용됩니다.",
        isCorrect: true,
      },
    ],
    answer:
      "'ApolloSetting' 컴포넌트는 'App' 컴포넌트의 자식 컴포넌트로 사용됩니다.",
    explanation:
      "'ApolloSetting' 컴포넌트는 'App' 컴포넌트에서 사용되며, 'App' 컴포넌트의 내용은 'ApolloSetting' 컴포넌트의 자식 컴포넌트로서 렌더링됩니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "글로벌 스타일로 폰트를 지정하고, 이를 'App' 컴포넌트에서 어떻게 적용하는지 설명한 것 중 틀린 것은 무엇인가요?",
    code: `
      // globalStyles.js
      import { css } from "@emotion/react";

      export const globalStyles = css\`
        * {
          margin: 0;
          box-sizing: border-box;
          font-size: 20px;
          font-family: "myfont";
        }

        @font-face {
          font-family: "myfont";
          src: url("/fonts/Maplestory_Light.ttf");
        }
      \`;

      // App.js
      import type { AppProps } from "next/app";
      import { Global } from "@emotion/react";
      import { globalStyles } from "../src/commons/styles/globalStyles";

      export default function App({ Component, pageProps }: AppProps): JSX.Element {
        return (
          <>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </>
        );
      }
    `,
    answerOptions: [
      {
        text: "'globalStyles'에서 폰트를 설정하고, 이를 'App' 컴포넌트에서 'Global' 컴포넌트를 통해 적용한다.",
        isCorrect: true,
      },
      {
        text: "'App' 컴포넌트에서 폰트를 설정하고, 이를 'globalStyles'에서 'Global' 컴포넌트를 통해 적용한다.",
        isCorrect: false,
      },
      {
        text: "'globalStyles'에서 폰트를 설정하고, 이를 'App' 컴포넌트의 'Component' 컴포넌트에서 적용한다.",
        isCorrect: false,
      },
      {
        text: "'App' 컴포넌트에서 폰트를 설정하고, 이를 'App' 컴포넌트의 'Component' 컴포넌트에서 적용한다.",
        isCorrect: false,
      },
    ],
    answer:
      "'globalStyles'에서 폰트를 설정하고, 이를 'App' 컴포넌트에서 'Global' 컴포넌트를 통해 적용한다.",
    explanation:
      "이 코드에서는 'globalStyles'에서 폰트를 설정하고, 이를 'App' 컴포넌트에서 'Global' 컴포넌트를 통해 전체 앱에 적용하고 있습니다. 따라서 전역 스타일로 폰트를 설정하는 흐름은 'globalStyles'에서 폰트를 설정하고, 이를 'App' 컴포넌트에서 'Global' 컴포넌트를 통해 적용하는 것입니다.",
    subject: "typescript",
    subSubject: "library",
    quizType: "coding",
  },
];
