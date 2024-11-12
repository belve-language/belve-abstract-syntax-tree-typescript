import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {OperatorCharacter} from "./OperatorCharacter.ts";

export type PaddedOperatorTreeNodeChildren = readonly [
	OperatorCharacter,
	WhitespaceCharactersTreeNode | null,
];
