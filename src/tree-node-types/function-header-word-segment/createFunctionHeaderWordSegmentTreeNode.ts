import {createTreeNode} from "../../createTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";
import type {FunctionHeaderWordSegmentTreeNode} from "./FunctionHeaderWordSegmentTreeNode.ts";
import {functionHeaderWordSegmentTreeNodeTypeName} from "./functionHeaderWordSegmentTreeNodeTypeName.ts";

export function createFunctionHeaderWordSegmentTreeNode(
	identifierCharacters: IdentifierCharactersTreeNode,
): FunctionHeaderWordSegmentTreeNode {
	return createTreeNode(functionHeaderWordSegmentTreeNodeTypeName, [identifierCharacters]);
}
