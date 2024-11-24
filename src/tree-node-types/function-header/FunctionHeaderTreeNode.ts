import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderTreeNodeChildren} from "./FunctionHeaderTreeNodeChildren.ts";
import type {functionHeaderTreeNodeTypeName} from "./functionHeaderTreeNodeTypeName.ts";

export type FunctionHeaderTreeNode = TreeNode<
	typeof functionHeaderTreeNodeTypeName,
	FunctionHeaderTreeNodeChildren
>;
