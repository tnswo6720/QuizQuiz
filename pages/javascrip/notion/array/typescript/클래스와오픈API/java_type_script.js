// questions2.js
export const typescriptNotionClass = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "다음은 JavaScript 클래스 컴포넌트 내에서 이벤트 핸들러 함수가 제대로 작동하지 않는 문제에 대한 것입니다. 아래의 코드를 보고 질문에 답하십시오.\n\njavascript\nexport default class ClassCounterPage extends Component {\n  state = {\n    count: 0,\n  };\n\n  onClickCountUp() {\n    console.log(this.state.count);\n  }\n\n  render() {\n    return (\n      <>\n        <div>{this.state.count}</div>\n        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>\n      </>\n    );\n  }\n}\n\n버튼을 클릭했을 때 'this.state.count' 값이 콘솔에 정상적으로 출력되지 않는 이유는 무엇인가요?",
    code: "export default class ClassCounterPage extends Component {\n  state = {\n    count: 0,\n  };\n\n  onClickCountUp() {\n    console.log(this.state.count);\n  }\n\n  render() {\n    return (\n      <>\n        <div>{this.state.count}</div>\n        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>\n      </>\n    );\n  }\n}",
    answerOptions: [
      {
        text: "this.onClickCountUp 함수는 this 바인딩이 필요 없기 때문입니다.",
        isCorrect: false,
      },
      {
        text: "ClassCounterPage 컴포넌트의 state 객체에 count 속성이 정의되어 있지 않기 때문입니다.",
        isCorrect: false,
      },
      {
        text: "onClickCountUp 함수 내의 this가 ClassCounterPage의 인스턴스를 참조하지 않아서입니다.",
        isCorrect: true,
      },
      {
        text: "React 클래스 컴포넌트는 이벤트 핸들러를 지원하지 않기 때문입니다.",
        isCorrect: false,
      },
    ],
    answer:
      "onClickCountUp 함수 내의 this가 ClassCounterPage의 인스턴스를 참조하지 않아서입니다.",
    explanation:
      "React 클래스 컴포넌트의 메서드를 이벤트 핸들러로 사용할 때, 해당 메서드 내의 this는 기본적으로 해당 컴포넌트 인스턴스를 참조해야 합니다. 그러나 일반 함수로 메서드를 정의할 경우, 이벤트 핸들러로 전달될 때 this 바인딩이 자동으로 이루어지지 않습니다. 결과적으로, this는 undefined가 되며, this.state는 접근할 수 없게 되어 오류가 발생합니다. 이를 해결하기 위해 onClickCountUp 메서드를 화살표 함수로 정의하거나, 생성자 내에서 this.onClickCountUp = this.onClickCountUp.bind(this);를 사용하여 this를 바인딩해야 합니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "React 클래스 컴포넌트에서 이벤트 핸들러가 올바르게 작동하도록 하는 방법과 관련된 질문입니다. 아래의 코드를 보고 질문에 답하십시오.\n\njavascript\nexport default class ClassCounterPage extends Component {\n  state = {\n    count: 0,\n  };\n\n  onClickCountUp = () => {\n    console.log(this.state.count);\n  }\n\n  render() {\n    return (\n      <>\n        <div>{this.state.count}</div>\n        <button onClick={this.onClickCountUp}>카운트 올리기</button>\n      </>\n    );\n  }\n}\n\n위 코드에서 onClickCountUp 메서드를 화살표 함수로 정의했을 때, 이벤트 핸들러가 올바른 this 컨텍스트를 참조하는 이유는 무엇인가요?",
    code: "export default class ClassCounterPage extends Component {\n  state = {\n    count: 0,\n  };\n\n  onClickCountUp = () => {\n    console.log(this.state.count);\n  }\n\n  render() {\n    return (\n      <>\n        <div>{this.state.count}</div>\n        <button onClick={this.onClickCountUp}>카운트 올리기</button>\n      </>\n    );\n  }\n}",
    answerOptions: [
      {
        text: "화살표 함수는 자체적으로 this를 가지지 않아, 정의될 때의 this 컨텍스트를 상속받기 때문입니다.",
        isCorrect: true,
      },
      {
        text: "React는 모든 이벤트 핸들러에 대해 자동으로 this를 바인딩하기 때문입니다.",
        isCorrect: false,
      },
      {
        text: "화살표 함수는 항상 전역 객체 window를 this로 참조하기 때문입니다.",
        isCorrect: false,
      },
      {
        text: "이벤트 핸들러가 화살표 함수로 정의되면, React가 자동으로 this를 컴포넌트 인스턴스로 설정하기 때문입니다.",
        isCorrect: false,
      },
    ],
    answer:
      "화살표 함수는 자체적으로 this를 가지지 않아, 정의될 때의 this 컨텍스트를 상속받기 때문입니다.",
    explanation:
      "화살표 함수는 자신이 생성될 때의 this 컨텍스트를 '캡처'하여 사용합니다. 일반 함수와 달리, 화살표 함수는 별도의 this 바인딩을 가지지 않습니다. 따라서, 클래스 내부에서 화살표 함수를 사용하면, 함수는 클래스 인스턴스의 this를 참조하게 되어, onClickCountUp 메서드 내에서 this.state.count에 접근할 수 있습니다. 이는 메서드가 이벤트 핸들러로서 올바르게 동작하도록 합니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "React의 함수형 컴포넌트에서 사용된 `useEffect` 훅이 클래스 컴포넌트의 어떤 생명주기 메서드와 대응되는 기능을 제공하는지 아래 코드를 참고하여 선택하십시오.",
    code: `
      import { useEffect } from "react";
  
      export default function FunctionalCounterPage() {
        
        useEffect(() => {
          console.log("그려지고 나서 실행!!");
        }, []);
  
        
        useEffect(() => {
          console.log("변경되고 나서 실행!!");
        });
  
       
        useEffect(() => {
          return () => {
            console.log("사라지기 전에 실행!!");
          };
        }, []);
  
      
      }
    `,
    answerOptions: [
      {
        text: "`useEffect(() => {}, [])`는 `componentDidMount`와 대응됩니다.",
        isCorrect: true,
      },
      {
        text: "`useEffect(() => {})`는 `componentDidUpdate`와 대응됩니다.",
        isCorrect: true,
      },
      {
        text: "`useEffect(() => { return () => {} }, [])`는 `componentWillUnmount`와 대응됩니다.",
        isCorrect: true,
      },
      {
        text: "`useEffect(() => {}, [count])`는 `shouldComponentUpdate`와 대응됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "`useEffect(() => {}, [])`는 `componentDidMount`와 대응되고, `useEffect(() => {})`는 `componentDidUpdate`와 대응되며, `useEffect(() => { return () => {} }, [])`는 `componentWillUnmount`와 대응됩니다.",
    explanation:
      "React 함수형 컴포넌트에서 `useEffect` 훅은 클래스 컴포넌트의 생명주기 메서드와 유사한 기능을 제공합니다. 빈 의존성 배열 `[]`을 가진 `useEffect(() => {}, [])`는 컴포넌트가 마운트된 직후에 실행되어 `componentDidMount`에 해당합니다. 의존성 배열 없이 사용된 `useEffect(() => {})`는 컴포넌트가 업데이트될 때마다 실행되어 `componentDidUpdate`에 해당합니다. 클린업 함수를 반환하는 `useEffect(() => { return () => {} }, [])`는 컴포넌트가 언마운트되기 직전에 실행되는 클린업 로직을 제공하여 `componentWillUnmount`에 해당합니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "React의 함수형 컴포넌트에서 `useEffect` 훅을 사용하여 구현할 수 있는 클래스 컴포넌트의 생명주기 메서드와 가장 밀접하게 대응되는 기능은 무엇인가요?",
    code: `
      import { useState, useEffect } from "react";
    
      export default function FunctionalCounterPage() {
        const [count, setCount] = useState(0);
    
        
        useEffect(() => {
          console.log("변경되고 나서 실행!!");
        }, [count]);
    
       
      }
    `,
    answerOptions: [
      {
        text: "`useEffect` 훅의 의존성 배열에 상태 변수를 포함시킴으로써 `componentDidMount`와 같은 효과를 낼 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "의존성 배열이 비어 있는 `useEffect(() => {}, [])`는 `componentDidMount`와 동일합니다.",
        isCorrect: false,
      },
      {
        text: "의존성 배열에 특정 상태 변수를 포함한 `useEffect(() => {}, [count])`는 `componentDidUpdate`와 동일합니다.",
        isCorrect: true,
      },
      {
        text: "`useEffect` 훅 내부에서 반환된 클린업 함수는 `componentWillUnmount`와 같은 역할을 합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "의존성 배열에 특정 상태 변수를 포함한 `useEffect(() => {}, [count])`는 `componentDidUpdate`와 동일합니다.",
    explanation:
      "React 함수형 컴포넌트에서 `useEffect` 훅은 클래스 컴포넌트의 생명주기 메서드를 모방하는 방법을 제공합니다. 특정 상태가 변경될 때마다 실행되어야 하는 로직이 있다면, 해당 상태 변수를 `useEffect`의 의존성 배열에 포함시키면 됩니다. 이 경우, `useEffect(() => {}, [count])`는 `count` 상태가 변경될 때마다 실행되므로 클래스 컴포넌트의 `componentDidUpdate` 메서드와 유사한 효과를 낼 수 있습니다. 이는 컴포넌트가 업데이트된 후에 실행되어야 할 부수 효과(side effects)를 처리하는 데 사용됩니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "React의 함수형 컴포넌트에서 `useEffect` 훅을 사용하여 클래스 컴포넌트의 `componentDidMount` 메서드와 같은 효과를 내는 방법은 무엇인가요?",
    code: `
      import { useState, useEffect } from "react";
    
      export default function FunctionalCounterPage() {
        const [count, setCount] = useState(0);
    
        // componentDidMount와 동일
        useEffect(() => {
          console.log("컴포넌트가 마운트된 후 실행!!");
        }, []);
    
        // 기타 코드
      }
    `,
    answerOptions: [
      {
        text: "의존성 배열이 없는 `useEffect(() => {})`는 `componentDidMount`와 같은 역할을 합니다.",
        isCorrect: false,
      },
      {
        text: "의존성 배열이 비어 있는 `useEffect(() => {}, [])`는 `componentDidMount`와 동일합니다.",
        isCorrect: true,
      },
      {
        text: "`useEffect` 훅 내부에서 상태를 변경하는 `setCount()` 호출은 `componentDidMount`와 같은 역할을 합니다.",
        isCorrect: false,
      },
      {
        text: "`useEffect(() => {}, [count])`는 `componentDidMount`와 동일합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "의존성 배열이 비어 있는 `useEffect(() => {}, [])`는 `componentDidMount`와 동일합니다.",
    explanation:
      "React 함수형 컴포넌트에서 `useEffect` 훅은 클래스 컴포넌트의 생명주기 메서드를 모방하는 방법을 제공합니다. `useEffect` 훅을 사용할 때, 의존성 배열(dependency array)을 빈 배열로 제공하면 `useEffect(() => {}, [])`, 이는 컴포넌트가 마운트된 직후에 한 번만 실행되며, 그래서 클래스 컴포넌트의 `componentDidMount` 메서드와 동일한 역할을 합니다. 이는 네트워크 요청을 보내거나, 이벤트 리스너를 설정하는 등의 초기화 작업에 주로 사용됩니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 React 함수형 컴포넌트의 코드에서 잘못된 `useEffect` 사용 예시를 지적하고, 그 이유를 설명하십시오.",
    code: `
      import { useState, useEffect } from "react";
  
      export default function FunctionalCounterPage() {
        const [count, setCount] = useState(0);
  
       
        useEffect(() => {
          setCount((prev) => prev + 1);
        }, [count]);
  
      
      }
    `,
    answerOptions: [
      {
        text: "의존성 배열에 변화가 있을 때마다 상태를 변경하는 `useEffect`은 무한 루프를 발생시킬 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "`useEffect` 내부에서 상태를 변경하는 것은 항상 잘못된 사용법입니다.",
        isCorrect: false,
      },
      {
        text: "상태를 변경하는 로직은 `useEffect`가 아닌 이벤트 핸들러 내부에서만 처리되어야 합니다.",
        isCorrect: false,
      },
      {
        text: "`useEffect`는 오직 사이드 이펙트(side effects)를 처리하기 위해 사용되어야 하며, 상태 변경은 포함되지 않습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "의존성 배열에 변화가 있을 때마다 상태를 변경하는 `useEffect`은 무한 루프를 발생시킬 수 있습니다.",
    explanation:
      "해당 코드에서 `useEffect` 훅은 `count` 상태가 변경될 때마다 실행되도록 설정되어 있습니다. 그 안에서 `setCount`를 호출하여 상태를 업데이트하면, 이 상태 변경으로 인해 다시 `useEffect`가 호출되고, 이는 또 다시 상태를 변경하게 만듭니다. 이런 패턴은 무한 루프를 발생시키는 잘못된 사용법입니다. `useEffect`는 부수 효과를 처리하는 용도로 사용되며, 의존성 배열에 포함된 값에 의해서만 실행되어야 합니다. 상태 업데이트 로직은 사용자의 액션 또는 데이터 페칭과 같은 명시적인 사건에 의해 호출되어야 합니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 React 함수형 컴포넌트의 코드에서 부적절한 `useEffect` 사용으로 인해 발생하는 추가 렌더링 문제를 설명하십시오.",
    code: `
      import { useState, useEffect } from "react";
  
      export default function FunctionalCounterPage() {
        const [count, setCount] = useState(0);
  
        // 잘못된 사용법: 추가 렌더링 발생
        useEffect(() => {
          if (count < 5) {
            setCount(count + 1);
          }
        }, [count]);
  
        // 기타 코드
      }
    `,
    answerOptions: [
      {
        text: "상태 업데이트는 렌더링 사이클이 완료된 후에만 수행되어야 하며, `useEffect` 내에서 바로 상태를 업데이트하면 추가 렌더링을 발생시킬 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "`useEffect` 내부에서 상태를 변경하는 것은 항상 추가 렌더링을 유발합니다.",
        isCorrect: false,
      },
      {
        text: "`useEffect`는 컴포넌트가 렌더링 될 때마다 실행되어야 하며, 상태 변경도 포함됩니다.",
        isCorrect: false,
      },
      {
        text: "의존성 배열에 `count`가 포함되어 있기 때문에, `count`가 변경될 때마다 `useEffect`는 실행되지 않습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "상태 업데이트는 렌더링 사이클이 완료된 후에만 수행되어야 하며, `useEffect` 내에서 바로 상태를 업데이트하면 추가 렌더링을 발생시킬 수 있습니다.",
    explanation:
      "이 코드에서 `useEffect` 훅은 `count` 상태가 변경될 때마다 실행됩니다. `count` 값이 5 미만인 경우, `setCount` 함수를 통해 상태를 업데이트하고 있습니다. 상태 변경이 발생하면 컴포넌트는 다시 렌더링되고, 이는 `useEffect`가 다시 실행되는 결과를 초래합니다. 이러한 패턴은 특정 조건 하에서만 추가 렌더링을 발생시킬 수 있으며, 경우에 따라 불필요한 렌더링을 유발하여 성능 저하의 원인이 될 수 있습니다. 최적화를 위해서는 상태 업데이트가 반드시 필요한 경우에만 수행되어야 합니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "웹 보안에서 '동일 출처 정책(Same-Origin Policy, SOP)'을 위반하지 않으면서 다음(Daum) 프론트엔드가 네이버(Naver) 백엔드의 리소스에 안전하게 접근하기 위한 방법은 무엇입니까?",
    answerOptions: [
      {
        text: "다음(Daum) 백엔드 서버는 네이버(Naver) 백엔드 서버에 직접적으로 요청을 보내야 합니다.",
        isCorrect: false,
      },
      {
        text: "네이버(Naver) 백엔드 서버는 다음(Daum)의 요청을 받아들일 수 있도록 CORS 설정을 추가해야 합니다.",
        isCorrect: true,
      },
      {
        text: "다음(Daum) 프론트엔드는 CSRF 토큰을 사용하여 네이버(Naver) 백엔드에 요청을 보내야 합니다.",
        isCorrect: false,
      },
      {
        text: "다음(Daum) 프론트엔드와 네이버(Naver) 백엔드는 같은 도메인을 사용해야 합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "네이버(Naver) 백엔드 서버는 다음(Daum)의 요청을 받아들일 수 있도록 CORS 설정을 추가해야 합니다.",
    explanation:
      "웹 보안의 동일 출처 정책(Same-Origin Policy, SOP)은 한 출처에서 로드된 문서나 스크립트가 다른 출처의 리소스와 상호작용하는 것을 제한하는 중요한 보안 방침입니다. SOP를 우회하여 안전하게 교차 출처 리소스를 공유하려면 CORS(교차 출처 리소스 공유) 메커니즘을 사용해야 합니다. CORS는 서버가 특정 출처에서의 요청을 허용하도록 헤더를 설정하여 브라우저에 알려줍니다. 예를 들어, 네이버 백엔드 서버는 다음 브라우저에서 오는 요청을 허용하기 위해 적절한 `Access-Control-Allow-Origin` 헤더를 응답에 포함시켜야 합니다. CSRF(크로스 사이트 요청 위조)는 사용자의 의도하지 않은 요청을 보내는 공격을 막기 위한 토큰 기반의 보안 조치이며, 이 문제의 맥락과는 다릅니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "conceptual",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음(Daum) 백엔드와 네이버(Naver) 백엔드가 CSRF 공격을 방지하기 위해 취할 수 있는 조치는 무엇입니까? 아래의 옵션 중 올바른 것을 고르세요.",
    answerOptions: [
      {
        text: "사용자의 세션을 확인하는 쿠키만으로 충분하며, 추가적인 조치는 필요하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "CSRF 토큰을 활용하여 사용자의 요청이 정당한지 검증해야 합니다.",
        isCorrect: true,
      },
      {
        text: "모든 요청을 GET 메소드로만 처리하여 CSRF 공격의 위험을 줄여야 합니다.",
        isCorrect: false,
      },
      {
        text: "네트워크 상에서 모든 데이터 전송을 암호화하여 CSRF 공격을 방지할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer: "CSRF 토큰을 활용하여 사용자의 요청이 정당한지 검증해야 합니다.",
    explanation:
      "CSRF(Cross-Site Request Forgery) 공격은 악의적인 웹사이트가 사용자의 브라우저를 이용하여 다른 사이트에 자동화된 요청을 보내는 보안 취약점입니다. 이를 방지하기 위해 웹 애플리케이션은 CSRF 토큰이라는 서버에서 생성하고 검증할 수 있는 일회용 토큰을 사용합니다. 사용자가 양식을 제출할 때, 이 토큰을 함께 전송하고 서버 측에서는 요청이 정당한지 해당 토큰으로 검증합니다. 쿠키만으로는 충분하지 않으며, GET 메소드는 데이터를 변경하는 액션에 사용되어서는 안 됩니다. 암호화는 데이터의 안전한 전송을 보장하지만, CSRF 공격 자체를 방지하지는 않습니다.",
    subject: "typescript",
    subSubject: "class&OpenAPI",
    quizType: "conceptual",
  },
];
