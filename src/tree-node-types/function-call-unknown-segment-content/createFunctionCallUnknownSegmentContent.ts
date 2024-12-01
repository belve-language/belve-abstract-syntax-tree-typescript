import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionCallUnknownSegmentContentTreeNode} from "./FunctionCallUnknownSegmentContentTreeNode.ts";
import {functionCallUnknownSegmentContentTreeNodeTypeName} from "./functionCallUnknownSegmentContentTreeNodeTypeName.ts";

export function createFunctionCallUnknownSegmentContent(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): FunctionCallUnknownSegmentContentTreeNode {
	return createTreeNode(functionCallUnknownSegmentContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
