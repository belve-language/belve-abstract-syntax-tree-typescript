import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsTreeNode.ts";

export type FunctionCallTreeNodeChildren = readonly [
	segments:
		| FunctionCallWordStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| FunctionCallKnownStartingSegmentsTreeNode,
];
