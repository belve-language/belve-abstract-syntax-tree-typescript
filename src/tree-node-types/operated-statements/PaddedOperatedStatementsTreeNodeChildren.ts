import type {PaddedOperatorTreeNode} from "../operator/PaddedOperatorTreeNode.ts";
import type {PaddedStatementsTreeNode} from "../statements/PaddedStatementsTreeNode.ts";

export type PaddedOperatedStatementsTreeNodeChildren = readonly [
	PaddedOperatorTreeNode,
	PaddedStatementsTreeNode,
];
