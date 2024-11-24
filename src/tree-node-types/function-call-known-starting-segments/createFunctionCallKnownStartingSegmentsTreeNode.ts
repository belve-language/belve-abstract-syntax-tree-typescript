import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallKnownSegmentTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentTreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNode} from "../function-call-segments-rest-segments/FunctionCallSegmentsRestSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsTreeNode} from "./FunctionCallKnownStartingSegmentsTreeNode.ts";
import {functionCallKnownStartingSegmentsTreeNodeTypeName} from "./functionCallKnownStartingSegmentsTreeNodeTypeName.ts";

export function createFunctionCallKnownStartingSegmentsTreeNode(
	firstSegment: FunctionCallKnownSegmentTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| null
		| FunctionCallSegmentsRestSegmentsTreeNode,
): FunctionCallKnownStartingSegmentsTreeNode {
	return createTreeNode(functionCallKnownStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
