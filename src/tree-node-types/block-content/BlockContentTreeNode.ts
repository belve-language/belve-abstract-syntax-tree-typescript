import type {TreeNode} from "../../TreeNode.ts";
import type {BlockContentTreeNodeChildren} from "./BlockContentTreeNodeChildren.ts";
import type {blockContentTreeNodeTypeName} from "./blockContentTreeNodeTypeName.ts";

export type BlockContentTreeNode = TreeNode<
	typeof blockContentTreeNodeTypeName,
	BlockContentTreeNodeChildren
>;
