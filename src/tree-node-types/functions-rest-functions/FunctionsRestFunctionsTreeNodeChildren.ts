import type {FunctionsTreeNode} from "../functions/FunctionsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionsRestFunctionsTreeNodeChildren = readonly [
	whitespaceCharacters: WhitespaceCharactersTreeNode | null,
	functions: FunctionsTreeNode,
];
