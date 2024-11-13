import type {TreeNode} from "../../TreeNode.ts";
import type {OperatedStatementsTreeNodeChildren} from "./OperatedStatementsTreeNodeChildren.ts";
import type {operatedStatementsTreeNodeTypeName} from "./operatedStatementsTreeNodeTypeName.ts";

export type OperatedStatementsTreeNode = TreeNode<
	typeof operatedStatementsTreeNodeTypeName,
	OperatedStatementsTreeNodeChildren
>;
