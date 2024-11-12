import type {PaddedFunctionHeaderSegmentTreeNode} from "../function-header-segment/PaddedFunctionHeaderSegmentTreeNode.ts";
import type {PaddedFunctionHeaderSegmentsTreeNode} from "./PaddedFunctionHeaderSegmentsTreeNode.ts";

export type PaddedFunctionHeaderSegmentsTreeNodeChildren = readonly [
	PaddedFunctionHeaderSegmentTreeNode,
	PaddedFunctionHeaderSegmentsTreeNode | null,
];
