// questions2.js
export const typescriptNotionClass = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "다음 코드를 보고 'uploadFile' 함수가 호출되는 시점에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useState, useRef } from "react";
    import { gql, useMutation } from "@apollo/client";

    const UPLOAD_FILE = gql\`
      mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
          url
        }
      }
    \`;

    export default function ImageUploadPage(): JSX.Element {
      const [imageUrl, setImageUrl] = useState("");
      const fileRef = useRef<HTMLInputElement>(null);

      const [uploadFile] = useMutation(UPLOAD_FILE);

      const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = event.target.files?.[0];
        const result = await uploadFile({ variables: { file } });
        setImageUrl(result.data?.uploadFile.url ?? "");
      };

      return (
        <>
          <input type="file" onChange={onChangeFile} ref={fileRef} style={{ display: "none" }}/>
          <img src={imageUrl} />
        </>
      );
    }
    `,
    answerOptions: [
      {
        text: "'uploadFile' 함수는 컴포넌트가 처음 렌더링될 때 호출됩니다.",
        isCorrect: false,
      },
      {
        text: "'uploadFile' 함수는 이미지를 클릭할 때 호출됩니다.",
        isCorrect: false,
      },
      {
        text: "'uploadFile' 함수는 파일 입력 필드에서 파일이 선택되었을 때 호출됩니다.",
        isCorrect: true,
      },
      {
        text: "'uploadFile' 함수는 상태 'imageUrl'가 업데이트 될 때마다 호출됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'uploadFile' 함수는 파일 입력 필드에서 파일이 선택되었을 때 호출됩니다.",
    explanation:
      "'uploadFile' 함수는 'onChangeFile' 함수 내에서 파일이 선택되었을 때 호출됩니다. 따라서 파일 입력 필드에서 파일이 선택되었을 때 'uploadFile' 함수가 호출되는 것이 맞습니다.",
    subject: "typescript",
    subSubject: "image upload",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드를 보고 'fileRef'에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useState, type ChangeEvent, useRef } from "react";
    import type {
      IMutation,
      IMutationUploadFileArgs,
    } from "../../../src/commons/types/generated/types";
    import { gql, useMutation } from "@apollo/client";

    const UPLOAD_FILE = gql\`
      mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
          url
        }
      }
    \`;

    export default function ImageUploadPage(): JSX.Element {
      const [imageUrl, setImageUrl] = useState("");
      const fileRef = useRef<HTMLInputElement>(null);

      const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
      >(UPLOAD_FILE);

      const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
      ): Promise<void> => {
        const file = event.target.files?.[0];
        console.log(file);

        const result = await uploadFile({ variables: { file } });
        console.log(result.data?.uploadFile.url);
        setImageUrl(result.data?.uploadFile.url ?? "");
      };

      const onClickImage = (): void => {
        fileRef.current?.click();
      };

      return (
        <>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
            onClick={onClickImage}
          />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
          />
          ;
          <img src={\`https://storage.googleapis.com/달러{imageUrl}\`} />
        </>
      );
    }
    `,
    answerOptions: [
      {
        text: "'fileRef'는 업로드할 이미지의 URL을 저장하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'fileRef'는 이미지 업로드 mutation의 결과를 저장하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "'fileRef'는 input 태그에 대한 참조를 저장하는 데 사용됩니다.",
        isCorrect: true,
      },
      {
        text: "'fileRef'는 이미지를 클릭할 때마다 호출되는 함수를 저장하는 데 사용됩니다.",
        isCorrect: false,
      },
    ],
    answer: "'fileRef'는 input 태그에 대한 참조를 저장하는 데 사용됩니다.",
    explanation:
      "'fileRef'는 useRef 훅을 사용하여 생성된 참조 값이며, 이는 input 태그에 연결되어 있습니다. 이 참조를 통해 'onClickImage' 함수에서 input 태그의 'click' 메서드를 호출하고 있습니다. 이를 통해 사용자가 div를 클릭하면 숨겨진 input 태그의 파일 선택 창이 열리게 됩니다.",
    subject: "typescript",
    subSubject: "image upload",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드에서 'onChangeFile' 함수의 역할에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useState, type ChangeEvent, useRef } from "react";
    import type {
      IMutation,
      IMutationUploadFileArgs,
    } from "../../../src/commons/types/generated/types";
    import { gql, useMutation } from "@apollo/client";

    const UPLOAD_FILE = gql\`
      mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
          url
        }
      }
    \`;

    export default function ImageUploadPage(): JSX.Element {
      const [imageUrl, setImageUrl] = useState("");
      const fileRef = useRef<HTMLInputElement>(null);

      const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
      >(UPLOAD_FILE);

      const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
      ): Promise<void> => {
        const file = event.target.files?.[0];
        console.log(file);

        const result = await uploadFile({ variables: { file } });
        console.log(result.data?.uploadFile.url);
        setImageUrl(result.data?.uploadFile.url ?? "");
      };

      const onClickImage = (): void => {
        fileRef.current?.click();
      };

      return (
        <>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
            onClick={onClickImage}
          />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
          />
          ;
          <img src={\`https://storage.googleapis.com/달러{imageUrl}\`} />
        </>
      );
    }
    `,
    answerOptions: [
      {
        text: "'onChangeFile' 함수는 이미지를 클릭할 때 호출됩니다.",
        isCorrect: false,
      },
      {
        text: "'onChangeFile' 함수는 파일을 선택하면 호출되어, 파일을 업로드하고, 업로드된 파일의 URL을 저장합니다.",
        isCorrect: true,
      },
      {
        text: "'onChangeFile' 함수는 파일 업로드 mutation을 실행하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "'onChangeFile' 함수는 'fileRef'를 업데이트하는 데 사용됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'onChangeFile' 함수는 파일을 선택하면 호출되어, 파일을 업로드하고, 업로드된 파일의 URL을 저장합니다.",
    explanation:
      "'onChangeFile' 함수는 input 태그에서 파일이 선택되면 호출됩니다. 이 함수 내에서는 선택된 파일을 'uploadFile' mutation에 전달하여 파일을 업로드하고, 업로드된 파일의 URL을 받아 'imageUrl' 상태를 업데이트합니다.",
    subject: "typescript",
    subSubject: "image upload",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드에서 'onChangeFile' 함수의 역할에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useState, type ChangeEvent, useRef } from "react";
    import type {
      IMutation,
      IMutationUploadFileArgs,
    } from "../../../src/commons/types/generated/types";
    import { gql, useMutation } from "@apollo/client";

    const UPLOAD_FILE = gql\`
      mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
          url
        }
      }
    \`;

    export default function ImageUploadPage(): JSX.Element {
      const [imageUrl, setImageUrl] = useState("");
      const fileRef = useRef<HTMLInputElement>(null);

      const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
      >(UPLOAD_FILE);

      const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
      ): Promise<void> => {
        const file = event.target.files?.[0];
        console.log(file);

        const result = await uploadFile({ variables: { file } });
        console.log(result.data?.uploadFile.url);
        setImageUrl(result.data?.uploadFile.url ?? "");
      };

      const onClickImage = (): void => {
        fileRef.current?.click();
      };

      return (
        <>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
            onClick={onClickImage}
          />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
          />
          ;
          <img src={\`https://storage.googleapis.com/달러{imageUrl}\`} />
        </>
      );
    }
    `,
    answerOptions: [
      {
        text: "'onChangeFile' 함수는 이미지를 클릭할 때 호출됩니다.",
        isCorrect: false,
      },
      {
        text: "'onChangeFile' 함수는 파일을 선택하면 호출되어, 파일을 업로드하고, 업로드된 파일의 URL을 저장합니다.",
        isCorrect: true,
      },
      {
        text: "'onChangeFile' 함수는 파일 업로드 mutation을 실행하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "'onChangeFile' 함수는 'fileRef'를 업데이트하는 데 사용됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'onChangeFile' 함수는 파일을 선택하면 호출되어, 파일을 업로드하고, 업로드된 파일의 URL을 저장합니다.",
    explanation:
      "'onChangeFile' 함수는 input 태그에서 파일이 선택되면 호출됩니다. 이 함수 내에서는 선택된 파일을 'uploadFile' mutation에 전달하여 파일을 업로드하고, 업로드된 파일의 URL을 받아 'imageUrl' 상태를 업데이트합니다.",
    subject: "typescript",
    subSubject: "image upload",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드에서 사용자가 이미지를 클릭하여 이미지를 선택하고 화면에 표시되는 과정에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { useState, type ChangeEvent, useRef } from "react";
    import type {
      IMutation,
      IMutationUploadFileArgs,
    } from "../../../src/commons/types/generated/types";
    import { gql, useMutation } from "@apollo/client";

    const UPLOAD_FILE = gql\`
      mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
          url
        }
      }
    \`;

    export default function ImageUploadPage(): JSX.Element {
      const [imageUrl, setImageUrl] = useState("");
      const fileRef = useRef<HTMLInputElement>(null);

      const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
      >(UPLOAD_FILE);

      const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
      ): Promise<void> => {
        const file = event.target.files?.[0];
        console.log(file);

        const result = await uploadFile({ variables: { file } });
        console.log(result.data?.uploadFile.url);
        setImageUrl(result.data?.uploadFile.url ?? "");
      };

      const onClickImage = (): void => {
        fileRef.current?.click();
      };

      return (
        <>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
            onClick={onClickImage}
          />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
          />
          ;
          <img src={\`https://storage.googleapis.com/\${imageUrl}\`} />
        </>
      );
    }
    `,
    answerOptions: [
      {
        text: "사용자가 이미지를 클릭하면 'onClickImage' 함수가 호출되고, 이 함수는 'fileRef'의 'click' 이벤트를 트리거합니다. 이후 'onChangeFile' 함수가 호출되어 이미지 파일이 업로드되고, 업로드된 이미지 URL은 'imageUrl' 상태에 저장됩니다. 마지막으로 'imageUrl'값이 변경되면 화면에 표시되는 이미지의 URL이 업데이트됩니다.",
        isCorrect: true,
      },
      {
        text: "'onClickImage' 함수는 사용자가 이미지를 클릭하면 'fileRef'의 'click' 이벤트를 트리거합니다. 그러나 이 함수는 이미지를 서버에 업로드하는 역할을 수행하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "'onChangeFile' 함수는 사용자의 파일 선택 이벤트를 처리합니다. 이 함수는 선택된 파일을 'uploadFile' mutation에 전달하여 서버에 업로드하지만, 업로드된 이미지의 URL은 'imageUrl' 상태에 저장하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "사용자가 이미지를 클릭하면 'onChangeFile' 함수가 호출됩니다. 이 함수는 선택한 이미지를 업로드하고, 업로드된 이미지의 URL을 'imageUrl' 상태에 저장하여 화면에 표시합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "사용자가 이미지를 클릭하면 'onClickImage' 함수가 호출되고, 이 함수는 'fileRef'의 'click' 이벤트를 트리거합니다. 이후 'onChangeFile' 함수가 호출되어 이미지 파일이 업로드되고, 업로드된 이미지 URL은 'imageUrl' 상태에 저장됩니다. 마지막으로 'imageUrl'값이 변경되면 화면에 표시되는 이미지의 URL이 업데이트됩니다.",
    explanation:
      "이 코드는 사용자가 이미지를 클릭하여 파일 선택창을 열고, 선택된 이미지를 업로드한 후, 업로드된 이미지의 URL을 사용하여 화면에 이미지를 표시하는 과정을 구현하고 있습니다. 'onClickImage' 함수는 'fileRef'의 'click' 이벤트를 트리거하여 파일 선택창을 엽니다. 'onChangeFile' 함수는 선택된 파일이 있을 경우 'uploadFile' mutation을 실행하여 이미지를 업로드하고, 업로드된 이미지의 URL을 'imageUrl' 상태에 저장합니다. 'imageUrl' 상태가 변경되면 'img' 태그의 'src' 속성이 업데이트되어 화면에 새 이미지가 표시됩니다.",
    subject: "typescript",
    subSubject: "image upload",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드에서 사용자가 '이미지선택'을 클릭하여 이미지를 선택하게 되는 과정에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    import { gql, useMutation } from "@apollo/client";
    import { useState, type ChangeEvent, useRef } from "react";
    import type {
      IMutation,
      IMutationUploadFileArgs,
    } from "../../../src/commons/types/generated/types";

    const UPLOAD_FILE = gql\`
      mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
          url
        }
      }
    \`;

    export default function ImageUploadPage(): JSX.Element {
      const [imageUrl, setImageUrl] = useState("");
      const fileRef = useRef<HTMLInputElement>(null);

      const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
      >(UPLOAD_FILE);

      const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
      ): Promise<void> => {
        const file = event.target.files?.[0];
        console.log(file);

        const result = await uploadFile({ variables: { file } });
        console.log(result.data?.uploadFile.url);
        setImageUrl(result.data?.uploadFile.url ?? "");
      };

      const onClickImage = (): void => {
        fileRef.current?.click();
      };

      return (
        <>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
            onClick={onClickImage}
          >
            이미지선택
          </div>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
          />
          {/* <img src={\`https://storage.googleapis.com/\${imageUrl}\`} /> */}
        </>
      );
    }
    `,
    answerOptions: [
      {
        text: "'이미지선택'을 클릭하면 'onClickImage' 함수가 호출되고, 이 함수는 'fileRef'의 'click' 이벤트를 트리거합니다. 이후 'onChangeFile' 함수가 호출되어 이미지 파일이 업로드되고, 업로드된 이미지 URL은 'imageUrl' 상태에 저장됩니다.",
        isCorrect: true,
      },
      {
        text: "'onClickImage' 함수는 '이미지선택'을 클릭하면 'fileRef'의 'click' 이벤트를 트리거합니다. 그러나 이 함수는 이미지를 서버에 업로드하는 역할을 수행하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "'onChangeFile' 함수는 '이미지선택' 클릭 이벤트를 처리합니다. 이 함수는 클릭된 이미지를 'uploadFile' mutation에 전달하여 서버에 업로드하지만, 업로드된 이미지의 URL은 'imageUrl' 상태에 저장하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "'이미지선택'을 클릭하면 'onChangeFile' 함수가 호출됩니다. 이 함수는 선택한 이미지를 업로드하고, 업로드된 이미지의 URL을 'imageUrl' 상태에 저장하여 화면에 표시합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'이미지선택'을 클릭하면 'onClickImage' 함수가 호출되고, 이 함수는 'fileRef'의 'click' 이벤트를 트리거합니다. 이후 'onChangeFile' 함수가 호출되어 이미지 파일이 업로드되고, 업로드된 이미지 URL은 'imageUrl' 상태에 저장됩니다.",
    explanation:
      "이 코드는 사용자가 '이미지선택'을 클릭하여 파일 선택창을 열고, 선택된 이미지를 업로드한 후, 업로드된 이미지의 URL을 사용하여 화면에 이미지를 표시하는 과정을 구현하고 있습니다. 'onClickImage' 함수는 'fileRef'의 'click' 이벤트를 트리거하여 파일 선택창을 엽니다. 'onChangeFile' 함수는 선택된 파일이 있을 경우 'uploadFile' mutation을 실행하여 이미지를 업로드하고, 업로드된 이미지의 URL을 'imageUrl' 상태에 저장합니다. 'imageUrl' 상태가 변경되면 'img' 태그의 'src' 속성이 업데이트되어 화면에 새 이미지가 표시됩니다.",
    subject: "typescript",
    subSubject: "image upload",
    quizType: "coding",
  },
];
