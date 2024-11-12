import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionBodyTreeNodeChildren} from "./FunctionBodyTreeNodeChildren.ts";
import type {functionBodyTreeNodeTypeName} from "./functionBodyTreeNodeTypeName.ts";

export type FunctionBodyTreeNode = TreeNode<
	typeof functionBodyTreeNodeTypeName,
	FunctionBodyTreeNodeChildren
>;
