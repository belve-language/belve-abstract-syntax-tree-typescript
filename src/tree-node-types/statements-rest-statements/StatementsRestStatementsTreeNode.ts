import type {TreeNode} from "../../TreeNode.ts";
import type {StatementsRestStatementsTreeNodeChildren} from "./StatementsRestStatementsTreeNodeChildren.ts";
import type {statementsRestStatementsTreeNodeTypeName} from "./statementsRestStatementsTreeNodeTypeName.ts";

export type StatementsRestStatementsTreeNode = TreeNode<
	typeof statementsRestStatementsTreeNodeTypeName,
	StatementsRestStatementsTreeNodeChildren
>;
