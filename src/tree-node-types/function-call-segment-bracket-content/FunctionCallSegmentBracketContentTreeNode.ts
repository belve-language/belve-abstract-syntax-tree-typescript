import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallSegmentBracketContentTreeNodeChildren} from "./FunctionCallSegmentBracketContentTreeNodeChildren.ts";
import type {functionCallSegmentBracketContentTreeNodeTypeName} from "./functionCallSegmentBracketContentTreeNodeTypeName.ts";

export type FunctionCallSegmentBracketContentTreeNode = TreeNode<
	typeof functionCallSegmentBracketContentTreeNodeTypeName,
	FunctionCallSegmentBracketContentTreeNodeChildren
>;
