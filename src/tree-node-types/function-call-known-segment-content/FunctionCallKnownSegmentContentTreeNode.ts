import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallKnownSegmentContentTreeNodeChildren} from "./FunctionCallKnownSegmentContentTreeNodeChildren.ts";
import type {functionCallKnownSegmentContentTreeNodeTypeName} from "./functionCallKnownSegmentContentTreeNodeTypeName.ts";

export type FunctionCallKnownSegmentContentTreeNode = TreeNode<
	typeof functionCallKnownSegmentContentTreeNodeTypeName,
	FunctionCallKnownSegmentContentTreeNodeChildren
>;
