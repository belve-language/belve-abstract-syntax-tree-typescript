import type {FunctionTreeNode} from "../function/FunctionTreeNode.ts";
import type {FunctionsRestFunctionsTreeNode} from "../functions-rest-functions/FunctionsRestFunctionsTreeNode.ts";

export type FunctionsTreeNodeChildren = readonly [
	firstFunction: FunctionTreeNode,
	restFunctions: FunctionsRestFunctionsTreeNode | null,
];
