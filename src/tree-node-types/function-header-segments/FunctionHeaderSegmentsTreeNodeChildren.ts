import type {PaddedFunctionHeaderSegmentTreeNode} from "../padded-function-header-segment/PaddedFunctionHeaderSegmentTreeNode.ts";
import type {FunctionHeaderSegmentsTreeNode} from "./FunctionHeaderSegmentsTreeNode.ts";

export type FunctionHeaderSegmentsTreeNodeChildren = readonly [
	firstSegment: PaddedFunctionHeaderSegmentTreeNode,
	restSegments: FunctionHeaderSegmentsTreeNode | null,
];
