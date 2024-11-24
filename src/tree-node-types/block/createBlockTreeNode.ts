import type {ClosingCurlyBracketCharacter} from "../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/OpeningCurlyBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {BlockContentTreeNode} from "../block-content/BlockContentTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {BlockTreeNode} from "./BlockTreeNode.ts";
import {blockTreeNodeTypeName} from "./blockTreeNodeTypeName.ts";

export function createBlockTreeNode(
	openingBracketCharacter: OpeningCurlyBracketCharacter,
	content: BlockContentTreeNode | null | WhitespaceCharactersTreeNode,
	closingBracketCharacter: ClosingCurlyBracketCharacter,
): BlockTreeNode {
	return createTreeNode(blockTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
