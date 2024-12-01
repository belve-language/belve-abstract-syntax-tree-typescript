import type {FunctionHeaderKnownSegmentTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "./FunctionHeaderKnownStartingSegmentsTreeNode.ts";

export type FunctionHeaderKnownStartingSegmentsTreeNodeChildren = readonly [
	firstSegment: FunctionHeaderKnownSegmentTreeNode,

	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderWordStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode,
];
