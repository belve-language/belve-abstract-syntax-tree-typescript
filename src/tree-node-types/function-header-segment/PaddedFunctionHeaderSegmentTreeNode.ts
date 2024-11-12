import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedFunctionHeaderSegmentTreeNodeChildren} from "./PaddedFunctionHeaderSegmentTreeNodeChildren.ts";
import type {paddedFunctionHeaderSegmentTreeNodeTypeName} from "./paddedFunctionHeaderSegmentTreeNodeTypeName.ts";

export type PaddedFunctionHeaderSegmentTreeNode = TreeNode<
	typeof paddedFunctionHeaderSegmentTreeNodeTypeName,
	PaddedFunctionHeaderSegmentTreeNodeChildren
>;
