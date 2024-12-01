import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentTreeNode} from "./FunctionHeaderKnownSegmentContentTreeNode.ts";
import {functionHeaderKnownSegmentContentTreeNodeTypeName} from "./functionHeaderKnownSegmentContentTreeNodeTypeName.ts";

export function createFunctionHeaderKnownSegmentContent(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): FunctionHeaderKnownSegmentContentTreeNode {
	return createTreeNode(functionHeaderKnownSegmentContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
