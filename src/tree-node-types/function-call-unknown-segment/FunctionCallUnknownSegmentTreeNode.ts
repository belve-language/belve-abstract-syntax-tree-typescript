import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallUnknownSegmentTreeNodeChildren} from "./FunctionCallUnknownSegmentTreeNodeChildren.ts";
import type {functionCallUnknownSegmentTreeNodeTypeName} from "./functionCallUnknownSegmentTreeNodeTypeName.ts";

export type FunctionCallUnknownSegmentTreeNode = TreeNode<
	typeof functionCallUnknownSegmentTreeNodeTypeName,
	FunctionCallUnknownSegmentTreeNodeChildren
>;
