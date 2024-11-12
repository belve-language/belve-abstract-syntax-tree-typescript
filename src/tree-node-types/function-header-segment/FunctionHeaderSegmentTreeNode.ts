import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderSegmentTreeNodeChildren} from "./FunctionHeaderSegmentTreeNodeChildren.ts";
import type {functionHeaderSegmentTreeNodeTypeName} from "./functionHeaderSegmentTreeNodeTypeName.ts";

export type FunctionHeaderSegmentTreeNode = TreeNode<
	typeof functionHeaderSegmentTreeNodeTypeName,
	FunctionHeaderSegmentTreeNodeChildren
>;
