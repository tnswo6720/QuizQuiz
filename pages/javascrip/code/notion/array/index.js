import { typescriptNotionLibrary } from "./typescript/library/java_type_script";
import { javascriptNotionBasic } from "./javascript/basic/java_type_script";
import { javascriptNotionPromise } from "./javascript/promise/java_type_script";
import { nestjsNotionTypeorm } from "./nestjs/typeorm/java_type_script";
import { nestjsNotionDocker } from "./nestjs/docker/java_type_script";
import { typescriptNotionBasic } from "./typescript/basic/java_type_script";
import { CommonNotionBackend } from "./common/backend";
import { cssNotionselector } from "./css/selector";
import { typescriptNotionLayout } from "./typescript/layout/java_type_script";
import { typescriptNotionEventBubbling } from "./typescript/eventbubbling/java_type_script";
import { typescriptNotionlinterPrettier } from "./typescript/linterprettier/java_type_script";
import { typescriptNotionBoard } from "./typescript/board/java_type_script";
import { typescriptNotionUtilityType } from "./typescript/utilitytype";

export const Questions1 = [
  // 질문 데이터...
  ...javascriptNotionBasic,
  ...typescriptNotionBasic,
  ...typescriptNotionLibrary,
  ...typescriptNotionLayout,
  ...typescriptNotionEventBubbling,
  ...typescriptNotionlinterPrettier,
  ...typescriptNotionUtilityType,
  ...javascriptNotionPromise,
  ...nestjsNotionTypeorm,
  ...nestjsNotionDocker,
  ...typescriptNotionLibrary,
  ...typescriptNotionBasic,
  ...typescriptNotionBoard,
  ...CommonNotionBackend,
  ...cssNotionselector,
];

// typescript typescript typescript
