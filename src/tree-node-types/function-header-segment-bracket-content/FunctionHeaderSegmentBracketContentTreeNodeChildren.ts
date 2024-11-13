import type {PaddedIdentifierCharactersTreeNode} from "../padded-identifier-characters/PaddedIdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionHeaderSegmentBracketContentTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode,
	identifierCharacters: PaddedIdentifierCharactersTreeNode | null,
];
