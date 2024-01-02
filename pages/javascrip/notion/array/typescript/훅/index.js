// questions2.js
export const typescriptNotionHook = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useState' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

    export default Counter;
    `,
    answerOptions: [
      {
        text: "'useState'는 컴포넌트의 상태를 관리하는 데 사용되며, 초기 상태 값을 인자로 받습니다.",
        isCorrect: true,
      },
      {
        text: "'useState'는 배열을 반환하며, 첫 번째 원소는 현재 상태를 나타내고, 두 번째 원소는 상태를 변경하는 함수입니다.",
        isCorrect: false,
      },
      {
        text: "'useState'를 사용하면 상태를 변경할 때마다 컴포넌트가 다시 렌더링됩니다.",
        isCorrect: false,
      },
      {
        text: "'useState'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useState'는 컴포넌트의 상태를 관리하는 데 사용되며, 초기 상태 값을 인자로 받습니다.",
    explanation:
      "리액트의 'useState' 훅은 함수 컴포넌트에서 상태를 관리할 수 있게 해줍니다. 이는 클래스 컴포넌트의 'this.state'와 비슷하지만, 'useState'는 함수 컴포넌트에서 사용할 수 있습니다. 'useState'는 초기 상태 값을 인자로 받고, 배열을 반환합니다. 이 배열의 첫 번째 원소는 현재 상태 값을 나타내고, 두 번째 원소는 상태를 변경하는 함수입니다. 이 함수를 사용하여 상태를 변경하면, 변경된 상태에 따라 컴포넌트가 다시 렌더링됩니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useEffect' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useState, useEffect } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        document.title = \`You clicked \${count} times\`;
      });

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useEffect'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용되며, 부수 효과를 발생시킬 함수를 인자로 받습니다.",
        isCorrect: true,
      },
      {
        text: "'useEffect'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useEffect'는 함수를 반환하며, 이 함수는 컴포넌트 언마운트 시에 실행됩니다.",
        isCorrect: false,
      },
      {
        text: "'useEffect'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useEffect'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용되며, 부수 효과를 발생시킬 함수를 인자로 받습니다.",
    explanation:
      "리액트의 'useEffect' 훅은 함수 컴포넌트에서 부수 효과(side effects)를 수행하도록 해줍니다. 이는 클래스 컴포넌트의 'componentDidMount', 'componentDidUpdate', 'componentWillUnmount'와 비슷합니다. 'useEffect'는 부수 효과를 발생시킬 함수를 인자로 받습니다. 이 훅은 기본적으로 렌더링 후에 실행되며, 선택적으로 특정 값에 의존하도록 설정할 수 있습니다. 또한, 'useEffect'는 선택적으로 클린업(cleanup) 함수를 반환할 수 있으며, 이 함수는 컴포넌트 언마운트 시나, 의존성이 변경될 때 실행됩니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useContext' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useContext } from 'react';
    const ThemeContext = React.createContext('light');

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return <button theme={theme}>I am styled by theme context!</button>;
    }

    export default ThemedButton;
    `,
    answerOptions: [
      {
        text: "'useContext'는 컨텍스트의 현재 값을 반환하며, 컴포넌트가 렌더링될 때마다 이 값을 읽을 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "'useContext'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useContext'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useContext'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useContext'는 컨텍스트의 현재 값을 반환하며, 컴포넌트가 렌더링될 때마다 이 값을 읽을 수 있습니다.",
    explanation:
      "리액트의 'useContext' 훅은 주어진 컨텍스트의 현재 값을 반환합니다. 이 훅을 사용하면 컴포넌트 트리 안에서 전역적으로 공유할 수 있는 값을 쉽게 접근하고 읽을 수 있습니다. 'useContext'는 컴포넌트가 렌더링될 때마다 해당 컨텍스트의 현재 값을 읽습니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useReducer' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useReducer } from 'react';

    const initialState = {count: 0};

    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
    }

    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
      );
    }

    export default Counter;
    `,
    answerOptions: [
      {
        text: "'useReducer'는 복잡한 상태 로직을 관리하는 데 사용되며, 현재 상태와 그 상태를 업데이트하는 디스패치 메서드를 반환합니다.",
        isCorrect: true,
      },
      {
        text: "'useReducer'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useReducer'는 컨텍스트의 현재 값을 반환하며, 컴포넌트가 렌더링될 때마다 이 값을 읽을 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "'useReducer'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useReducer'는 복잡한 상태 로직을 관리하는 데 사용되며, 현재 상태와 그 상태를 업데이트하는 디스패치 메서드를 반환합니다.",
    explanation:
      "리액트의 'useReducer' 훅은 복잡한 상태 로직을 관리하는 데 사용됩니다. 이 훅은 리듀서 함수와 초기 상태를 인자로 받고, 현재 상태와 그 상태를 업데이트하는 디스패치 메서드를 반환합니다. 디스패치 메서드에 액션을 전달하면, 리듀서는 현재 상태와 전달된 액션을 바탕으로 새로운 상태를 반환하고, 컴포넌트는 이 새로운 상태에 따라 다시 렌더링됩니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useCallback' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useState, useCallback } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      const increment = useCallback(() => {
        setCount(count + 1);
      }, [count]);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={increment}>
            Click me
          </button>
        </div>
      );
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useCallback'는 메모이제이션된 버전의 콜백 함수를 반환하며, 이 함수는 의존성 배열이 변경될 때까지 동일하게 유지됩니다.",
        isCorrect: true,
      },
      {
        text: "'useCallback'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useCallback'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useCallback'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useCallback'는 메모이제이션된 버전의 콜백 함수를 반환하며, 이 함수는 의존성 배열이 변경될 때까지 동일하게 유지됩니다.",
    explanation:
      "리액트의 'useCallback' 훅은 주어진 콜백 함수의 메모이제이션된 버전을 반환합니다. 이 훅은 콜백 함수와 의존성 배열을 인자로 받습니다. 'useCallback'은 의존성 배열이 변경될 때까지 콜백 함수의 동일한 인스턴스를 반환하므로, 이 훅을 사용하면 불필요한 렌더링을 방지하고 성능을 최적화할 수 있습니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useMemo' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useMemo, useState } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      const expensiveComputation = useMemo(() => {
        return computeExpensiveValue(count);
      }, [count]);

      // ...

      return (
        <div>
          {/* ... */}
        </div>
      );
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useMemo'는 메모이제이션된 값을 반환하며, 이 값은 의존성 배열이 변경될 때까지 동일하게 유지됩니다.",
        isCorrect: true,
      },
      {
        text: "'useMemo'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useMemo'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useMemo'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useMemo'는 메모이제이션된 값을 반환하며, 이 값은 의존성 배열이 변경될 때까지 동일하게 유지됩니다.",
    explanation:
      "리액트의 'useMemo' 훅은 주어진 함수의 반환값을 메모이제이션하고, 이 값을 반환합니다. 이 훅은 생성 함수와 의존성 배열을 인자로 받습니다. 'useMemo'는 의존성 배열이 변경될 때까지 생성 함수의 반환값을 재사용하므로, 이 훅을 사용하면 불필요한 계산을 줄이고 성능을 최적화할 수 있습니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useRef' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useRef } from 'react';

    function TextInputWithFocusButton() {
      const inputEl = useRef(null);

      const onButtonClick = () => {
        // 'current' 속성은 'input' 요소를 가리킵니다.
        inputEl.current.focus();
      };

      return (
        <>
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>Focus the input</button>
        </>
      );
    }

    export default TextInputWithFocusButton;
    `,
    answerOptions: [
      {
        text: "'useRef'는 변경 가능한 ref 객체를 반환하며, 이 객체의 'current' 속성은 초기값으로 설정되고, 컴포넌트의 라이프사이클 동안 유지됩니다.",
        isCorrect: true,
      },
      {
        text: "'useRef'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useRef'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useRef'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useRef'는 변경 가능한 ref 객체를 반환하며, 이 객체의 'current' 속성은 초기값으로 설정되고, 컴포넌트의 라이프사이클 동안 유지됩니다.",
    explanation:
      "리액트의 'useRef' 훅은 변경 가능한 ref 객체를 반환합니다. 이 객체의 'current' 속성은 'useRef'의 인자로 전달된 초기값으로 설정되며, 컴포넌트의 라이프사이클 동안 유지됩니다. 'useRef'는 주로 DOM 요소에 접근하거나, 컴포넌트의 라이프사이클 동안 변하지 않아야 하는 값을 저장하는 데 사용됩니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useImperativeHandle' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useRef, useImperativeHandle, forwardRef } from 'react';

    function FancyInput(props, ref) {
      const inputRef = useRef();

      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));

      return <input ref={inputRef} />;
    }

    FancyInput = forwardRef(FancyInput);

    export default FancyInput;
    `,
    answerOptions: [
      {
        text: "'useImperativeHandle'는 부모 컴포넌트에게 제공할 인스턴스 값을 사용자 정의할 수 있게 합니다.",
        isCorrect: true,
      },
      {
        text: "'useImperativeHandle'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useImperativeHandle'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useImperativeHandle'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useImperativeHandle'는 부모 컴포넌트에게 제공할 인스턴스 값을 사용자 정의할 수 있게 합니다.",
    explanation:
      "리액트의 'useImperativeHandle' 훅은 부모 컴포넌트에서 ref를 사용하여 자식 컴포넌트에게 접근할 때 제공할 인스턴스 값을 사용자 정의할 수 있게 합니다. 이 훅은 ref와 생성 함수를 인자로 받으며, 생성 함수에서 반환하는 객체는 ref의 'current' 속성으로 설정됩니다. 주로 부모 컴포넌트에서 자식 컴포넌트의 인스턴스 메서드를 호출하는 경우에 사용됩니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useLayoutEffect' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useLayoutEffect, useRef } from 'react';

    function Example() {
      const ref = useRef();

      useLayoutEffect(() => {
        console.log(ref.current.getBoundingClientRect());
      }, []);

      return <div ref={ref}>Hello, world!</div>;
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useLayoutEffect'는 동기적으로 실행되며, DOM 업데이트가 화면에 그려지기 전에 발생합니다.",
        isCorrect: true,
      },
      {
        text: "'useLayoutEffect'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useLayoutEffect'는 비동기적으로 실행되며, DOM 업데이트가 화면에 그려진 후에 발생합니다.",
        isCorrect: false,
      },
      {
        text: "'useLayoutEffect'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useLayoutEffect'는 동기적으로 실행되며, DOM 업데이트가 화면에 그려지기 전에 발생합니다.",
    explanation:
      "리액트의 'useLayoutEffect' 훅은 'useEffect'와 비슷하지만, 'useLayoutEffect'는 동기적으로 실행됩니다. 이 훅은 DOM 업데이트가 화면에 그려지기 전에 발생하므로, 레이아웃 이펙트를 읽거나 동기적으로 업데이트하는 데 사용됩니다. 'useLayoutEffect' 내에서 발생하는 작업은 DOM 변경이 유저에게 보이기 전에 완료되어야 합니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useDebugValue' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import React, { useState, useDebugValue } from 'react';

    function useFriendStatus(friendID) {
      const [isOnline, setIsOnline] = useState(null);

      // Show a label in DevTools next to this Hook
      // e.g. "FriendStatus: Online"
      useDebugValue(isOnline ? 'Online' : 'Offline');

      return isOnline;
    }

    export default useFriendStatus;
    `,
    answerOptions: [
      {
        text: "'useDebugValue'는 개발자 도구에서 커스텀 훅의 레이블을 표시하는 데 사용됩니다.",
        isCorrect: true,
      },
      {
        text: "'useDebugValue'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useDebugValue'는 컴포넌트 렌더링 후에 어떤 효과를 발생시킬지 정의하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useDebugValue'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useDebugValue'는 개발자 도구에서 커스텀 훅의 레이블을 표시하는 데 사용됩니다.",
    explanation:
      "리액트의 'useDebugValue' 훅은 개발자 도구에서 커스텀 훅의 레이블을 표시하는 데 사용됩니다. 이 훅은 커스텀 훅 내부에서 사용되며, 커스텀 훅의 상태를 개발자 도구에 표시하는 데 도움이 됩니다. 'useDebugValue'에 전달된 값은 개발자 도구에 표시됩니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "리액트의 'useId' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useId } from 'react';

    function Example() {
      const componentId = useId();

      return <div id={componentId}>Hello, world!</div>;
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useId'는 구성 요소 내에서 안정적이고 서버와 클라이언트 간에 일관된 고유 ID를 생성하는 데 사용됩니다.",
        isCorrect: true,
      },
      {
        text: "'useId'는 컴포넌트의 상태를 관리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useId'는 비동기 작업을 처리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useId'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useId'는 구성 요소 내에서 안정적이고 서버와 클라이언트 간에 일관된 고유 ID를 생성하는 데 사용됩니다.",
    explanation:
      "리액트의 'useId' 훅은 구성 요소 내에서 안정적이고 서버와 클라이언트 간에 일관된 고유 ID를 생성하는 데 사용됩니다. SSR(Server-Side Rendering)에서 유용하게 사용됩니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useTransition' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useState, useTransition } from 'react';

    function Example() {
      const [isPending, startTransition] = useTransition();
      const [resource, setResource] = useState(null);

      const fetchResource = () => {
        startTransition(() => {
          const nextResource = fetchSomeResource(); // This is a hypothetical API call
          setResource(nextResource);
        });
      };

      return (
        <div>
          <button onClick={fetchResource}>Fetch</button>
          {isPending ? 'Loading...' : resource}
        </div>
      );
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useTransition'는 사용자 경험을 향상시키기 위해 우선 순위가 낮은 업데이트를 위한 상태를 관리하는 데 사용됩니다.",
        isCorrect: true,
      },
      {
        text: "'useTransition'는 구성 요소 내에서 안정적이고 서버와 클라이언트 간에 일관된 고유 ID를 생성하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useTransition'는 비동기 작업을 처리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useTransition'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useTransition'는 사용자 경험을 향상시키기 위해 우선 순위가 낮은 업데이트를 위한 상태를 관리하는 데 사용됩니다.",
    explanation:
      "리액트의 'useTransition' 훅은 사용자 경험을 향상시키기 위해 우선 순위가 낮은 업데이트를 위한 상태를 관리하는 데 사용됩니다. 이를 통해 리액트 컴포넌트가 렌더링을 '지연'시키고, 중요한 업데이트는 빠르게 처리할 수 있게 해줍니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useDeferredValue' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useState, useDeferredValue } from 'react';

    function Example() {
      const [text, setText] = useState('');
      const deferredText = useDeferredValue(text, { timeoutMs: 2000 });

      return (
        <div>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <p>{deferredText}</p>
        </div>
      );
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useDeferredValue'는 상태값의 변경을 지연시키는 데 사용됩니다.",
        isCorrect: true,
      },
      {
        text: "'useDeferredValue'는 구성 요소 내에서 안정적이고 서버와 클라이언트 간에 일관된 고유 ID를 생성하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useDeferredValue'는 비동기 작업을 처리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useDeferredValue'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer: "'useDeferredValue'는 상태값의 변경을 지연시키는 데 사용됩니다.",
    explanation:
      "리액트의 'useDeferredValue' 훅은 상태값의 변경을 지연시키는 데 사용됩니다. 이는 사용자 입력과 같은 우선 순위가 높은 작업을 더 빠르게 처리할 수 있게 해줍니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "리액트의 'useSyncExternalStore' 훅에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useSyncExternalStore } from 'react';

    const externalStore = {
      state: { value: 0 },
      subscribe(callback) {
        // Subscription logic here
      },
      getState() {
        return this.state;
      }
    };

    function Example() {
      const state = useSyncExternalStore(
        externalStore.subscribe,
        externalStore.getState
      );

      return <p>{state.value}</p>;
    }

    export default Example;
    `,
    answerOptions: [
      {
        text: "'useSyncExternalStore'는 리액트 외부의 저장소와 동기화를 유지하는 데 사용됩니다.",
        isCorrect: true,
      },
      {
        text: "'useSyncExternalStore'는 구성 요소 내에서 안정적이고 서버와 클라이언트 간에 일관된 고유 ID를 생성하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useSyncExternalStore'는 비동기 작업을 처리하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'useSyncExternalStore'는 클래스 컴포넌트에서만 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'useSyncExternalStore'는 리액트 외부의 저장소와 동기화를 유지하는 데 사용됩니다.",
    explanation:
      "리액트의 'useSyncExternalStore' 훅은 리액트 외부의 저장소와 동기화를 유지하는 데 사용됩니다. 이를 통해 리액트 컴포넌트가 외부 저장소의 상태를 안전하게 읽을 수 있습니다.",
    subject: "typescript",
    subSubject: "hooks",
    quizType: "coding",
  },
];
