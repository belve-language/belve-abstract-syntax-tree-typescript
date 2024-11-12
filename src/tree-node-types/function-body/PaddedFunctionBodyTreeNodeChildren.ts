import type {FunctionBodyTreeNode} from "./FunctionBodyTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type PaddedFunctionBodyTreeNodeChildren = readonly [
	FunctionBodyTreeNode,
	WhitespaceCharactersTreeNode | null,
];
