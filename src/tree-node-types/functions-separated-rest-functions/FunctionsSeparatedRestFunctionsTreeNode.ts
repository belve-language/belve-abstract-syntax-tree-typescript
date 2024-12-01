import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionsSeparatedRestFunctionsTreeNodeChildren} from "./FunctionsSeparatedRestFunctionsTreeNodeChildren.ts";
import type {functionsSeparatedRestFunctionsTreeNodeTypeName} from "./functionsSeparatedRestFunctionsTreeNodeTypeName.ts";

export type FunctionsSeparatedRestFunctionsTreeNode = TreeNode<
	typeof functionsSeparatedRestFunctionsTreeNodeTypeName,
	FunctionsSeparatedRestFunctionsTreeNodeChildren
>;
