import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionBodyTreeNode} from "../function-body/FunctionBodyTreeNode.ts";
import type {FunctionHeaderTreeNode} from "../function-header/FunctionHeaderTreeNode.ts";
import type {FunctionTreeNode} from "./FunctionTreeNode.ts";
import {functionTreeNodeTypeName} from "./functionTreeNodeTypeName.ts";

export function createFunctionTreeNode(
	header: FunctionHeaderTreeNode | null,
	body: FunctionBodyTreeNode,
): FunctionTreeNode {
	return createTreeNode(functionTreeNodeTypeName, [header, body]);
}
