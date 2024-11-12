import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionBodyContentTreeNodeChildren} from "./FunctionBodyContentTreeNodeChildren.ts";
import type {functionBodyContentTreeNodeTypeName} from "./functionBodyContentTreeNodeTypeName.ts";

export type FunctionBodyContentTreeNode = TreeNode<
	typeof functionBodyContentTreeNodeTypeName,
	FunctionBodyContentTreeNodeChildren
>;
