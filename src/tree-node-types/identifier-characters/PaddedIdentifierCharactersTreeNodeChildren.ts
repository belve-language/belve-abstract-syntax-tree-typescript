import type {IdentifierCharactersTreeNode} from "./IdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type PaddedIdentifierCharactersTreeNodeChildren = readonly [
	IdentifierCharactersTreeNode,
	WhitespaceCharactersTreeNode | null,
];
