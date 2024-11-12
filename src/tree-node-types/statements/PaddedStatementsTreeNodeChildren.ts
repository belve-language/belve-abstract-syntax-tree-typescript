import type {PaddedOperatedStatementsTreeNode} from "../operated-statements/PaddedOperatedStatementsTreeNode.ts";
import type {PaddedStatementTreeNode} from "../statement/PaddedStatementTreeNode.ts";

export type PaddedStatementsTreeNodeChildren = readonly [
	PaddedStatementTreeNode,
	PaddedOperatedStatementsTreeNode | null,
];
