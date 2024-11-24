import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderUnknownSegmentTreeNodeChildren} from "./FunctionHeaderUnknownSegmentTreeNodeChildren.ts";
import type {functionHeaderUnknownSegmentTreeNodeTypeName} from "./functionHeaderUnknownSegmentTreeNodeTypeName.ts";

export type FunctionHeaderUnknownSegmentTreeNode = TreeNode<
	typeof functionHeaderUnknownSegmentTreeNodeTypeName,
	FunctionHeaderUnknownSegmentTreeNodeChildren
>;
