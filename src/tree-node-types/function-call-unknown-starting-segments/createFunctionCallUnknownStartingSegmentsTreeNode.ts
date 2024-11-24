import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNode} from "../function-call-segments-rest-segments/FunctionCallSegmentsRestSegmentsTreeNode.ts";
import type {FunctionCallUnknownSegmentTreeNode} from "../function-call-unknown-segment/FunctionCallUnknownSegmentTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "./FunctionCallUnknownStartingSegmentsTreeNode.ts";
import {functionCallUnknownStartingSegmentsTreeNodeTypeName} from "./functionCallUnknownStartingSegmentsTreeNodeTypeName.ts";

export function createFunctionCallUnknownStartingSegmentsTreeNode(
	firstSegment: FunctionCallUnknownSegmentTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| null
		| FunctionCallSegmentsRestSegmentsTreeNode,
): FunctionCallUnknownStartingSegmentsTreeNode {
	return createTreeNode(functionCallUnknownStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
