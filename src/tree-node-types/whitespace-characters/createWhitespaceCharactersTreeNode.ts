import type {WhitespaceCharacter} from "../../characters/WhitespaceCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "./WhitespaceCharactersTreeNode.ts";
import {whitespaceCharactersTreeNodeTypeName} from "./whitespaceCharactersTreeNodeTypeName.ts";

export function createWhitespaceCharactersTreeNode(
	firstCharacter: WhitespaceCharacter,
	restCharacters: WhitespaceCharactersTreeNode | null,
): WhitespaceCharactersTreeNode {
	return createTreeNode(whitespaceCharactersTreeNodeTypeName, [firstCharacter, restCharacters]);
}
