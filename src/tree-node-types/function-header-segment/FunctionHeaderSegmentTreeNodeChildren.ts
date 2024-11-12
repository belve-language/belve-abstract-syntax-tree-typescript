import type {KnownFunctionHeaderSegmentTreeNode} from "../known-function-header-segment/KnownFunctionHeaderSegmentTreeNode.ts";
import type {UnknownFunctionHeaderSegmentTreeNode} from "../unknown-function-header-segment/UnknownFunctionHeaderSegmentTreeNode.ts";
import type {WordFunctionHeaderSegmentTreeNode} from "../unknown-function-header-segment/WordFunctionHeaderSegmentTreeNode.ts";

export type FunctionHeaderSegmentTreeNodeChildren = readonly [
	| WordFunctionHeaderSegmentTreeNode
	| KnownFunctionHeaderSegmentTreeNode
	| UnknownFunctionHeaderSegmentTreeNode,
];
