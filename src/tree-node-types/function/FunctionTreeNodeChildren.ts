import type {FunctionBodyTreeNode} from "../function-body/FunctionBodyTreeNode.ts";
import type {PaddedFunctionHeaderTreeNode} from "../padded-function-header/PaddedFunctionHeaderTreeNode.ts";

export type FunctionTreeNodeChildren = readonly [
	paddedHeader: PaddedFunctionHeaderTreeNode | null,
	body: FunctionBodyTreeNode,
];
