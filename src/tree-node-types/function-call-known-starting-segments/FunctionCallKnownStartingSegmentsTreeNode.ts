import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallKnownStartingSegmentsTreeNodeChildren} from "./FunctionCallKnownStartingSegmentsTreeNodeChildren.ts";
import type {functionCallKnownStartingSegmentsTreeNodeTypeName} from "./functionCallKnownStartingSegmentsTreeNodeTypeName.ts";

export type FunctionCallKnownStartingSegmentsTreeNode = TreeNode<
	typeof functionCallKnownStartingSegmentsTreeNodeTypeName,
	FunctionCallKnownStartingSegmentsTreeNodeChildren
>;
