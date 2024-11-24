import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionCallSegmentBracketContentTreeNode} from "./FunctionCallSegmentBracketContentTreeNode.ts";
import {functionCallSegmentBracketContentTreeNodeTypeName} from "./functionCallSegmentBracketContentTreeNodeTypeName.ts";

export function createFunctionCallSegmentBracketContent(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): FunctionCallSegmentBracketContentTreeNode {
	return createTreeNode(functionCallSegmentBracketContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
