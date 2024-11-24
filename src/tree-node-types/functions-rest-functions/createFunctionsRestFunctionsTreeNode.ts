import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionsTreeNode} from "../functions/FunctionsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import {functionsRestFunctionsTreeNodeTypeName} from "./functionsRestFunctionsTreeNodeTypeName.ts";
import type {FunctionsRestFunctionsTreeNode} from "./FunctionsRestFunctionsTreeNode.ts";

export function FunctionsRestFunctionsTreeNode(
	whitespaceCharacters: WhitespaceCharactersTreeNode | null,
	functions: FunctionsTreeNode,
): FunctionsRestFunctionsTreeNode {
	return createTreeNode(functionsRestFunctionsTreeNodeTypeName, [whitespaceCharacters, functions]);
}
