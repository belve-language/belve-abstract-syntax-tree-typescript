import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderTreeNode} from "./FunctionHeaderTreeNode.ts";
import {functionHeaderTreeNodeTypeName} from "./functionHeaderTreeNodeTypeName.ts";

export function createFunctionHeaderTreeNode(
	segments:
		| FunctionHeaderWordStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderKnownStartingSegmentsTreeNode,
): FunctionHeaderTreeNode {
	return createTreeNode(functionHeaderTreeNodeTypeName, [segments]);
}
