import type {FunctionBodyTreeNode} from "../function-body/FunctionBodyTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type PaddedFunctionBodyTreeNodeChildren = readonly [
	body: FunctionBodyTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
];
