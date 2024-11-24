import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNodeChildren} from "./FunctionHeaderKnownStartingSegmentsTreeNodeChildren.ts";
import type {functionHeaderKnownStartingSegmentsTreeNodeTypeName} from "./functionHeaderKnownStartingSegmentsTreeNodeTypeName.ts";

export type FunctionHeaderKnownStartingSegmentsTreeNode = TreeNode<
	typeof functionHeaderKnownStartingSegmentsTreeNodeTypeName,
	FunctionHeaderKnownStartingSegmentsTreeNodeChildren
>;
