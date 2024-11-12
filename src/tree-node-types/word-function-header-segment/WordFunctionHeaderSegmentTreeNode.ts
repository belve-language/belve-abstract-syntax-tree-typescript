import type {TreeNode} from "../../TreeNode.ts";
import type {WordFunctionHeaderSegmentTreeNodeChildren} from "./WordFunctionHeaderSegmentTreeNodeChildren.ts";
import type {wordFunctionHeaderSegmentTreeNodeTypeName} from "./wordFunctionHeaderSegmentTreeNodeTypeName.ts";

export type WordFunctionHeaderSegmentTreeNode = TreeNode<
	typeof wordFunctionHeaderSegmentTreeNodeTypeName,
	WordFunctionHeaderSegmentTreeNodeChildren
>;
