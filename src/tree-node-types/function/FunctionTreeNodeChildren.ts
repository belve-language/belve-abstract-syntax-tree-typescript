import type {FunctionHeaderTreeNode} from "../function-header/FunctionHeaderTreeNode.ts";
import type {PaddedFunctionBodyTreeNode} from "../padded-function-body/PaddedFunctionBodyTreeNode.ts";

export type FunctionTreeNodeChildren = readonly [
	header: FunctionHeaderTreeNode | null,
	body: PaddedFunctionBodyTreeNode,
];
