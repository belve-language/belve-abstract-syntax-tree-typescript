import type {TreeNode} from "../../TreeNode.ts";
import type {UnknownFunctionHeaderSegmentTreeNodeChildren} from "./UnknownFunctionHeaderSegmentTreeNodeChildren.ts";
import type {unknownFunctionHeaderSegmentTreeNodeTypeName} from "./unknownFunctionHeaderSegmentTreeNodeTypeName.ts";

export type UnknownFunctionHeaderSegmentTreeNode = TreeNode<
	typeof unknownFunctionHeaderSegmentTreeNodeTypeName,
	UnknownFunctionHeaderSegmentTreeNodeChildren
>;
