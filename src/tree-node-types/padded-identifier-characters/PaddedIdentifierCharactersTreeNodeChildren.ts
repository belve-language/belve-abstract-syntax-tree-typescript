import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type PaddedIdentifierCharactersTreeNodeChildren = readonly [
	identifierCharacters: IdentifierCharactersTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
];
