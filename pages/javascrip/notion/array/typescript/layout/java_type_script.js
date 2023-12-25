// questions2.js
export const typescriptNotionLayout = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서, 특정 페이지에서 헤더를 숨기기 위해 사용된 메소드는 무엇인가요?",
    code: `
      import { useRouter } from "next/router";
      import LayoutBanner from "./banner";
      import LayoutFooter from "./footer";
      import LayoutHeader from "./header";
      import LayoutNavigation from "./navigation";
  
      const HIDDEN_HEADERS = [
        "/section13/13-01-library-icon",
        "/section13/13-02-library-star",
      ];
  
      interface ILayoutProps {
        children: JSX.Element;
      }
  
      export default function Layout(props: ILayoutProps): JSX.Element {
        const router = useRouter();
        console.log("============");
        console.log(router.asPath);
        console.log("=============");
  
        const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  
        return (
          <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{ height: "500px", display: "flex" }}>
              <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
              <div style={{ width: "79%" }}>{props.children}</div>
            </div>
            <LayoutFooter />
          </>
        );
      }
    `,
    answerOptions: [
      {
        text: "router.asPath",
        isCorrect: false,
      },
      {
        text: "HIDDEN_HEADERS.includes",
        isCorrect: true,
      },
      {
        text: "router.useRouter",
        isCorrect: false,
      },
      {
        text: "props.children",
        isCorrect: false,
      },
    ],
    answer: "HIDDEN_HEADERS.includes",
    explanation:
      "HIDDEN_HEADERS.includes 메소드를 사용하여 현재 페이지의 경로(router.asPath)가 HIDDEN_HEADERS 배열에 포함되어 있는지 확인합니다. 만약 포함되어 있다면, 해당 페이지에서 헤더를 숨깁니다.",
    subject: "typescript",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 코드에서 레이아웃의 메인 콘텐츠 영역을 구성하는 코드는 무엇인가요?",
    code: `
      import { useRouter } from "next/router";
      import LayoutBanner from "./banner";
      import LayoutFooter from "./footer";
      import LayoutHeader from "./header";
      import LayoutNavigation from "./navigation";
  
      const HIDDEN_HEADERS = [
        "/section13/13-01-library-icon",
        "/section13/13-02-library-star",
      ];
  
      interface ILayoutProps {
        children: JSX.Element;
      }
  
      export default function Layout(props: ILayoutProps): JSX.Element {
        const router = useRouter();
  
        const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  
        return (
          <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{ height: "500px", display: "flex" }}>
              <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
              <div style={{ width: "79%" }}>______</div>
            </div>
            <LayoutFooter />
          </>
        );
      }
    `,
    answerOptions: [
      {
        text: "props.children",
        isCorrect: true,
      },
      {
        text: "LayoutNavigation",
        isCorrect: false,
      },
      {
        text: "LayoutFooter",
        isCorrect: false,
      },
      {
        text: "LayoutHeader",
        isCorrect: false,
      },
    ],
    answer: "props.children",
    explanation:
      "props.children은 React에서 컴포넌트의 '자식' 요소들을 나타냅니다. 이 경우에는 레이아웃의 메인 콘텐츠 영역을 구성하는 요소들이 됩니다.",
    subject: "typescript",
    subSubject: "layout",
    quizType: "coding",
  },
];
