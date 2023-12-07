export const basicQuestions = [
  // 여기에 배열 관련 문제를 추가합니다...
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 기본 메서드는 무엇인가요?  이 메서드는 배열의 각 요소를 함수를 통해 변환하고, 변환된 요소로 새로운 배열을 생성합니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const newArr = arr.______(function(num) { 
        return num * 2; 
      });
      
      console.log(newArr);
    `,
    answerOptions: ["map", "reduce", "filter", "forEach"],
    answer: "map",
    explanation:
      "배열의 각 요소를 함수를 통해 변환하고 변환된 요소로 새 배열을 생성하는 'map' 메서드가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 각 요소에 대해 함수를 실행합니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      arr.______(function(num) { 
        console.log(num);
      });
    `,
    answerOptions: ["map", "reduce", "filter", "forEach"],
    answer: "forEach",
    explanation:
      "배열의 각 요소에 대해 함수를 실행하는 'forEach' 메서드가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 생성자는 무엇인가요? 이 생성자는 배열을 생성합니다.",
    code: `
      const arr = new ______(1, 2, 3, 4, 5);
      
      console.log(arr);
    `,
    answerOptions: ["Array", "Object", "Function", "String"],
    answer: "Array",
    explanation: "배열을 생성하는 'Array' 생성자가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 반복자 메서드는 무엇인가요? 이 메서드는 배열의 각 요소에 대한 반복자를 생성합니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const iterator = arr.______();
      
      console.log(iterator.next().value);
    `,
    answerOptions: ["values", "keys", "entries", "forEach"],
    answer: "values",
    explanation:
      "배열의 각 요소에 대한 반복자를 생성하는 'values' 메서드가 적절합니다. 반복자(Iterator)는 '반복 가능한 객체'를 통해 순차적으로 접근하는 패턴입니다",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 요소 중 함수의 조건을 만족하는 요소만을 새 배열로 생성합니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const newArr = arr.______(function(num) { 
        return num > 3; 
      });
      
      console.log(newArr);
    `,
    answerOptions: ["map", "reduce", "filter", "forEach"],
    answer: "filter",
    explanation:
      "배열의 요소 중 함수의 조건을 만족하는 요소만을 새 배열로 생성하는 'filter' 메서드가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 모든 요소를 사용하여 하나의 값으로 줄입니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const sum = arr.______(function(acc, cur) { 
        return acc + cur; 
      }, 0);
      
      console.log(sum);
    `,
    answerOptions: ["map", "reduce", "filter", "forEach"],
    answer: "reduce",
    explanation:
      "배열의 모든 요소를 사용하여 하나의 값으로 줄이는 'reduce' 메서드가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열에서 특정 요소를 찾아 그 인덱스를 반환합니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const index = arr.______(3);
      
      console.log(index);
    `,
    answerOptions: ["indexOf", "findIndex", "lastIndexOf", "includes"],
    answer: "indexOf",
    explanation:
      "배열에서 특정 요소를 찾아 그 인덱스를 반환하는 'indexOf' 메서드가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const isExists = arr.______(3);
      
      console.log(isExists);
    `,
    answerOptions: ["indexOf", "findIndex", "lastIndexOf", "includes"],
    answer: "includes",
    explanation:
      "배열이 특정 요소를 포함하고 있는지 판별하는 'includes' 메서드가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 순서를 반전시킵니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const newArr = arr.______();
      
      console.log(newArr);
    `,
    answerOptions: ["join", "concat", "slice", "reverse"],
    answer: "reverse",
    explanation: "배열의 순서를 반전시키는 'reverse' 메서드가 적절합니다.",
  },
  {
    questionText:
      "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 일부를 추출하여 새 배열을 생성합니다.",
    code: `
      const arr = [1, 2, 3, 4, 5];
      const copiedArr = arr.______(1, 3);
      
      console.log(copiedArr);
    `,
    answerOptions: ["join", "concat", "slice", "reverse"],
    answer: "slice",
    explanation:
      "배열의 일부를 추출하여 새 배열을 생성하는 'slice' 메서드가 적절합니다.",
  },
];
