import {createTreeNode} from "../../createTreeNode.ts";
import type {BlockTreeNode} from "../block/BlockTreeNode.ts";
import type {FunctionCallTreeNode} from "../function-call/FunctionCallTreeNode.ts";
import type {StatementsRestStatementsTreeNode} from "../statements-rest-statements/StatementsRestStatementsTreeNode.ts";
import type {StatementsTreeNode} from "./StatementsTreeNode.ts";
import {statementsTreeNodeTypeName} from "./statementsTreeNodeTypeName.ts";

export function createStatementsTreeNode(
	firstStatement: FunctionCallTreeNode | BlockTreeNode,
	restStatements: StatementsRestStatementsTreeNode | null,
): StatementsTreeNode {
	return createTreeNode(statementsTreeNodeTypeName, [firstStatement, restStatements]);
}
