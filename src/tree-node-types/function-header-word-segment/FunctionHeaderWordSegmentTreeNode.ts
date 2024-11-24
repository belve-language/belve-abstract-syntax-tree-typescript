import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderWordSegmentTreeNodeChildren} from "./FunctionHeaderWordSegmentTreeNodeChildren.ts";
import type {functionHeaderWordSegmentTreeNodeTypeName} from "./functionHeaderWordSegmentTreeNodeTypeName.ts";

export type FunctionHeaderWordSegmentTreeNode = TreeNode<
	typeof functionHeaderWordSegmentTreeNodeTypeName,
	FunctionHeaderWordSegmentTreeNodeChildren
>;
