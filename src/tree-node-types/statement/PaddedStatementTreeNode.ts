import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedStatementTreeNodeChildren} from "./PaddedStatementTreeNodeChildren.ts";
import type {paddedStatementTreeNodeTypeName} from "./paddedStatementTreeNodeTypeName.ts";

export type PaddedStatementTreeNode = TreeNode<
	typeof paddedStatementTreeNodeTypeName,
	PaddedStatementTreeNodeChildren
>;
