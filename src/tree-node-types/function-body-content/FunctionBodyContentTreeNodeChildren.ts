import type {StatementsTreeNode} from "../statements/StatementsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionBodyContentTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	statements: StatementsTreeNode | null,
];
