import {createTreeNode} from "../../createTreeNode.ts";
import type {StatementsTreeNode} from "../statements/StatementsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {BlockContentTreeNode} from "./BlockContentTreeNode.ts";
import {blockContentTreeNodeTypeName} from "./blockContentTreeNodeTypeName.ts";

export function createBlockContentTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	statements: StatementsTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): BlockContentTreeNode {
	return createTreeNode(blockContentTreeNodeTypeName, [
		initialWhitespaceCharacters,
		statements,
		finalWhitespaceCharacters,
	]);
}
