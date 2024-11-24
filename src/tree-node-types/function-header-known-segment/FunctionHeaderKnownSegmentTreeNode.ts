import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderKnownSegmentTreeNodeChildren} from "./FunctionHeaderKnownSegmentTreeNodeChildren.ts";
import type {functionHeaderKnownSegmentTreeNodeTypeName} from "./functionHeaderKnownSegmentTreeNodeTypeName.ts";
export type FunctionHeaderKnownSegmentTreeNode = TreeNode<
	typeof functionHeaderKnownSegmentTreeNodeTypeName,
	FunctionHeaderKnownSegmentTreeNodeChildren
>;
