import type {FunctionHeaderTreeNode} from "../function-header/FunctionHeaderTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type PaddedFunctionHeaderTreeNodeChildren = readonly [
	header: FunctionHeaderTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
];
