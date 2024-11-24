import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";

export type FunctionHeaderTreeNodeChildren = readonly [
	segments:
		| FunctionHeaderWordStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderKnownStartingSegmentsTreeNode,
];
