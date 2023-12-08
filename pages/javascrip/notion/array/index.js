import { typescriptNotionLibrary } from "./typescript/library/java_type_script";
import { javascriptNotionBasic } from "./javascript/basic/java_type_script";
import { javascriptNotionPromise } from "./javascript/promise/java_type_script";
import { nestjsNotionTypeorm } from "./nestjs/typeorm/java_type_script";
import { nestjsNotionDocker } from "./nestjs/docker/java_type_script";

export const Questions1 = [
  // 질문 데이터...
  ...javascriptNotionBasic,
  ...typescriptNotionLibrary,
  ...javascriptNotionPromise,
  ...nestjsNotionTypeorm,
  ...nestjsNotionDocker,
];

// typescript typescript typescript
