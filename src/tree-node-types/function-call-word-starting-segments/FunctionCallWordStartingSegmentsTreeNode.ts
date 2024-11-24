import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNodeChildren} from "./FunctionCallWordStartingSegmentsTreeNodeChildren.ts";
import type {functionCallWordStartingSegmentsTreeNodeTypeName} from "./functionCallWordStartingSegmentsTreeNodeTypeName.ts";

export type FunctionCallWordStartingSegmentsTreeNode = TreeNode<
	typeof functionCallWordStartingSegmentsTreeNodeTypeName,
	FunctionCallWordStartingSegmentsTreeNodeChildren
>;
