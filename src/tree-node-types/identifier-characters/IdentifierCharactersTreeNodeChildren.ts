import type {IdentifierCharacter} from "../../characters/IdentifierCharacter.ts";
import type {IdentifierCharactersTreeNode} from "./IdentifierCharactersTreeNode.ts";

export type IdentifierCharactersTreeNodeChildren = readonly [
	firstCharacter: IdentifierCharacter,
	restCharacters: IdentifierCharactersTreeNode | null,
];
