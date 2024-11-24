import type {FunctionHeaderSegmentsRestSegmentsTreeNode} from "../function-header-segments-rest-segments/FunctionHeaderSegmentsRestSegmentsTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownSegmentTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "./FunctionHeaderUnknownStartingSegmentsTreeNode.ts";

export type FunctionHeaderUnknownStartingSegmentsTreeNodeChildren = readonly [
	firstSegment: FunctionHeaderUnknownSegmentTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsRestSegmentsTreeNode,
];
