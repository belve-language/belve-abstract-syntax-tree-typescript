import type {FunctionHeaderTreeNode} from "../function-header/FunctionHeaderTreeNode.ts";
import type {PaddedFunctionBodyTreeNode} from "../function-body/PaddedFunctionBodyTreeNode.ts";

export type FunctionTreeNodeChildren = readonly [
	FunctionHeaderTreeNode | null,
	PaddedFunctionBodyTreeNode,
];
