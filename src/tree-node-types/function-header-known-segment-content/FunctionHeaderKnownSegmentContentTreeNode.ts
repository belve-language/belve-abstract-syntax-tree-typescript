import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderKnownSegmentContentTreeNodeChildren} from "./FunctionHeaderKnownSegmentContentTreeNodeChildren.ts";
import type {functionHeaderKnownSegmentContentTreeNodeTypeName} from "./functionHeaderKnownSegmentContentTreeNodeTypeName.ts";

export type FunctionHeaderKnownSegmentContentTreeNode = TreeNode<
	typeof functionHeaderKnownSegmentContentTreeNodeTypeName,
	FunctionHeaderKnownSegmentContentTreeNodeChildren
>;
