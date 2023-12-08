// questions1.js
export const nestjsCodeController = [
  // 질문 데이터...

  // 자바스크립트 event
  // 자바스크립트 event
  {
    type: "fill-in-the-blank",
    questionText:
      "아래의 코드에서 빈칸에 들어갈 수 있는 NestJS의 데코레이터는 무엇일까요?",
    code: `
      class AppController {
        constructor(private readonly appService: AppService) {}

        ______
        getHome() {
          return 'Home Page';
        }
      }
    `,
    answerOptions: ["@Post()", "@Get()", "@Put()", "@Delete()"],
    answer: "@Get()",
    explanation:
      "이 경우, 'getHome' 메소드는 GET 요청을 처리하므로 '@Get()' 데코레이터를 사용합니다.",
    subject: "nestjs",
    subSubject: "controller",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS에서 'post' 경로의 GET 요청을 처리하려면 어떻게 해야 할까요?",
    code: `
      class AppController {
        constructor(private readonly appService: AppService) {}

        @Get(______)
        getPost() {
          return 'Post Page';
        }
      }
    `,
    answerOptions: ["'post'", "'/post'", "/post", "post"],
    answer: "'post'",
    explanation:
      "'@Get()' 데코레이터의 인자로 경로를 문자열 형태로 전달합니다. 이 경우, 'post' 경로의 GET 요청을 처리하므로 '@Get('post')'를 사용합니다.",
    subject: "nestjs",
    subSubject: "controller",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS와 TypeScript를 사용하여 HTTP GET 요청을 처리하는 메소드를 작성하려고 합니다. `/api/post` 경로에서, 특정 JSON을 반환해야 합니다. 아래의 코드 빈칸에 들어갈 내용은 무엇일까요?",
    code: `
    import { Controller, Get } from '@nestjs/common';

    interface Post {
      author: string;
      title: string;
      content: string;
      likeCount: number;
      commentCount: number;
    }

    @Controller(______)
    export class PostController {
      @Get()
      getPost(): Post {
        return {
          author: 'newjeans_offcial',
          title: '뉴진스 민지',
          content: '메이크업 고치고 있는 민지',
          likeCount: 1000000,
          commentCount: 999999,
        };
      }
    }
    `,
    answerOptions: ["'post'", "'/post'", "/post", "post"],
    answer: "'post'",
    explanation:
      "'@Controller()' 데코레이터의 인자로 경로를 문자열 형태로 전달합니다. 이 경우, 'post' 경로를 처리하므로 '@Controller('post')'를 사용합니다.",
    subject: "nestjs",
    subSubject: "controller",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "아래의 Nest.js 코드에서 빈칸에 들어갈 코드는 무엇일까요?",
    code: `
      @Get(':id')
      getPost(@Param('id') id: string) {
        return posts.find((post) => post.id === ______);
      }
    `,
    answerOptions: ["id", "+id", "-id", "id++"],
    answer: "+id",
    explanation:
      "'id' 앞에 '+'를 붙이는 이유는 JavaScript에서 '+' 연산자는 피연산자를 숫자로 변환하는 역할을 하기 때문입니다. '@Param('id') id'로 가져온 'id'는 문자열 타입입니다. 그러나 'post.id'는 숫자 타입이므로, 두 값을 비교하기 위해 문자열 'id'를 숫자로 변환해야 합니다. 이때 '+id'를 사용하면 'id' 문자열을 숫자로 변환할 수 있습니다.",
    subject: "nestjs",
    subSubject: "controller",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "Nest.js를 사용하여 특정 id를 가진 post를 가져오는 함수를 작성하려고 합니다. 이 때, HTTP 요청 메소드를 처리하는 데코레이터로서 빈칸에 적합한 코드는 무엇일까요?",
    code: `
      @______(':id')
      getPost(@Param('id') id: string) {
        return posts.find((post) => post.id === +id);
      }
    `,
    answerOptions: ["@Post()", "@Get()", "@Put()", "@Delete()"],
    answer: "@Get()",
    explanation:
      "특정 id를 가진 post를 가져오는 작업은 보통 HTTP GET 요청을 통해 이루어집니다. 따라서 '@Get()'이 적합한 코드입니다.",
    subject: "nestjs",
    subSubject: "controller",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "Nest.js를 사용하여 URL의 id 파라미터를 가져오는 함수를 작성하려고 합니다. 이 때, 빈칸에 적합한 코드는 무엇일까요?",
    code: `
      @Get(':id')
      getPost(______: string) {
        return posts.find((post) => post.id === +id);
      }
    `,
    answerOptions: ["@Body()", "@Param()", "@Query()", "@Headers()"],
    answer: "@Param('id')",
    explanation:
      "URL의 파라미터를 가져오는 작업은 '@Param()' 데코레이터를 통해 이루어집니다.",
    subject: "nestjs",
    subSubject: "controller",
    quizType: "coding",
  },
];
