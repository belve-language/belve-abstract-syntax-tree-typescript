import type {FunctionsTreeNode} from "../functions/FunctionsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type SourceFileContentTreeNodeChildren = readonly [
	intialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	functions: FunctionsTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
];
