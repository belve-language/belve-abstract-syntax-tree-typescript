import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionCallKnownSegmentContentTreeNode} from "./FunctionCallKnownSegmentContentTreeNode.ts";
import {functionCallKnownSegmentContentTreeNodeTypeName} from "./functionCallKnownSegmentContentTreeNodeTypeName.ts";

export function createFunctionCallKnownSegmentContent(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): FunctionCallKnownSegmentContentTreeNode {
	return createTreeNode(functionCallKnownSegmentContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
