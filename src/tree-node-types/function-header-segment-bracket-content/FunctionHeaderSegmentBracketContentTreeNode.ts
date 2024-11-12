import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderSegmentBracketContentTreeNodeChildren} from "./FunctionHeaderSegmentBracketContentTreeNodeChildren.ts";
import type {functionHeaderSegmentBracketContentTreeNodeTypeName} from "./functionHeaderSegmentBracketContentTreeNodeTypeName.ts";

export type FunctionHeaderSegmentBracketContentTreeNode = TreeNode<
	typeof functionHeaderSegmentBracketContentTreeNodeTypeName,
	FunctionHeaderSegmentBracketContentTreeNodeChildren
>;
