import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedFunctionHeaderTreeNodeChildren} from "./PaddedFunctionHeaderTreeNodeChildren.ts";
import type {paddedFunctionHeaderTreeNodeTypeName} from "./paddedFunctionHeaderTreeNodeTypeName.ts";

export type PaddedFunctionHeaderTreeNode = TreeNode<
	typeof paddedFunctionHeaderTreeNodeTypeName,
	PaddedFunctionHeaderTreeNodeChildren
>;
