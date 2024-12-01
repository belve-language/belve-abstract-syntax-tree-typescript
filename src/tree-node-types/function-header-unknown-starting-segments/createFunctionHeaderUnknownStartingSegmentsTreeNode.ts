import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "./FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsTreeNodeTypeName} from "./functionHeaderUnknownStartingSegmentsTreeNodeTypeName.ts";
import type {FunctionHeaderUnknownSegmentTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";

export function createFunctionHeaderUnknownStartingSegmentsTreeNode(
	firstSegment: FunctionHeaderUnknownSegmentTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode,
): FunctionHeaderUnknownStartingSegmentsTreeNode {
	return createTreeNode(functionHeaderUnknownStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
