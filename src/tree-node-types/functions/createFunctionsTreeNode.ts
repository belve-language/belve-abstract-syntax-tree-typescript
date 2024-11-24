import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionTreeNode} from "../function/FunctionTreeNode.ts";
import type {FunctionsRestFunctionsTreeNode} from "../functions-rest-functions/FunctionsRestFunctionsTreeNode.ts";
import type {FunctionsTreeNode} from "./FunctionsTreeNode.ts";
import {functionsTreeNodeTypeName} from "./functionsTreeNodeTypeName.ts";

export function createFunctionsTreeNode(
	firstFunction: FunctionTreeNode,
	restFunctions: FunctionsRestFunctionsTreeNode | null,
): FunctionsTreeNode {
	return createTreeNode(functionsTreeNodeTypeName, [firstFunction, restFunctions]);
}
