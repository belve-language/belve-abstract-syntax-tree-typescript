import type {TreeNode} from "../../TreeNode.ts";
import type {WordFunctionHeaderSegmentTreeNodeChildren} from "../word-function-header-segment/WordFunctionHeaderSegmentTreeNodeChildren.ts";
import type {wordFunctionHeaderSegmentTreeNodeTypeName} from "../word-function-header-segment/wordFunctionHeaderSegmentTreeNodeTypeName.ts";

export type WordFunctionHeaderSegmentTreeNode = TreeNode<
	typeof wordFunctionHeaderSegmentTreeNodeTypeName,
	WordFunctionHeaderSegmentTreeNodeChildren
>;
