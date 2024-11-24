import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNodeChildren} from "./FunctionHeaderWordStartingSegmentsTreeNodeChildren.ts";
import type {functionHeaderWordStartingSegmentsTreeNodeTypeName} from "./functionHeaderWordStartingSegmentsTreeNodeTypeName.ts";

export type FunctionHeaderWordStartingSegmentsTreeNode = TreeNode<
	typeof functionHeaderWordStartingSegmentsTreeNodeTypeName,
	FunctionHeaderWordStartingSegmentsTreeNodeChildren
>;
