import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionTreeNode} from "../function/FunctionTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsTreeNode} from "../functions-separated-rest-functions/FunctionsSeparatedRestFunctionsTreeNode.ts";
import type {FunctionsTreeNode} from "./FunctionsTreeNode.ts";
import {functionsTreeNodeTypeName} from "./functionsTreeNodeTypeName.ts";

export function createFunctionsTreeNode(
	firstFunction: FunctionTreeNode,
	restFunctions: FunctionsSeparatedRestFunctionsTreeNode | null | FunctionsTreeNode,
): FunctionsTreeNode {
	return createTreeNode(functionsTreeNodeTypeName, [firstFunction, restFunctions]);
}
