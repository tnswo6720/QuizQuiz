// questions1.js
export const nestjsCodeQueryParameter = [
  // 질문 데이터...

  // 자바스크립트 event
  // 자바스크립트 event
  {
    type: "fill-in-the-blank",
    questionText:
      "Nest.js에서 특정 id를 가진 post를 가져오는 코드를 작성하려고 합니다. 만약 해당 id를 가진 post가 존재하지 않을 때, NotFoundException을 발생시키려면 어떻게 해야 할까요?",
    code: `
      @Get(':id')
      getPost(@Param('id') id: string) {
        const post = posts.find((post) => post.id === +id);
        if (______) { 
          throw new NotFoundException();
        }
        return post;
      }
    `,
    answerOptions: [
      "!post",
      "post === undefined",
      "post === null",
      "post === ''",
    ],
    answer: "!post",
    explanation:
      "JavaScript에서는 null, undefined, NaN, 빈 문자열(''), 0, -0, false 등을 'falsy' 값이라고 합니다. 이런 값들은 불린 연산자를 통해 false로 취급됩니다. 따라서 만약 'post'가 undefined(즉, 찾지 못했다면), '!post'는 true가 되어 이 if문이 실행됩니다.",
    subject: "nestjs",
    subSubject: "query-parameter",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "Nest.js에서 HTTP 요청 본문(body)에서 'author', 'title', 'content'라는 키를 가진 데이터를 각각 `author`, `title`, `content`라는 파라미터에 할당하는 코드를 작성하려고 합니다. 이를 수행하는 코드를 작성하려면 빈 칸에 어떤 것을 입력해야 할까요?",
    code: `
      @Post()
      postPosts(
        @(_____)('author') author: string,
        @(_____)('title') title: string,
        @(_____)('content') content: string,
      ) {
        const post: PostModel = {
          id: posts[posts.length - 1].id + 1,
          author,
          title,
          content,
          likeCount: 0,
          commentCount: 0,
        };

        posts = [...posts, post];
        return post;
      }
    `,
    answerOptions: ["@Request()", "@Body()", "@Param()", "@Query()"],
    answer: "@Body()",
    explanation:
      "Nest.js에서 @Body() 데코레이터는 HTTP 요청 본문에서 특정 속성을 가져오는 역할을 합니다. 이를 통해 클라이언트가 보낸 데이터를 쉽게 추출하여 사용할 수 있습니다. 따라서 'author', 'title', 'content'라는 키를 가진 데이터를 각각 `author`, `title`, `content` 파라미터에 할당하기 위해서는 @Body() 데코레이터를 사용해야 합니다.",
    subject: "nestjs",
    subSubject: "query-parameter",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "@Put 데코레이터와 관련된 설명 중 옳은 것을 찾아서 해당 빈칸을 채워주세요.",
    code: `
      @Put(':id')
      putPost(
        @Param('id') id: string,
        @(_____)('author') author?: string,
        @(_____)('title') title?: string,
        @(_____)('content') content?: string,
      ) {
        const post = posts.find((post) => post.id === +id);
    
        if (!post) {
          throw new NotFoundException();
        }
    
        if (author) {
          post.author = author;
        }
    
        if (title) {
          post.title = title;
        }
    
        if (content) {
          post.content = content;
        }
    
        posts = posts.map((prevPost) => (prevPost.id === +id ? post : prevPost));
    
        return post;
      }
    `,
    answerOptions: ["@Request()", "@Body()", "@Param()", "@Query()"],
    answer: "@Body()",
    explanation:
      "@Body() 데코레이터는 요청 본문에서 특정 프로퍼티를 가져오는데 사용됩니다. 이를 통해 클라이언트가 보낸 데이터를 서버에서 사용할 수 있습니다.",
    subject: "nestjs",
    subSubject: "query-parameter",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "Nest.js에서 `GET /posts` 라우트를 구현하는 코드를 작성하려고 합니다. 모든 포스트를 반환하는 코드를 작성해 보세요.",
    code: `
      @Get()
      getPosts() {
        return ______; 
      }
    `,
    answerOptions: [
      "posts",
      "this.postsService.findAll()",
      "this.postsService.getPosts()",
      "this.postsService.getPosts().findAll()",
    ],
    answer: "posts",
    explanation:
      "이 경우, 모든 포스트를 반환하는 코드는 'return posts;' 입니다. 'posts'는 위에서 선언한 배열로, 모든 포스트 데이터를 가지고 있습니다. 따라서 'return posts;'를 통해 모든 포스트를 반환할 수 있습니다.",
    subject: "nestjs",
    subSubject: "query-parameter",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "Nest.js에서 `GET /posts` 라우트를 구현하는 데코레이터를 작성해 보세요.",
    code: `
      ______
      getPosts() {
        return posts;
      }
    `,
    answerOptions: ["@Get()", "@Post()", "@Put()", "@Delete()"],
    answer: "@Get()",
    explanation:
      "`@Get()` 데코레이터는 Nest.js에서 HTTP GET 요청을 처리하는 데 사용됩니다. 따라서 `GET /posts` 라우트를 구현하려면 `@Get()` 데코레이터를 사용해야 합니다.",
    subject: "nestjs",
    subSubject: "query-parameter",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS에서 HTTP GET 요청의 쿼리 파라미터를 가져오기 위해 컨트롤러 메서드에 어떤 데코레이터를 사용해야 하나요? 그리고, 'search'라는 쿼리 파라미터의 값을 얻으려면 어떻게 해야 할까요?",
    code: `
      import { Controller, Get, Query } from '@nestjs/common';
  
      @Controller('items')
      export class ItemsController {
        @Get()
        findAll(@_____('search') searchQuery: string): string {
          return \`Searching for items with query: \${searchQuery}\`;
        }
      }
    `,
    answerOptions: [["QueryParam"], ["Query"], ["GetQuery"], ["RequestQuery"]],
    answer: ["Query"],
    explanation:
      "NestJS에서 특정 HTTP 요청의 쿼리 파라미터를 가져오기 위해 `@Query()` 데코레이터를 사용합니다. 이 데코레이터는 컨트롤러의 핸들러 메서드 인자에 적용되며, 인자로 전달된 특정 쿼리 파라미터의 값을 가져옵니다. 예를 들어, `@Query('search')`는 요청의 쿼리 스트링에서 'search' 파라미터의 값을 `searchQuery`라는 메서드 파라미터로 바인딩합니다.",
    subject: "nestjs",
    subSubject: "query-parameter",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS에서 여러 쿼리 파라미터를 객체로 가져오고 싶을 때, 컨트롤러 메서드에서 어떤 데코레이터를 사용하고, 어떻게 접근해야 할까요?",
    code: `
      import { Controller, Get, Query } from '@nestjs/common';
  
      @Controller('products')
      export class ProductsController {
        @Get()
        findProducts(@______ queries: any): string {
          const { page, limit } = queries;
          return \`Page: \${page}, Limit: \${limit}\`;
        }
      }
    `,
    answerOptions: [["Query"], ["Queries"], ["QueryParams"], ["GetQuery"]],
    answer: ["Query"],
    explanation:
      "NestJS에서 `@Query()` 데코레이터는 요청의 쿼리 스트링에서 모든 파라미터를 객체로 가져오는 데 사용될 수 있습니다. 데코레이터를 파라미터 없이 사용하면, 해당 메서드 파라미터는 요청의 모든 쿼리 파라미터를 포함하는 객체가 됩니다. 이 객체에서 필요한 속성을 구조 분해 할당을 통해 추출할 수 있습니다. 예를 들어, `const { page, limit } = queries;`는 'page'와 'limit' 두 쿼리 파라미터의 값을 추출합니다.",
    subject: "nestjs",
    subSubject: "query-parameter",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS에서 특정 경로의 파라미터를 추출하는 데 사용하는 데코레이터는 무엇이며, 'id' 파라미터를 추출하려면 어떻게 해야 할까요?",
    code: `
      import { Controller, Get, _____ } from '@nestjs/common';
  
      @Controller('users')
      export class UsersController {
        @Get(':id')
        findUser(@_____('id') userId: string): string {
          return \`User ID: \${userId}\`;
        }
      }
    `,
    answerOptions: [["Param"], ["RouteParam"], ["PathParam"], ["UrlParam"]],
    answer: ["Param"],
    explanation:
      "NestJS에서 경로 변수를 추출하기 위해서는 `@Param()` 데코레이터를 사용합니다. 이 데코레이터는 라우트 핸들러 메서드의 인자로 적용되어, URL 경로의 파라미터를 메서드 파라미터로 바인딩합니다. 예를 들어, `@Get(':id')`는 'id'라는 이름의 라우트 파라미터를 정의하고, `@Param('id')`는 이 값을 `userId`라는 메서드 파라미터로 가져옵니다.",
    subject: "nestjs",
    subSubject: "routing",
    quizType: "coding",
  },
];
