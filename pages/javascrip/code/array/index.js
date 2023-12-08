import { cssCodeBasic } from "./css/basic/java_type_script";
import { cssCodePropertyValue } from "./css/property-value/java_type_script";
import { cssCodeSelector } from "./css/selector/java_type_script";
import { javascriptCodeEvent } from "./javascript/event/java_type_script";
import { nestjsCodeController } from "./nestjs/controller/java_type_script";
import { nestjsCodeQueryParameter } from "./nestjs/query-parameter/java_type_script";
import { nestjsCodeTypeorm } from "./nestjs/typeorm/qindex";
import { typescriptCodeBasic } from "./typescript/java_type_script";

export const Questions2 = [
  ...javascriptCodeEvent,
  ...typescriptCodeBasic,
  ...nestjsCodeTypeorm,
  ...cssCodeBasic,
  ...cssCodeSelector,
  ...cssCodePropertyValue,
  ...nestjsCodeController,
  ...nestjsCodeQueryParameter,
];
