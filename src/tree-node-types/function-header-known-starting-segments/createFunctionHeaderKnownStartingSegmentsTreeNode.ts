import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderSegmentsRestSegmentsTreeNode} from "../function-header-segments-rest-segments/FunctionHeaderSegmentsRestSegmentsTreeNode.ts";
import type {FunctionHeaderKnownSegmentTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "./FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import {functionHeaderKnownStartingSegmentsTreeNodeTypeName} from "./functionHeaderKnownStartingSegmentsTreeNodeTypeName.ts";

export function createFunctionHeaderKnownStartingSegmentsTreeNode(
	firstSegment: FunctionHeaderKnownSegmentTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsRestSegmentsTreeNode,
): FunctionHeaderKnownStartingSegmentsTreeNode {
	return createTreeNode(functionHeaderKnownStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
