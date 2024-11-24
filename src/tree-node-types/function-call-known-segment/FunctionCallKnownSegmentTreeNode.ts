import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallKnownSegmentTreeNodeChildren} from "./FunctionCallKnownSegmentTreeNodeChildren.ts";
import type {functionCallKnownSegmentTreeNodeTypeName} from "./functionCallKnownSegmentTreeNodeTypeName.ts";

export type FunctionCallKnownSegmentTreeNode = TreeNode<
	typeof functionCallKnownSegmentTreeNodeTypeName,
	FunctionCallKnownSegmentTreeNodeChildren
>;
