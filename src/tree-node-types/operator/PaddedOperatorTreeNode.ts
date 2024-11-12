import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedOperatorTreeNodeChildren} from "./PaddedOperatorTreeNodeChildren.ts";
import type {paddedOperatorTreeNodeTypeName} from "./paddedOperatorTreeNodeTypeName.ts";

export type PaddedOperatorTreeNode = TreeNode<
	typeof paddedOperatorTreeNodeTypeName,
	PaddedOperatorTreeNodeChildren
>;
