import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNode} from "../function-call-segments-rest-segments/FunctionCallSegmentsRestSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {FunctionCallWordSegmentTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentTreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNode} from "./FunctionCallWordStartingSegmentsTreeNode.ts";
import {functionCallWordStartingSegmentsTreeNodeTypeName} from "./functionCallWordStartingSegmentsTreeNodeTypeName.ts";

export function createFunctionCallWordStartingSegmentsTreeNode(
	firstSegment: FunctionCallWordSegmentTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| null
		| FunctionCallSegmentsRestSegmentsTreeNode,
): FunctionCallWordStartingSegmentsTreeNode {
	return createTreeNode(functionCallWordStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
