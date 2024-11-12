import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderTreeNodeChildren} from "./FunctionHeaderTreeNodeChildren.ts";
import type {functionHeaderTreeNodeTypeName} from "./FunctionHeaderTreeNodeTypeName.ts";

export type FunctionHeaderTreeNode = TreeNode<
	typeof functionHeaderTreeNodeTypeName,
	FunctionHeaderTreeNodeChildren
>;
