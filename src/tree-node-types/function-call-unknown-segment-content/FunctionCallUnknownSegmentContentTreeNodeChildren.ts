import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionCallUnknownSegmentContentTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
];
