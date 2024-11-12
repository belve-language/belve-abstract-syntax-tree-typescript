import type {IdentifierCharacter} from "./IdentifierCharacter.ts";
import type {IdentifierCharactersTreeNode} from "./IdentifierCharactersTreeNode.ts";

export type IdentifierCharactersTreeNodeChildren = readonly [
	IdentifierCharacter,
	IdentifierCharactersTreeNode | null,
];
