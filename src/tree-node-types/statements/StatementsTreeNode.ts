import type {TreeNode} from "../../TreeNode.ts";
import type {StatementsTreeNodeChildren} from "./StatementsTreeNodeChildren.ts";
import type {statementsTreeNodeTypeName} from "./statementsTreeNodeTypeName.ts";

export type StatementsTreeNode = TreeNode<
	typeof statementsTreeNodeTypeName,
	StatementsTreeNodeChildren
>;
