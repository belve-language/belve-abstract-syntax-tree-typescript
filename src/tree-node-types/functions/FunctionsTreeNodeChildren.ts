import type {FunctionTreeNode} from "../function/FunctionTreeNode.ts";
import type {FunctionsTreeNode} from "./FunctionsTreeNode.ts";

export type FunctionsTreeNodeChildren = readonly [
	firstFunction: FunctionTreeNode,
	restFunctions: FunctionsTreeNode | null,
];
