import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNodeChildren} from "./FunctionCallSegmentsRestSegmentsTreeNodeChildren.ts";
import type {functionCallSegmentsRestSegmentsTreeNodeTypeName} from "./functionCallSegmentsRestSegmentsTreeNodeTypeName.ts";

export type FunctionCallSegmentsRestSegmentsTreeNode = TreeNode<
	typeof functionCallSegmentsRestSegmentsTreeNodeTypeName,
	FunctionCallSegmentsRestSegmentsTreeNodeChildren
>;
