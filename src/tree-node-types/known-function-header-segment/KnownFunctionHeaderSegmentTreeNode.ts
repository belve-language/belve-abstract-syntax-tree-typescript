import type {TreeNode} from "../../TreeNode.ts";
import type {KnownFunctionHeaderSegmentTreeNodeChildren} from "./KnownFunctionHeaderSegmentTreeNodeChildren.ts";
import type {knownFunctionHeaderSegmentTreeNodeTypeName} from "./knownFunctionHeaderSegmentTreeNodeTypeName.ts";

export type KnownFunctionHeaderSegmentTreeNode = TreeNode<
	typeof knownFunctionHeaderSegmentTreeNodeTypeName,
	KnownFunctionHeaderSegmentTreeNodeChildren
>;
