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
];
