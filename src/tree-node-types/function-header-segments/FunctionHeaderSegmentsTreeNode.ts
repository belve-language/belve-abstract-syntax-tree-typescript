import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderSegmentsTreeNodeChildren} from "./FunctionHeaderSegmentsTreeNodeChildren.ts";
import type {functionHeaderSegmentsTreeNodeTypeName} from "./functionHeaderSegmentsTreeNodeTypeName.ts";

export type FunctionHeaderSegmentsTreeNode = TreeNode<
	typeof functionHeaderSegmentsTreeNodeTypeName,
	FunctionHeaderSegmentsTreeNodeChildren
>;
