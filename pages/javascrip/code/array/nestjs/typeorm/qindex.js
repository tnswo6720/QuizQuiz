export const nestjsCodeTypeorm = [
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 코드에서 빈 1칸에 들어갈 수 있는 메서드는 무엇인가요? 이 메서드는 TypeORM 레포지토리에서 특정 조건에 맞는 단일 엔티티를 검색할 때 사용됩니다.",
    code: `
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async getPostById(id: number) {
          const post = await this.postsRepository.______({
            where: {
              id,
            },
          });
  
          if (!post) {
            throw new NotFoundException();
          }
  
          return post;
        }
      `,
    answerOptions: ["find", "findOne", "findAll", "getMany"],
    answer: "findOne",
    explanation:
      "TypeORM 레포지토리에서 특정 조건에 맞는 단일 엔티티를 검색할 때는 'findOne' 메서드를 사용합니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
];
