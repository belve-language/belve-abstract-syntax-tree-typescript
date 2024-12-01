import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "./FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordSegmentTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentTreeNode.ts";
import {functionHeaderWordStartingSegmentsTreeNodeTypeName} from "./functionHeaderWordStartingSegmentsTreeNodeTypeName.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";

export function createFunctionHeaderWordStartingSegmentsTreeNode(
	firstSegment: FunctionHeaderWordSegmentTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode,
): FunctionHeaderWordStartingSegmentsTreeNode {
	return createTreeNode(functionHeaderWordStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
