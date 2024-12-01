import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownSegmentTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "./FunctionHeaderUnknownStartingSegmentsTreeNode.ts";

export type FunctionHeaderUnknownStartingSegmentsTreeNodeChildren = readonly [
	firstSegment: FunctionHeaderUnknownSegmentTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderWordStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode,
];
