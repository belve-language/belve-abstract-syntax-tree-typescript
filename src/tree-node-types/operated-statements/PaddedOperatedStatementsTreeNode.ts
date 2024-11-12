import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedOperatedStatementsTreeNodeChildren} from "./PaddedOperatedStatementsTreeNodeChildren.ts";
import type {paddedOperatedStatementsTreeNodeTypeName} from "./paddedOperatedStatementsTreeNodeTypeName.ts";

export type PaddedOperatedStatementsTreeNode = TreeNode<
	typeof paddedOperatedStatementsTreeNodeTypeName,
	PaddedOperatedStatementsTreeNodeChildren
>;
