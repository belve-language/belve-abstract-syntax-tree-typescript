import {createTreeNode} from "../../createTreeNode.ts";
import type {StatementsTreeNode} from "../statements/StatementsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionBodyContentTreeNode} from "./FunctionBodyContentTreeNode.ts";
import {functionBodyContentTreeNodeTypeName} from "./functionBodyContentTreeNodeTypeName.ts";

export function createFunctionBodyContentTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	statements: StatementsTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): FunctionBodyContentTreeNode {
	return createTreeNode(functionBodyContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		statements,
		finalWhitespaceCharacters,
	]);
}
