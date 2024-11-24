import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNode} from "../function-call-segments-rest-segments/FunctionCallSegmentsRestSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {FunctionCallWordSegmentTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentTreeNode.ts";

export type FunctionCallWordStartingSegmentsTreeNodeChildren = readonly [
	firstSegment: FunctionCallWordSegmentTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| null
		| FunctionCallSegmentsRestSegmentsTreeNode,
];
