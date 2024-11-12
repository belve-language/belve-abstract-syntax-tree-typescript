import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedFunctionHeaderSegmentsTreeNodeChildren} from "./PaddedFunctionHeaderSegmentsTreeNodeChildren.ts";
import type {paddedFunctionHeaderSegmentsTreeNodeTypeName} from "./paddedFunctionHeaderSegmentsTreeNodeTypeName.ts";

export type PaddedFunctionHeaderSegmentsTreeNode = TreeNode<
	typeof paddedFunctionHeaderSegmentsTreeNodeTypeName,
	PaddedFunctionHeaderSegmentsTreeNodeChildren
>;
