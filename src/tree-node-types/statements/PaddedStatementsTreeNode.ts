import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedStatementsTreeNodeChildren} from "./PaddedStatementsTreeNodeChildren.ts";
import type {paddedStatementsTreeNodeTypeName} from "./paddedStatementsTreeNodeTypeName.ts";

export type PaddedStatementsTreeNode = TreeNode<
	typeof paddedStatementsTreeNodeTypeName,
	PaddedStatementsTreeNodeChildren
>;
