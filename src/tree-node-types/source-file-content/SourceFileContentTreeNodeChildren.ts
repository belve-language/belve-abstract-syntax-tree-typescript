import type {FunctionsTreeNode} from "../functions/FunctionsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type SourceFileContentTreeNodeChildren = readonly [
	initialWhitespace: WhitespaceCharactersTreeNode | null,
	functions: FunctionsTreeNode | null,
];
