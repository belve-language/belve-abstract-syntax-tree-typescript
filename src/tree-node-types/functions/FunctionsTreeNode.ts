import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionsTreeNodeChildren} from "./FunctionsTreeNodeChildren.ts";
import type {functionsTreeNodeTypeName} from "./functionsTreeNodeTypeName.ts";

export type FunctionsTreeNode = TreeNode<
	typeof functionsTreeNodeTypeName,
	FunctionsTreeNodeChildren
>;
