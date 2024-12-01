import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionsTreeNode} from "../functions/FunctionsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import {functionsSeparatedRestFunctionsTreeNodeTypeName} from "./functionsSeparatedRestFunctionsTreeNodeTypeName.ts";
import type {FunctionsSeparatedRestFunctionsTreeNode} from "./FunctionsSeparatedRestFunctionsTreeNode.ts";

export function FunctionsSeparatedRestFunctionsTreeNode(
	whitespaceCharacters: WhitespaceCharactersTreeNode,
	functions: FunctionsTreeNode,
): FunctionsSeparatedRestFunctionsTreeNode {
	return createTreeNode(functionsSeparatedRestFunctionsTreeNodeTypeName, [
		whitespaceCharacters,
		functions,
	]);
}
