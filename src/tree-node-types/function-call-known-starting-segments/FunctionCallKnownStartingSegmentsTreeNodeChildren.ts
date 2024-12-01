import type {FunctionCallKnownSegmentTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentTreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNode} from "../function-call-segments-rest-segments/FunctionCallSegmentsRestSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsTreeNode} from "./FunctionCallKnownStartingSegmentsTreeNode.ts";

export type FunctionCallKnownStartingSegmentsTreeNodeChildren = readonly [
	firstSegment: FunctionCallKnownSegmentTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| FunctionCallWordStartingSegmentsTreeNode
		| null
		| FunctionCallSegmentsRestSegmentsTreeNode,
];
