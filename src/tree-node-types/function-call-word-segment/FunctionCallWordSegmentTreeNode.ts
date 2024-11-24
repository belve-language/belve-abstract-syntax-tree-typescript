import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallWordSegmentTreeNodeChildren} from "./FunctionCallWordSegmentTreeNodeChildren.ts";
import type {functionCallWordSegmentTreeNodeTypeName} from "./functionCallWordSegmentTreeNodeTypeName.ts";

export type FunctionCallWordSegmentTreeNode = TreeNode<
	typeof functionCallWordSegmentTreeNodeTypeName,
	FunctionCallWordSegmentTreeNodeChildren
>;
