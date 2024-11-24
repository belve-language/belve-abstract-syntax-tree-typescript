import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionBodyTreeNode} from "../function-body/FunctionBodyTreeNode.ts";
import type {PaddedFunctionHeaderTreeNode} from "../padded-function-header/PaddedFunctionHeaderTreeNode.ts";
import type {FunctionTreeNode} from "./FunctionTreeNode.ts";
import {functionTreeNodeTypeName} from "./functionTreeNodeTypeName.ts";

export function createFunctionTreeNode(
	paddedHeader: PaddedFunctionHeaderTreeNode | null,
	body: FunctionBodyTreeNode,
): FunctionTreeNode {
	return createTreeNode(functionTreeNodeTypeName, [paddedHeader, body]);
}
