import type {FunctionsTreeNode} from "../functions/FunctionsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionsSeparatedRestFunctionsTreeNodeChildren = readonly [
	whitespaceCharacters: WhitespaceCharactersTreeNode,
	functions: FunctionsTreeNode,
];
