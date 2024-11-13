import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {OperatorCharacter} from "../../characters/OperatorCharacter.ts";

export type PaddedOperatorTreeNodeChildren = readonly [
	operatorCharacter: OperatorCharacter,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
];
