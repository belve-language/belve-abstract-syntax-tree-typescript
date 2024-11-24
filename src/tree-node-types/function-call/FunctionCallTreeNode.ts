import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallTreeNodeChildren} from "./FunctionCallTreeNodeChildren.ts";
import type {functionCallTreeNodeTypeName} from "./functionCallTreeNodeTypeName.ts";

export type FunctionCallTreeNode = TreeNode<
	typeof functionCallTreeNodeTypeName,
	FunctionCallTreeNodeChildren
>;
