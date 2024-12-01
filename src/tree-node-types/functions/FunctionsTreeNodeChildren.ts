import type {FunctionTreeNode} from "../function/FunctionTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsTreeNode} from "../functions-separated-rest-functions/FunctionsSeparatedRestFunctionsTreeNode.ts";
import type {FunctionsTreeNode} from "./FunctionsTreeNode.ts";

export type FunctionsTreeNodeChildren = readonly [
	firstFunction: FunctionTreeNode,
	restFunctions: FunctionsSeparatedRestFunctionsTreeNode | null | FunctionsTreeNode,
];
