import { CommonCodeDatabase } from "./common/데이터베이스/index.js";
import { cssCodeBasic } from "./css/basic/java_type_script";
import { cssCodeBoxmodel } from "./css/boxmodel/java_type_script";
import { cssCodelayout } from "./css/layout/index.js";
import { cssCodePropertyValue } from "./css/property-value/java_type_script";
import { cssCodeSelector } from "./css/selector/java_type_script";
import { javascriptCodeArray } from "./javascript/array/java_type_script";
import { javascriptCodeBasic } from "./javascript/basic/java_type_script";
import { javascriptCodeEvent } from "./javascript/event/index.js";
// import { javascriptCodeFunction } from "./javascript/function/java_type_script";
import { javascriptCodeObject } from "./javascript/object/index.js";
import { javascriptCodeDom } from "./javascript/돔 조작/index.js";
import { nestjsCodeController } from "./nestjs/controller/java_type_script";
import { nestjsCodeQueryParameter } from "./nestjs/query-parameter/java_type_script";
import { nestjsCodeTypeorm } from "./nestjs/typeorm/qindex";
import { typescriptCodeBasic } from "./typescript/basic";
import { typescriptCodeMap } from "./typescript/map";
import { typescriptCodePagination } from "./typescript/pagination";
import { typescriptCodeRouting } from "./typescript/routing";
import { typescriptCodeSetState } from "./typescript/setState";
import { typescriptCodeTypescriptBoard } from "./typescript/typescriptboard";
import { typescriptCodeUtilitytype } from "./typescript/utilitytype";
import { typescriptCodeClass } from "./typescript/클래스와오픈API/index.js";

export const Questions2 = [
  ...javascriptCodeEvent,
  ...javascriptCodeBasic,

  ...javascriptCodeObject,
  ...javascriptCodeArray,
  ...javascriptCodeDom,
  ...typescriptCodeBasic,
  ...typescriptCodeRouting,
  ...typescriptCodeSetState,
  ...typescriptCodeUtilitytype,

  ...typescriptCodeMap,
  ...typescriptCodeTypescriptBoard,
  ...typescriptCodePagination,
  ...typescriptCodeClass,

  ...nestjsCodeTypeorm,
  ...cssCodelayout,
  ...cssCodeBasic,
  ...cssCodeSelector,
  ...cssCodePropertyValue,
  ...cssCodeBoxmodel,
  ...CommonCodeDatabase,
  ...nestjsCodeController,
  ...nestjsCodeQueryParameter,
];
