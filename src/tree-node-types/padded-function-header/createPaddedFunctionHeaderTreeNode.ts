import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderTreeNode} from "../function-header/FunctionHeaderTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {PaddedFunctionHeaderTreeNode} from "./PaddedFunctionHeaderTreeNode.ts";
import {paddedFunctionHeaderTreeNodeTypeName} from "./paddedFunctionHeaderTreeNodeTypeName.ts";

export function createPaddedFunctionHeaderTreeNode(
	header: FunctionHeaderTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): PaddedFunctionHeaderTreeNode {
	return createTreeNode(paddedFunctionHeaderTreeNodeTypeName, [header, finalWhitespaceCharacters]);
}
