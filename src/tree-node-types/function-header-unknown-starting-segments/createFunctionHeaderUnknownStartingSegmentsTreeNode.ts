import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderSegmentsRestSegmentsTreeNode} from "../function-header-segments-rest-segments/FunctionHeaderSegmentsRestSegmentsTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "./FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsTreeNodeTypeName} from "./functionHeaderUnknownStartingSegmentsTreeNodeTypeName.ts";
import type {FunctionHeaderUnknownSegmentTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentTreeNode.ts";

export function createFunctionHeaderUnknownStartingSegmentsTreeNode(
	firstSegment: FunctionHeaderUnknownSegmentTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsRestSegmentsTreeNode,
): FunctionHeaderUnknownStartingSegmentsTreeNode {
	return createTreeNode(functionHeaderUnknownStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
