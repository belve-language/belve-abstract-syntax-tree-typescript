import type {IdentifierCharacter} from "../../characters/IdentifierCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "./IdentifierCharactersTreeNode.ts";
import {identifierCharactersTreeNodeTypeName} from "./identifierCharactersTreeNodeTypeName.ts";

export function createIdentifierCharactersTreeNode(
	firstCharacter: IdentifierCharacter,
	restCharacters: IdentifierCharactersTreeNode | null,
): IdentifierCharactersTreeNode {
	return createTreeNode(identifierCharactersTreeNodeTypeName, [firstCharacter, restCharacters]);
}
