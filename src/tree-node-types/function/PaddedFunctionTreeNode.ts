import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedFunctionTreeNodeChildren} from "./PaddedFunctionTreeNodeChildren.ts";
import type {paddedFunctionTreeNodeTypeName} from "./paddedFunctionTreeNodeTypeName.ts";

export type PaddedFunctionTreeNode = TreeNode<
	typeof paddedFunctionTreeNodeTypeName,
	PaddedFunctionTreeNodeChildren
>;
