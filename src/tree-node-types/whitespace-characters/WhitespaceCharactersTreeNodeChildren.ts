import type {WhitespaceCharacter} from "../../characters/WhitespaceCharacter.ts";
import type {WhitespaceCharactersTreeNode} from "./WhitespaceCharactersTreeNode.ts";

export type WhitespaceCharactersTreeNodeChildren = readonly [
	firstCharacter: WhitespaceCharacter,
	restCharacters: WhitespaceCharactersTreeNode | null,
];
