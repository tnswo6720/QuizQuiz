// questions1.js
export const nestjsNotionTypeorm = [
  // 질문 데이터...

  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서, createPost 함수의 작동 흐름에 대한 설명 중 옳지 않은 것은 무엇인가요?",
    code: `
      async createPost(author: string, title: string, content: string) {
        const post = this.postsRepository.create({
          author,
          title,
          content,
          likeCount: 0,
          commentCount: 0,
        });
    
        const newPost = await this.postsRepository.save(post);
    
        return newPost;
      }
    `,
    answerOptions: [
      {
        text: "createPost 함수는 비동기적으로 동작합니다.",
        isCorrect: true,
      },
      {
        text: "this.postsRepository.create 메서드를 사용하여 새로운 post 객체를 생성합니다.",
        isCorrect: true,
      },
      {
        text: "새로운 post 객체는 author, title, content, likeCount, commentCount 프로퍼티를 가집니다.",
        isCorrect: true,
      },
      {
        text: "this.postsRepository.save 메서드는 새로운 post 객체를 데이터베이스에 저장하고, 그 결과를 반환하지 않습니다.",
        isCorrect: false,
      },
    ],
    explanation:
      "this.postsRepository.save 메서드는 새로운 post 객체를 데이터베이스에 저장하고, 저장된 post 객체를 반환합니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서, updatePost 함수의 작동 흐름에 대한 설명 중 옳지 않은 것은 무엇인가요?",
    code: `
      async updatePost(
        postId: number,
        author: string,
        title: string,
        content: string,
      ) {
        const post = await this.postsRepository.findOne({
          where: {
            id: postId,
          },
        });
    
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
    
        const newPost = await this.postsRepository.save(post);
    
        return newPost;
      }
    `,
    answerOptions: [
      {
        text: "updatePost 함수는 비동기적으로 동작합니다.",
        isCorrect: true,
      },
      {
        text: "this.postsRepository.findOne 메서드를 사용하여 postId에 해당하는 post 객체를 찾습니다.",
        isCorrect: true,
      },
      {
        text: "만약 postId에 해당하는 post 객체가 존재하지 않으면 NotFoundException을 발생시킵니다.",
        isCorrect: true,
      },
      {
        text: "this.postsRepository.save 메서드는 변경된 post 객체를 데이터베이스에 저장하지 않습니다.",
        isCorrect: false,
      },
    ],
    explanation:
      "this.postsRepository.save 메서드는 변경된 post 객체를 데이터베이스에 저장하고, 저장된 post 객체를 반환합니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서, TypeORM의 create 메서드와 save 메서드를 연관지어 설명한 내용 중 옳지 않은 것은 무엇인가요?",
    code: `
      async createPost(author: string, title: string, content: string) {
        const post = this.postsRepository.create({
          author,
          title,
          content,
          likeCount: 0,
          commentCount: 0,
        });
    
        const newPost = await this.postsRepository.save(post);
    
        return newPost;
      }
    `,
    answerOptions: [
      {
        text: "'create' 메서드는 새로운 post 객체를 생성하지만, 데이터베이스에는 저장하지 않습니다.",
        isCorrect: true,
      },
      {
        text: "'save' 메서드는 'create' 메서드에서 생성한 post 객체를 데이터베이스에 저장하고, 저장된 post 객체를 반환합니다.",
        isCorrect: true,
      },
      {
        text: "'create' 메서드와 'save' 메서드를 함께 사용하면, 새로운 post 객체를 생성하고 바로 데이터베이스에 저장할 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "'create' 메서드는 새로운 post 객체를 생성하고 데이터베이스에 바로 저장합니다.",
        isCorrect: false,
      },
    ],
    explanation:
      "'create' 메서드는 새로운 post 객체를 생성하지만, 데이터베이스에는 저장하지 않습니다. 데이터베이스에 저장하려면 'save' 메서드를 호출해야 합니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 NestJS 코드에서 'createPost()' 메서드의 동작 흐름을 올바르게 설명한 것은 무엇인가요?",
    code: `
    async createPost(author: string, title: string, content: string) {
        const post = this.postsRepository.create({
            author,
            title,
            content,
            likeCount: 0,
            commentCount: 0,
        });

        const newPost = await this.postsRepository.save(post);

        return newPost;
    }
    `,
    answerOptions: [
      {
        text: "'createPost()' 메서드는 새로운 post 객체를 생성하고, 이를 데이터베이스에 저장한 후, 저장된 객체를 반환합니다.",
        isCorrect: true,
      },
      {
        text: "'createPost()' 메서드는 새로운 post 객체를 생성만 하고 데이터베이스에 저장하지는 않습니다.",
        isCorrect: false,
      },
      {
        text: "'createPost()' 메서드는 기존에 존재하는 post 객체를 찾아서 업데이트하는 작업을 수행합니다.",
        isCorrect: false,
      },
      {
        text: "'createPost()' 메서드는 데이터베이스에서 post 객체를 삭제하는 작업을 수행합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'createPost()' 메서드는 새로운 post 객체를 생성하고, 이를 데이터베이스에 저장한 후, 저장된 객체를 반환합니다.",
    explanation:
      "'createPost()' 메서드에서는 먼저 'this.postsRepository.create()'를 통해 새로운 post 객체를 생성합니다. 이 객체는 아직 데이터베이스에 저장되지 않은 상태입니다. 이후 'this.postsRepository.save()' 메서드를 통해 생성된 post 객체를 데이터베이스에 저장하게 됩니다. 이 메서드는 저장된 객체를 반환하므로, 'newPost'에는 데이터베이스에 저장된 post 객체가 담기게 됩니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 NestJS 컨트롤러 코드에서 설명한 기능들을 가지고, 'PostsController' 클래스의 주요 기능을 가장 정확하게 설명한 것은 무엇인가요?",
    code: `
    @Controller('posts')
    export class PostsController {
      constructor(private readonly postsService: PostsService) {}

      @Get()
      getPosts() {
        return this.postsService.getAllPost();
      }

      @Get(':id')
      getPost(@Param('id') id: string) {
        return this.postsService.getPostById(+id);
      }

      @Post()
      postPosts(
        @Body('author') author: string,
        @Body('title') title: string,
        @Body('content') content: string,
      ) {
        return this.postsService.createPost(author, title, content);
      }

      @Put(':id')
      putPost(
        @Param('id') id: string,
        @Body('author') author?: string,
        @Body('title') title?: string,
        @Body('content') content?: string,
      ) {
        return this.postsService.updatePost(+id, author, title, content);
      }

      @Delete(':id')
      deletePost(@Param('id') id: string) {
        return this.postsService.deletePost(+id);
      }
    }
    `,
    answerOptions: [
      {
        text: "'PostsController' 클래스는 게시물을 생성, 조회, 업데이트, 삭제하는 주요 기능을 제공합니다.",
        isCorrect: true,
      },
      {
        text: "'PostsController' 클래스는 게시물을 생성하고 조회하는 기능만 제공합니다.",
        isCorrect: false,
      },
      {
        text: "'PostsController' 클래스는 게시물을 업데이트하고 삭제하는 기능만 제공합니다.",
        isCorrect: false,
      },
      {
        text: "'PostsController' 클래스는 게시물을 조회하는 기능만 제공합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'PostsController' 클래스는 게시물을 생성, 조회, 업데이트, 삭제하는 주요 기능을 제공합니다.",
    explanation:
      "'PostsController' 클래스는 다음과 같은 주요 기능을 가지고 있습니다.\n\n1. `getPosts()`: 모든 게시물을 조회합니다.\n2. `getPost(id)`: 특정 id에 해당하는 게시물을 조회합니다.\n3. `postPosts(author, title, content)`: 새로운 게시물을 생성합니다.\n4. `putPost(id, author, title, content)`: 특정 id에 해당하는 게시물을 업데이트합니다.\n5. `deletePost(id)`: 특정 id에 해당하는 게시물을 삭제합니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "NestJS와 TypeORM을 사용하여 작성된 아래의 'deletePost' 메서드가 어떤 역할을 하는지 올바르게 설명한 것은 무엇인가요?",
    code: `
    async deletePost(postId: number) {
        const post = await this.postsRepository.findOne({
          where: {
            id: postId,
          },
        });

        if (!post) {
          throw new NotFoundException();
        }

        await this.postsRepository.delete(postId);

        return postId;
      }
    `,
    answerOptions: [
      {
        text: "해당 ID의 포스트를 찾아서 삭제하고, 삭제된 포스트의 ID를 반환한다.",
        isCorrect: true,
      },
      {
        text: "해당 ID의 포스트를 찾아서 삭제하고, 삭제된 포스트의 내용을 반환한다.",
        isCorrect: false,
      },
      {
        text: "해당 ID의 포스트를 찾아서 삭제하고, 삭제된 포스트의 작성자를 반환한다.",
        isCorrect: false,
      },
      {
        text: "해당 ID의 포스트를 찾아서 삭제하고, 삭제된 포스트의 제목을 반환한다.",
        isCorrect: false,
      },
    ],
    answer:
      "해당 ID의 포스트를 찾아서 삭제하고, 삭제된 포스트의 ID를 반환한다.",
    explanation:
      "'deletePost' 메서드는 인자로 받은 'postId'를 기준으로 해당 포스트를 찾고, 찾은 포스트를 삭제합니다. 만약 해당 ID의 포스트가 없다면, NotFoundException을 발생시킵니다. 포스트 삭제 후에는 삭제된 포스트의 ID를 반환합니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
];
