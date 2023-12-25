// questions1.js
export const CommonNotionGit = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText: "Git에서 'rebase' 명령어의 기본 동작 방식은 어떻게 되나요?",
    code: `
    git checkout feature
    git rebase master
    `,
    answerOptions: [
      {
        text: "현재 브랜치의 커밋을 모두 삭제한 후, 대상 브랜치의 커밋을 가져옵니다.",
        isCorrect: false,
      },
      {
        text: "대상 브랜치의 커밋을 모두 삭제한 후, 현재 브랜치의 커밋을 가져옵니다.",
        isCorrect: false,
      },
      {
        text: "현재 브랜치의 커밋을 임시 공간에 저장한 후, 대상 브랜치의 최신 커밋 위에 차례로 적용합니다.",
        isCorrect: true,
      },
      {
        text: "대상 브랜치의 커밋을 임시 공간에 저장한 후, 현재 브랜치의 최신 커밋 위에 차례로 적용합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "현재 브랜치의 커밋을 임시 공간에 저장한 후, 대상 브랜치의 최신 커밋 위에 차례로 적용합니다.",
    explanation:
      "Git의 'rebase' 명령어는 현재 브랜치의 커밋을 임시 공간에 저장한 후, 대상 브랜치의 최신 커밋 위에 차례로 적용하는 방식으로 동작합니다. 이를 통해 브랜치 간의 커밋 이력을 깔끔하게 유지할 수 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "Git에서 'rebase'와 'merge'의 주요 차이점은 무엇인가요?",
    code: `
    git checkout feature
    git rebase master
    // vs
    git checkout master
    git merge feature
    `,
    answerOptions: [
      {
        text: "둘 다 현재 브랜치의 커밋을 대상 브랜치에 적용하지만, 'rebase'는 커밋의 순서를 변경하고, 'merge'는 변경하지 않습니다.",
        isCorrect: true,
      },
      {
        text: "'rebase'는 현재 브랜치의 커밋을 대상 브랜치에 적용하고, 'merge'는 대상 브랜치의 커밋을 현재 브랜치에 적용합니다.",
        isCorrect: false,
      },
      {
        text: "'rebase'는 새로운 커밋을 생성하지 않고, 'merge'는 새로운 커밋을 생성합니다.",
        isCorrect: false,
      },
      {
        text: "'rebase'와 'merge'는 동일한 동작을 수행합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "둘 다 현재 브랜치의 커밋을 대상 브랜치에 적용하지만, 'rebase'는 커밋의 순서를 변경하고, 'merge'는 변경하지 않습니다.",
    explanation:
      "'rebase'와 'merge' 모두 현재 브랜치의 커밋을 대상 브랜치에 적용하는 기능을 수행합니다. 그러나 'rebase'는 현재 브랜치의 커밋을 임시 공간에 저장한 후 대상 브랜치의 최신 커밋 위에 하나씩 적용하므로 커밋의 순서가 변경됩니다. 반면 'merge'는 현재 브랜치와 대상 브랜치의 커밋을 병합하는 새로운 커밋을 생성하므로 원래의 커밋 순서를 유지합니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "main 브랜치에서 featureA와 featureB 브랜치를 생성하고 각 브랜치에서 변경사항을 발생시킨 다음, main 브랜치에서 'merge' 명령어를 사용하여 병합하려고 합니다. 이 경우 어떤 형태의 병합이 발생하나요?",
    code: `
    git checkout main
    git branch featureA
    git branch featureB
    // Make changes in featureA and featureB
    git checkout main
    git merge featureA
    git merge featureB
    `,
    answerOptions: [
      {
        text: "Fast-forward merge",
        isCorrect: false,
      },
      {
        text: "Three-way merge",
        isCorrect: true,
      },
      {
        text: "Squash merge",
        isCorrect: false,
      },
      {
        text: "Rebase and merge",
        isCorrect: false,
      },
    ],
    answer: "Three-way merge",
    explanation:
      "세 개의 브랜치(main, featureA, featureB)가 관련되어 있고, 각각의 브랜치에서 변경사항이 발생한 경우, 'merge' 명령어는 'Three-way merge'를 실행하게 됩니다. 이는 기본 브랜치(main)에서 분기한 두 브랜치(featureA, featureB)의 변경사항을 병합하는 방식입니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "GitHub에서 다른 사람의 저장소에 변경사항을 제안하려면 어떤 기능을 사용해야 하나요?",
    code: `
    git clone https://github.com/other-person/repo.git
    git checkout -b my-feature
    // Make some changes
    git commit -m "Add my feature"
    git push origin my-feature
    `,
    answerOptions: [
      {
        text: "Pull Request",
        isCorrect: true,
      },
      {
        text: "Push Request",
        isCorrect: false,
      },
      {
        text: "Clone Request",
        isCorrect: false,
      },
      {
        text: "Commit Request",
        isCorrect: false,
      },
    ],
    answer: "Pull Request",
    explanation:
      "GitHub에서 다른 사람의 저장소에 변경사항을 제안하려면 'Pull Request' 기능을 사용해야 합니다. 이를 통해 변경사항을 리뷰하고 토론한 후에 원본 저장소에 병합(merge)할 수 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "GitHub에서 협업하는 동안, 저장소에 대한 변경사항을 모든 참여자가 실시간으로 확인할 수 있도록 하려면 어떤 기능을 사용해야 하나요?",
    answerOptions: [
      {
        text: "Fork",
        isCorrect: false,
      },
      {
        text: "Pull Request",
        isCorrect: false,
      },
      {
        text: "Watch",
        isCorrect: true,
      },
      {
        text: "Star",
        isCorrect: false,
      },
    ],
    answer: "Watch",
    explanation:
      "GitHub에서 협업하는 동안, 저장소에 대한 변경사항을 모든 참여자가 실시간으로 확인할 수 있도록 하려면 'Watch' 기능을 사용해야 합니다. 이 기능을 사용하면 저장소의 모든 활동에 대한 알림을 받을 수 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 'rebase' 명령어를 실행한 후 충돌이 발생했을 때, 충돌을 해결한 후에 어떤 명령어를 통해 리베이스를 계속 진행해야 하나요?",
    code: `
    git checkout feature
    git rebase master
    // Conflict occurs
    // Resolve the conflict
    `,
    answerOptions: [
      {
        text: "git rebase --continue",
        isCorrect: true,
      },
      {
        text: "git rebase --abort",
        isCorrect: false,
      },
      {
        text: "git rebase --skip",
        isCorrect: false,
      },
      {
        text: "git rebase --resolve",
        isCorrect: false,
      },
    ],
    answer: "git rebase --continue",
    explanation:
      "'rebase' 명령어를 실행하다가 충돌이 발생한 경우, 충돌을 해결한 후에 'git rebase --continue' 명령어를 통해 리베이스를 계속 진행해야 합니다. 이 명령어는 충돌이 해결된 후에 다음 커밋으로 이동하라는 의미를 가지고 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "GitHub 협업 과정에서, 다음의 코드 예시는 어떤 GitHub 기능을 사용하고 있는가?",
    code: `
    # 복제할 저장소를 Fork하여 내 GitHub 계정에 복사
    # 내 계정에 복사된 저장소를 로컬에 Clone
    git clone https://github.com/my-account/repo.git
    
    # 새로운 기능을 추가하기 위해 브랜치 생성 및 이동
    git checkout -b new-feature
    
    # 코드 변경 후 커밋
    git commit -m "Add new feature"
    
    # 변경사항을 내 GitHub 계정의 저장소에 Push
    git push origin new-feature
    `,
    answerOptions: [
      {
        text: "Clone",
        isCorrect: false,
      },
      {
        text: "Fork",
        isCorrect: true,
      },
      {
        text: "Pull Request",
        isCorrect: false,
      },
      {
        text: "Branch",
        isCorrect: false,
      },
    ],
    answer: "Fork",
    explanation:
      "이 코드 예시는 GitHub의 'Fork' 기능을 사용하는 과정을 보여줍니다. 'Fork'는 다른 사람의 저장소를 내 GitHub 계정에 복사하는 기능으로, 이를 통해 원본 저장소의 모든 코드, 커밋, 브랜치 등을 그대로 복사하여 새로운 저장소를 생성할 수 있습니다. 이후 이 복사된 저장소에서 변경사항을 만든 후, 원본 저장소에 Pull Request를 보내 변경사항을 제안할 수 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드 예시는 Git에서 서로 다른 개발자가 작업한 내용을 합치는 과정에서 충돌이 발생한 경우를 보여준다. 충돌이 발생한 파일에서 '<<<<<<<', '=======', '>>>>>>>'이 표시되어 있다. 이 표시는 무엇을 의미하는가?",
    code: `
    <<<<<<< HEAD
    console.log("Hello, World!");
    =======
    console.log("Hello, Git!");
    >>>>>>> new-branch
    `,
    answerOptions: [
      {
        text: "해당 파일이 삭제되었음을 표시하는 것",
        isCorrect: false,
      },
      {
        text: "해당 파일에 문법 오류가 있음을 표시하는 것",
        isCorrect: false,
      },
      {
        text: "해당 파일에서 충돌이 발생한 부분을 표시하는 것",
        isCorrect: true,
      },
      {
        text: "해당 파일이 새로 생성되었음을 표시하는 것",
        isCorrect: false,
      },
    ],
    answer: "해당 파일에서 충돌이 발생한 부분을 표시하는 것",
    explanation:
      "Git에서 '<<<<<<<', '=======', '>>>>>>>'는 충돌이 발생한 부분을 표시합니다. '<<<<<<<' 다음부터 '=======' 이전까지는 현재 브랜치의 변경사항을, '=======' 다음부터 '>>>>>>>' 이전까지는 병합하려는 브랜치의 변경사항을 나타냅니다. 이를 통해 어떤 부분이 충돌했는지 확인하고, 해당 부분을 수동으로 수정하여 충돌을 해결할 수 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 서로 다른 브랜치의 작업 내용을 병합하려다가 충돌이 발생했다. 다음 중 충돌을 해결하는 올바른 방법은 무엇인가?",
    answerOptions: [
      {
        text: "충돌이 발생한 파일을 모두 삭제한다",
        isCorrect: false,
      },
      {
        text: "충돌이 발생한 부분을 수동으로 수정하고, 수정한 파일을 다시 커밋한다",
        isCorrect: true,
      },
      {
        text: "병합을 취소하고 처음부터 다시 작업한다",
        isCorrect: false,
      },
      {
        text: "충돌이 발생한 부분을 무시하고 병합을 계속 진행한다",
        isCorrect: false,
      },
    ],
    answer:
      "충돌이 발생한 부분을 수동으로 수정하고, 수정한 파일을 다시 커밋한다",
    explanation:
      "Git에서 충돌이 발생한 경우, '<<<<<<<', '=======', '>>>>>>>'로 표시된 부분을 찾아 해당 부분을 수동으로 수정해야 합니다. 수정이 완료된 후에는 'git add' 명령어로 수정한 파일을 스테이징하고, 'git commit' 명령어로 다시 커밋하여 충돌을 해결할 수 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 로컬 저장소를 원격 저장소에 연결할 때 사용하는 명령어는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "git clone [url]",
        isCorrect: false,
      },
      {
        text: "git push origin master",
        isCorrect: false,
      },
      {
        text: "git remote add origin [url]",
        isCorrect: true,
      },
      {
        text: "git pull origin master",
        isCorrect: false,
      },
    ],
    answer: "git remote add origin [url]",
    explanation:
      "git remote add origin [url] 명령어는 로컬 저장소와 원격 저장소를 연결하는 데 사용됩니다. 여기서 [url]은 원격 저장소의 주소를 나타냅니다. 이 명령어를 실행하면 로컬 저장소가 원격 저장소를 기억하게 되고, 이후 git push 등의 명령어를 통해 원격 저장소에 변경 사항을 쉽게 반영할 수 있게 됩니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 작업 내용을 임시 저장하고자 할 때 사용하는 명령어는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "git stash",
        isCorrect: true,
      },
      {
        text: "git commit",
        isCorrect: false,
      },
      {
        text: "git push",
        isCorrect: false,
      },
      {
        text: "git pull",
        isCorrect: false,
      },
    ],
    answer: "git stash",
    explanation:
      "git stash 명령어는 현재 작업 내용을 임시 저장하고 워킹 디렉토리를 이전 상태로 되돌릴 때 사용합니다. 이 명령어를 사용하면 다른 브랜치로 체크아웃하거나 새로운 작업을 시작하기 전에 현재 작업 중인 내용을 안전하게 저장할 수 있습니다. 필요할 때 git stash pop 명령어를 사용하여 임시 저장한 작업 내용을 다시 불러올 수 있습니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 원격 저장소에 변경 사항을 업로드하기 위해 사용하는 명령어는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "git commit",
        isCorrect: false,
      },
      {
        text: "git fetch",
        isCorrect: false,
      },
      {
        text: "git push",
        isCorrect: true,
      },
      {
        text: "git pull",
        isCorrect: false,
      },
    ],
    answer: "git push",
    explanation:
      "git push 명령어는 지역 저장소의 commit을 원격 저장소에 업로드하는 데 사용됩니다. 이 명령어를 사용하면 원격 저장소와 지역 저장소를 동기화할 수 있습니다. 이는 코드의 최신 버전을 원격 저장소에 유지하고 다른 개발자들과 협업하는 데 중요한 기능입니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 변경 사항을 현재 작업 중인 브랜치에 기록하기 위해 사용하는 명령어는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "git commit",
        isCorrect: true,
      },
      {
        text: "git fetch",
        isCorrect: false,
      },
      {
        text: "git push",
        isCorrect: false,
      },
      {
        text: "git pull",
        isCorrect: false,
      },
    ],
    answer: "git commit",
    explanation:
      "git commit 명령어는 변경 사항을 현재 작업 중인 브랜치에 기록하는 데 사용됩니다. 이 명령어를 사용하면 수정한 파일을 staging area에서 새로운 commit으로 이동시킬 수 있습니다. 이는 코드의 변경 사항을 기록하고 버전 관리하는 데 중요한 기능입니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 원격 저장소의 최신 변경 사항을 로컬 저장소로 가져오기 위해 사용하는 명령어는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "git commit",
        isCorrect: false,
      },
      {
        text: "git fetch",
        isCorrect: false,
      },
      {
        text: "git push",
        isCorrect: false,
      },
      {
        text: "git pull",
        isCorrect: true,
      },
    ],
    answer: "git pull",
    explanation:
      "git pull 명령어는 원격 저장소의 최신 변경 사항을 로컬 저장소로 가져오는 데 사용됩니다. 이 명령어는 'git fetch'와 'git merge' 명령어를 한 번에 수행하여 원격 저장소의 변경 사항을 현재 작업 중인 브랜치에 병합합니다. 예를 들어, 'git pull origin master'라는 명령어를 실행하면 원격 저장소(origin)의 master 브랜치의 최신 변경 사항을 현재 작업 중인 브랜치로 가져옵니다. 이는 원격 저장소의 최신 버전을 유지하고 다른 개발자들과 협업하는 데 중요한 기능입니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "Git에서 특정 브랜치로 전환하거나, 파일의 특정 커밋 상태로 되돌리기 위해 사용하는 명령어는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "git checkout",
        isCorrect: true,
      },
      {
        text: "git fetch",
        isCorrect: false,
      },
      {
        text: "git push",
        isCorrect: false,
      },
      {
        text: "git pull",
        isCorrect: false,
      },
    ],
    answer: "git checkout",
    explanation:
      "git checkout 명령어는 특정 브랜치로 전환하거나, 파일의 특정 커밋 상태로 되돌리는 데 사용됩니다. 이 명령어를 사용하면 다른 브랜치로 쉽게 전환할 수 있고, 특정 커밋의 상태로 파일을 되돌릴 수 있습니다. 예를 들어, 'git checkout feature'라는 명령어를 실행하면 'feature'라는 이름의 브랜치로 전환할 수 있습니다. 또한, 'git checkout 5d7e0'과 같이 특정 커밋의 해시를 사용하여 해당 커밋 상태로 파일을 되돌릴 수 있습니다. 이는 브랜치 전환과 버전 관리에 중요한 기능입니다.",
    subject: "common",
    subSubject: "github",
    quizType: "coding",
  },
];

// HTTP란?
// HTTP에서 구조화된 데이터를 보낼 때 어떤 구조로 보내는지?
// JSON의 규칙에 대해
// HTTP의 구성요소에 대해
// URL의 구성 요소에 대해
// 메서드에 대해 (PATCH, PUT ,DELETE, GET 등)
// PATCH와 PUT의 차이점
// 헤더란 무엇인가와 용도
// BODY란 무엇인가와 용도
// 헤더와 바디의 차이점
// HTTP 응답의 구성 요소
// Status Code의 종류
