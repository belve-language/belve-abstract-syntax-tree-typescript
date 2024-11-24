import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionHeaderSegmentBracketContentTreeNode} from "./FunctionHeaderSegmentBracketContentTreeNode.ts";
import {functionHeaderSegmentBracketContentTreeNodeTypeName} from "./functionHeaderSegmentBracketContentTreeNodeTypeName.ts";

export function createFunctionHeaderSegmentBracketContent(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): FunctionHeaderSegmentBracketContentTreeNode {
	return createTreeNode(functionHeaderSegmentBracketContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
