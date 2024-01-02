// questions1.js
export const CommonCodeDatabase = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "특정 사용자의 정보를 조회할 때 사용하는 SQL 문을 작성하려고 합니다. 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      ______* ______ users ______ username = 'johndoe';
    `,
    answerOptions: [
      ["SELECT", "FROM", "WHERE"],
      ["COLLECT", "IN", "WHEN"],
      ["EXTRACT", "FROM", "WHICH"],
      ["GET", "OF", "WHERE"],
    ],
    answer: ["SELECT, FROM, WHERE"],
    explanation:
      "SQL에서 데이터를 조회할 때 가장 기본적인 구문은 'SELECT * FROM 테이블명 WHERE 조건' 형태입니다. 이 쿼리는 'users' 테이블에서 'username'이 'johndoe'인 사용자의 모든 정보를 조회하도록 요청합니다. 'SELECT'는 데이터를 조회하라는 명령어, 'FROM'은 어떤 테이블에서 조회할지를 지정하는 키워드, 그리고 'WHERE'는 특정 조건에 맞는 데이터만을 필터링하는 데 사용됩니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "데이터베이스의 'users' 테이블에 새로운 사용자를 추가하는 SQL  문을 작성하려고 합니다. 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      ______ INTO users (username, email) ______ 
      ('johndoe', 'john@example.com');
    `,
    answerOptions: [
      ["INSERT", "VALUES"],
      ["ADD", "KEYS"],
      ["PUT", "DATA"],
      ["PUSH", "INTO"],
    ],
    answer: ["INSERT, VALUES"],
    explanation:
      "새로운 데이터를 테이블에 추가하기 위해서는 SQL의 `INSERT INTO` 명령어를 사용합니다. `INSERT INTO`는 데이터를 삽입할 테이블을 명시하고, `VALUES` 키워드 다음에는 삽입할 데이터 값을 괄호 안에 쉼표로 구분하여 제공합니다. 이 예시에서는 'users' 테이블에 'username'과 'email' 컬럼에 각각 'johndoe'와 'john@example.com'을 추가하도록 지시하는 쿼리입니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "데이터베이스의 'users' 테이블에서 사용자의 이메일 주소를 갱신하는 SQL 문을 작성하려고 합니다. 사용자의 'username'이 'johndoe'일 때, 이메일 주소를 'john@newdomain.com'으로 변경하려고 합니다. 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      ______ users ______ email =
     'john@newdomain.com' ______ username = 'johndoe';
    `,
    answerOptions: [
      ["UPDATE", "SET", "WHERE"],
      ["CHANGE", "ALTER", "IF"],
      ["MODIFY", "UPDATE", "WHERE"],
      ["EDIT", "MAKE", "FOR"],
    ],
    answer: ["UPDATE, SET, WHERE"],
    explanation:
      "기존 데이터를 수정하기 위해서는 SQL의 `UPDATE` 명령어를 사용하며, 수정할 테이블과 컬럼, 그리고 새로운 값을 `SET` 키워드와 함께 명시합니다. 또한, 어떤 데이터를 수정할지를 지정하기 위해 `WHERE` 절을 사용하여 조건을 제공합니다. 이 예시는 'users' 테이블에서 'username'이 'johndoe'인 행을 찾아 'email' 컬럼의 값을 'john@newdomain.com'으로 변경하는 쿼리입니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "데이터베이스의 'users' 테이블에서 특정 사용자를 제거하는 SQL  문을 작성하려고 합니다. 사용자의 'username'이 'johndoe'인 레코드를 삭제하려고 할 때, 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      ______ FROM users ______ username = 'johndoe';
    `,
    answerOptions: [
      ["REMOVE", "WHERE"],
      ["DELETE", "WHERE"],
      ["ERASE", "IF"],
      ["EXPUNGE", "WHERE"],
    ],
    answer: ["DELETE, WHERE"],
    explanation:
      "데이터베이스에서 레코드를 삭제하려면 `DELETE FROM` 구문을 사용합니다. 이어지는 `WHERE` 절은 어떤 레코드를 삭제할지 조건을 명시합니다. 따라서 `DELETE FROM users WHERE username = 'johndoe';` 쿼리는 'users' 테이블에서 'username' 컬럼의 값이 'johndoe'인 레코드를 찾아 삭제합니다. `REMOVE`, `ERASE`, `EXPUNGE`는 SQL에서 레코드를 삭제하는 데 사용되는 표준 키워드가 아닙니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "SQL에서 새로운 'users' 테이블을 생성하기 위한 SQL 문을 작성하려고 합니다. 이 테이블에는 'id'라는 기본 키가 있고 정수형 데이터를 가지며, 'username'과 'email'이라는 문자열형 컬럼이 있어야 합니다. 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      ______ TABLE users (
        id INT PRIMARY KEY,
        username ______(50),
        email ______(100)
      );
    `,
    answerOptions: [
      ["CREATE", "VARCHAR", "VARCHAR"],
      ["MAKE", "STRING", "STRING"],
      ["BUILD", "TEXT", "TEXT"],
      ["ESTABLISH", "CHAR", "CHAR"],
    ],
    answer: ["CREATE, VARCHAR, VARCHAR"],
    explanation:
      "SQL에서 새로운 테이블을 생성하기 위해 `CREATE TABLE` 구문을 사용합니다. 'id' 컬럼은 정수형 데이터를 가지고 있으며 `PRIMARY KEY`로 지정됩니다, 이는 해당 컬럼이 테이블의 유일한 식별자 역할을 한다는 것을 의미합니다. 'username'과 'email' 컬럼은 각각 문자열을 저장하고, 길이 제한을 두기 위해 `VARCHAR` 타입을 사용합니다. `VARCHAR(50)`은 최대 50자 길이의 문자열을, `VARCHAR(100)`은 최대 100자 길이의 문자열을 저장할 수 있도록 합니다. `MAKE`, `BUILD`, `ESTABLISH`는 SQL에서 테이블을 생성하는 표준 키워드가 아니며, `STRING`과 `TEXT`, `CHAR`는 이 컨텍스트에서 적절한 데이터 타입이 아닙니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "기존 'users' 테이블에 'age'라는 새로운 정수형 컬럼을 추가하기 위한 SQL  문을 작성하려고 합니다. 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      ______ TABLE users
      ______ COLUMN age INT;
    `,
    answerOptions: [
      ["ALTER", "ADD"],
      ["CHANGE", "INSERT"],
      ["MODIFY", "APPEND"],
      ["UPDATE", "PUT"],
    ],
    answer: ["ALTER, ADD"],
    explanation:
      "테이블의 구조를 변경할 때, `ALTER TABLE` 구문을 사용하여 기존 테이블에 변화를 줄 수 있습니다. 특히 새로운 컬럼을 추가하고자 할 때는 `ADD COLUMN` 구문을 사용하며, 이어서 컬럼 이름과 데이터 타입을 명시합니다. 따라서 `ALTER TABLE users ADD COLUMN age INT;` 쿼리는 'users' 테이블에 'age'라는 이름의 새로운 정수형(INT) 컬럼을 추가합니다. 'CHANGE', 'MODIFY', 'UPDATE'는 이 상황에서 적절한 키워드가 아니며, 'INSERT', 'APPEND', 'PUT'는 새 컬럼을 테이블에 추가하는 데 사용되는 SQL 문법이 아닙니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "두 개의 테이블 'users'와 'orders'에서 사용자 정보와 그들의 주문 정보를 함께 조회하기 위한 SQL  문을 작성하려고 합니다. 'users' 테이블의 'id' 컬럼과 'orders' 테이블의 'user_id' 컬럼을 기준으로 JOIN을 수행하려고 할 때, 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      SELECT users.username, orders.order_date
      FROM users
      ______ JOIN orders
      ______ users.id = orders.user_id;
    `,
    answerOptions: [
      ["LEFT", "ON"],
      ["RIGHT", "USING"],
      ["INNER", "ON"],
      ["OUTER", "ON"],
    ],
    answer: ["INNER, ON"],
    explanation:
      "`JOIN` 쿼리는 둘 이상의 테이블에서 관련된 데이터를 결합하여 조회할 때 사용됩니다. `INNER JOIN`은 두 테이블 모두에서 일치하는 레코드만을 선택합니다. `ON` 키워드 다음에는 두 테이블을 연결하는 조건을 명시합니다. 따라서 `SELECT users.username, orders.order_date FROM users INNER JOIN orders ON users.id = orders.user_id;` 쿼리는 'users' 테이블과 'orders' 테이블을 'id'와 'user_id' 컬럼을 기준으로 결합하여 일치하는 레코드의 'username'과 'order_date' 정보를 조회합니다. 'LEFT', 'RIGHT', 'OUTER' JOIN은 다른 유형의 JOIN을 지칭하며, 'USING'은 JOIN 조건이 동일한 이름의 컬럼을 사용할 때 쓰는 대안적인 문법입니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "데이터베이스에서 안전한 데이터 처리를 위해 여러 쿼리를 한 단위로 묶는 SQL을 사용합니다. 사용자 정보를 업데이트하고 연관된 주문 정보도 함께 업데이트해야 할 때 모든 변경 사항이 성공적으로 수행되거나, 하나라도 실패할 경우 모든 변경 사항을 취소하려고 할 때 아래의 빈칸을 채워 올바른 쿼리를 완성하세요.",
    code: `
      ______;
      UPDATE users SET email = 'john@newdomain.com' WHERE id = 1;
      UPDATE orders SET order_status = 'Shipped' WHERE user_id = 1;
      ______;
    `,
    answerOptions: [
      ["START-TRANSACTION", "COMMIT"],
      ["BEGIN", "END"],
      ["OPEN-TRANSACTION", "FINISH"],
      ["BEGIN-TRANSACTION", "ROLLBACK"],
    ],
    answer: ["START-TRANSACTION, COMMIT"],
    explanation:
      "트랜잭션은 `START TRANSACTION` 또는 `BEGIN`으로 시작할 수 있습니다. 모든 쿼리가 성공적으로 실행되었을 때, `COMMIT`을 사용하여 변경 사항을 데이터베이스에 반영합니다. 이 쿼리 시퀀스는 'users' 테이블과 'orders' 테이블의 업데이트를 트랜잭션으로 묶어서 두 업데이트 모두 성공적으로 완료되면 반영하고, 아니면 모두 취소합니다. `ROLLBACK`은 쿼리 중 하나라도 실패했을 때 사용되어 모든 변경 사항을 취소할 수 있습니다. 'END'와 'FINISH'는 트랜잭션을 종료하는 표준 SQL 명령어가 아니며, 'OPEN TRANSACTION'은 올바른 문법이 아닙니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
];
