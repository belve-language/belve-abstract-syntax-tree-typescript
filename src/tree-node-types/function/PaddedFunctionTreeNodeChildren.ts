import type {FunctionTreeNode} from "./FunctionTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type PaddedFunctionTreeNodeChildren = readonly [
	FunctionTreeNode,
	WhitespaceCharactersTreeNode | null,
];
