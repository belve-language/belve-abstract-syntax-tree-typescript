import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNode} from "../function-call-segments-rest-segments/FunctionCallSegmentsRestSegmentsTreeNode.ts";
import type {FunctionCallUnknownSegmentTreeNode} from "../function-call-unknown-segment/FunctionCallUnknownSegmentTreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "./FunctionCallUnknownStartingSegmentsTreeNode.ts";

export type FunctionCallUnknownStartingSegmentsTreeNodeChildren = readonly [
	firstSegment: FunctionCallUnknownSegmentTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| FunctionCallWordStartingSegmentsTreeNode
		| null
		| FunctionCallSegmentsRestSegmentsTreeNode,
];
