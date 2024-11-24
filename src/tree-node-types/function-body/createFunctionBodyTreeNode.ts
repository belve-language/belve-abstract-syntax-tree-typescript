import type {ClosingCurlyBracketCharacter} from "../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/OpeningCurlyBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionBodyContentTreeNode} from "../function-body-content/FunctionBodyContentTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionBodyTreeNode} from "./FunctionBodyTreeNode.ts";
import {functionBodyTreeNodeTypeName} from "./functionBodyTreeNodeTypeName.ts";

export function createFunctionBodyTreeNode(
	openingBracketCharacter: OpeningCurlyBracketCharacter,
	content: FunctionBodyContentTreeNode | null | WhitespaceCharactersTreeNode,
	closingBracketCharacter: ClosingCurlyBracketCharacter,
): FunctionBodyTreeNode {
	return createTreeNode(functionBodyTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
