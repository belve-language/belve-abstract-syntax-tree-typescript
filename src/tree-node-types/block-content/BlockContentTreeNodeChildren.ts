import type {StatementsTreeNode} from "../statements/StatementsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type BlockContentTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	statements: StatementsTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
];
