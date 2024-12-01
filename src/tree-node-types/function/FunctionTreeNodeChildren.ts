import type {FunctionBodyTreeNode} from "../function-body/FunctionBodyTreeNode.ts";
import type {FunctionHeaderTreeNode} from "../function-header/FunctionHeaderTreeNode.ts";

export type FunctionTreeNodeChildren = readonly [
	header: FunctionHeaderTreeNode | null,
	body: FunctionBodyTreeNode,
];
