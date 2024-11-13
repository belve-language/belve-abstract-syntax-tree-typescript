import type {FunctionHeaderTreeNode} from "../function-header/FunctionHeaderTreeNode.ts";
import type {OperatedStatementsTreeNode} from "../operated-statements/OperatedStatementsTreeNode.ts";
import type {PaddedFunctionBodyTreeNode} from "../padded-function-body/PaddedFunctionBodyTreeNode.ts";

export type StatementsTreeNodeChildren = readonly [
	firstStatement: FunctionHeaderTreeNode | PaddedFunctionBodyTreeNode,
	restStatements: OperatedStatementsTreeNode | null,
];
