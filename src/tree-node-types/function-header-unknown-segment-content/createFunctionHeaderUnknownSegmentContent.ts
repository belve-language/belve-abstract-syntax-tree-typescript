import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentTreeNode} from "./FunctionHeaderUnknownSegmentContentTreeNode.ts";
import {functionHeaderUnknownSegmentContentTreeNodeTypeName} from "./functionHeaderUnknownSegmentContentTreeNodeTypeName.ts";

export function createFunctionHeaderUnknownSegmentContent(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): FunctionHeaderUnknownSegmentContentTreeNode {
	return createTreeNode(functionHeaderUnknownSegmentContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
