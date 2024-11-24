import type {StatementsRestStatementsTreeNode} from "../statements-rest-statements/StatementsRestStatementsTreeNode.ts";
import type {BlockTreeNode} from "../block/BlockTreeNode.ts";
import type {FunctionCallTreeNode} from "../function-call/FunctionCallTreeNode.ts";

export type StatementsTreeNodeChildren = readonly [
	firstStatement: FunctionCallTreeNode | BlockTreeNode,
	restStatements: StatementsRestStatementsTreeNode | null,
];
