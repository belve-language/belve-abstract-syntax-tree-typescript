import type {PaddedOperatorTreeNode} from "../padded-operator/PaddedOperatorTreeNode.ts";
import type {StatementsTreeNode} from "../statements/StatementsTreeNode.ts";

export type OperatedStatementsTreeNodeChildren = readonly [
	operator: PaddedOperatorTreeNode,
	statements: StatementsTreeNode,
];
