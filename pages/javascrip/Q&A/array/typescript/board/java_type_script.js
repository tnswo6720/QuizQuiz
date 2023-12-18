// questions2.js
export const typescriptNotionBoard = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "BoardWrite 컴포넌트의 isEdit 속성이 false로 설정되었을 때, 이 컴포넌트는 어떠한 동작을 수행하게 됩니까?",
    code: `
    export default function GraphqlMutationPage() {
      return (
        <div>
          <div>########여기는 페이지입니다</div>
          <BoardWrite isEdit={false} />
          <div>########여기는 페이지입니다</div>
        </div>
      );
    }
    `,
    answerOptions: [
      {
        text: "게시글 작성",
        isCorrect: true,
      },
      {
        text: "게시글 수정",
        isCorrect: false,
      },
      {
        text: "게시글 삭제",
        isCorrect: false,
      },
      {
        text: "게시글 조회",
        isCorrect: false,
      },
    ],
    answer: "게시글 작성",
    explanation:
      "'isEdit' prop이 'false'로 설정될 때 'BoardWrite' 컴포넌트는 게시글 작성 모드가 됩니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "onClickUpdate 함수가 호출될 때, 이 함수는 어떠한 동작을 수행하게 됩니까?",
    code: `
    const onClickUpdate = async () => {
      const result = await updateBoard({
        variables: {
          number: Number(router.query.number),
          writer: writer,
          title: title,
          contents: contents,
        },
      });
  
      router.push('/section09/09-03-boards/+{result.data.updateBoard.number}');
    };
    `,
    answerOptions: [
      {
        text: "게시글 작성 후 해당 게시글로 이동",
        isCorrect: false,
      },
      {
        text: "게시글 수정 후 해당 게시글로 이동",
        isCorrect: true,
      },
      {
        text: "게시글 삭제 후 메인 페이지로 이동",
        isCorrect: false,
      },
      {
        text: "게시글 조회 후 해당 게시글로 이동",
        isCorrect: false,
      },
    ],
    answer: "게시글 수정 후 해당 게시글로 이동",
    explanation:
      "'onClickUpdate' 함수는 게시글을 수정하고, 수정된 게시글의 페이지로 이동하는 동작을 수행합니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "BlueButton 컴포넌트가 클릭되었을 때, isEdit 속성이 true로 설정되어 있으면 어떤 함수가 호출되나요?",
    code: `
    <BlueButton
      onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
    >
      {props.isEdit ? "수정" : "등록"} 하기
    </BlueButton>
    `,
    answerOptions: [
      {
        text: "onClickUpdate",
        isCorrect: true,
      },
      {
        text: "onClickSubmit",
        isCorrect: false,
      },
      {
        text: "onChangeWriter",
        isCorrect: false,
      },
      {
        text: "onChangeTitle",
        isCorrect: false,
      },
    ],
    answer: "onClickUpdate",
    explanation:
      "'isEdit' 속성이 'true'일 때 'onClickUpdate' 함수가 호출됩니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "onClickSubmit 함수가 호출되었을 때, 이 함수는 어떠한 동작을 수행하게 됩니까?",
    code: `
    const onClickSubmit = async () => {
      const result = await 나의함수({
        variables: {
          writer: writer,
          title: title,
          contents: contents,
        },
      });
      console.log(result);
      router.push('/section09/09-03-boards/+{result.data.createBoard.number}');
    };
    `,
    answerOptions: [
      {
        text: "게시글 작성 후 해당 게시글로 이동",
        isCorrect: true,
      },
      {
        text: "게시글 수정 후 해당 게시글로 이동",
        isCorrect: false,
      },
      {
        text: "게시글 삭제 후 메인 페이지로 이동",
        isCorrect: false,
      },
      {
        text: "게시글 조회 후 해당 게시글로 이동",
        isCorrect: false,
      },
    ],
    answer: "게시글 작성 후 해당 게시글로 이동",
    explanation:
      "'onClickSubmit' 함수는 게시글을 작성하고, 작성된 게시글의 페이지로 이동하는 동작을 수행합니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "onClickMove 함수가 호출될 때, 이 함수는 어떠한 동작을 수행하게 됩니까?",
    code: `
    const onClickMove = () => {
      router.push('/section09/09-03-boards/+{router.query.number}/edit');
    };
    `,
    answerOptions: [
      {
        text: "게시글 작성 페이지로 이동",
        isCorrect: false,
      },
      {
        text: "게시글 수정 페이지로 이동",
        isCorrect: true,
      },
      {
        text: "게시글 삭제 페이지로 이동",
        isCorrect: false,
      },
      {
        text: "게시글 조회 페이지로 이동",
        isCorrect: false,
      },
    ],
    answer: "게시글 수정 페이지로 이동",
    explanation:
      "'onClickMove' 함수는 게시글 수정 페이지로 이동하는 동작을 수행합니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "isEdit 속성이 true로 설정되었을 때, 어떤 동작을 수행하게 됩니까?",
    code: `
    export default function GraphqlMutationPage() {
      return (
        <div>
          <div>########여기는 페이지입니다</div>
          <BoardWrite isEdit={true} />
          <div>########여기는 페이지입니다</div>
        </div>
      );
    }
    `,
    answerOptions: [
      {
        text: "게시글 작성",
        isCorrect: false,
      },
      {
        text: "게시글 수정",
        isCorrect: true,
      },
      {
        text: "게시글 삭제",
        isCorrect: false,
      },
      {
        text: "게시글 조회",
        isCorrect: false,
      },
    ],
    answer: "게시글 수정",
    explanation:
      "'isEdit' 속성이 'true'로 설정될 때, 'BoardWrite' 컴포넌트는 게시글 수정 모드가 됩니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "onChangeWriter 함수는 어떤 동작을 수행하게 됩니까?",
    code: `
    const onChangeWriter = (event) => {
      setWriter(event.target.value);
    };
    `,
    answerOptions: [
      {
        text: "게시글 작성자 정보를 업데이트",
        isCorrect: true,
      },
      {
        text: "게시글 제목을 업데이트",
        isCorrect: false,
      },
      {
        text: "게시글 내용을 업데이트",
        isCorrect: false,
      },
      {
        text: "게시글 번호를 업데이트",
        isCorrect: false,
      },
    ],
    answer: "게시글 작성자 정보를 업데이트",
    explanation:
      "'onChangeWriter' 함수는 사용자의 입력을 받아 게시글 작성자 정보를 업데이트하는 동작을 수행합니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "onClickUpdate 함수에서 if문이 사용된 이유는 무엇일까요?",
    code: `
    const onClickUpdate = async () => {
      const myvariables = {
        number: Number(router.query.number),
      };
  
      if (writer) {
        myvariables.writer = writer;
      }
  
      if (title) {
        myvariables.title = title;
      }
  
      if (contents) {
        myvariables.contents = contents;
      }
  
      const result = await updateBoard({
        variables: myvariables,
      });
  
      router.push(\`/section09/09-04-boards/\${result.data.updateBoard.number}\`);
    };
    `,
    answerOptions: [
      {
        text: "모든 필드를 반드시 업데이트 하기 위해서",
        isCorrect: false,
      },
      {
        text: "필드가 비어있는 경우, 기존의 값을 유지하기 위해서",
        isCorrect: true,
      },
      {
        text: "오류를 방지하기 위해서",
        isCorrect: false,
      },
      {
        text: "특별한 이유는 없다",
        isCorrect: false,
      },
    ],
    answer: "필드가 비어있는 경우, 기존의 값을 유지하기 위해서",
    explanation:
      "onClickUpdate 함수에서 if문은 입력값이 있을 경우에만 해당 필드를 업데이트하는 역할을 합니다. 즉, 사용자가 특정 필드를 비워두었다면, 그 필드의 값은 업데이트되지 않고 기존의 값이 유지됩니다. 이렇게 함으로써, 사용자가 일부 필드만 수정하고 싶을 때 다른 필드의 값이 임의로 변경되는 것을 방지할 수 있습니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "defaultValue 프로퍼티를 사용하여 input 필드의 초기 값을 설정할 때, 어떤 데이터를 사용하고 있나요?",
    code: `
    작성자:
    <RedInput
      type="text"
      onChange={props.onChangeWriter}
      defaultValue={props.data?.fetchBoard.writer}
    />
    `,
    answerOptions: [
      {
        text: "props.data.writer",
        isCorrect: false,
      },
      {
        text: "props.data.fetchBoard.writer",
        isCorrect: true,
      },
      {
        text: "props.fetchBoard.writer",
        isCorrect: false,
      },
      {
        text: "props.writer",
        isCorrect: false,
      },
    ],
    answer: "props.data.fetchBoard.writer",
    explanation:
      "defaultValue 프로퍼티를 사용하여 input 필드의 초기 값을 설정할 때, props.data?.fetchBoard.writer 데이터를 사용하고 있습니다. 여기서 ?. 연산자는 Optional Chaining 연산자로, props.data가 null 또는 undefined인 경우 에러를 발생시키지 않고 undefined를 반환합니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
];
