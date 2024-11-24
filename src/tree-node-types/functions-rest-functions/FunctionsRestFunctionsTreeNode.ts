import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionsRestFunctionsTreeNodeChildren} from "./FunctionsRestFunctionsTreeNodeChildren.ts";
import type {functionsRestFunctionsTreeNodeTypeName} from "./functionsRestFunctionsTreeNodeTypeName.ts";

export type FunctionsRestFunctionsTreeNode = TreeNode<
	typeof functionsRestFunctionsTreeNodeTypeName,
	FunctionsRestFunctionsTreeNodeChildren
>;
