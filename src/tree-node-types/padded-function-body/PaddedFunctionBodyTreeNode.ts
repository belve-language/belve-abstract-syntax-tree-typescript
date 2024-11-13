import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedFunctionBodyTreeNodeChildren} from "./PaddedFunctionBodyTreeNodeChildren.ts";
import type {paddedFunctionBodyTreeNodeTypeName} from "./paddedFunctionBodyTreeNodeTypeName.ts";

export type PaddedFunctionBodyTreeNode = TreeNode<
	typeof paddedFunctionBodyTreeNodeTypeName,
	PaddedFunctionBodyTreeNodeChildren
>;
