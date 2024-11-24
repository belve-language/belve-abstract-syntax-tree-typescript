import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {FunctionCallWordSegmentTreeNode} from "./FunctionCallWordSegmentTreeNode.ts";
import {functionCallWordSegmentTreeNodeTypeName} from "./functionCallWordSegmentTreeNodeTypeName.ts";

export function createFunctionCallWordSegmentTreeNode(
	identifierCharacters: IdentifierCharactersTreeNode,
): FunctionCallWordSegmentTreeNode {
	return createTreeNode(functionCallWordSegmentTreeNodeTypeName, [identifierCharacters]);
}
