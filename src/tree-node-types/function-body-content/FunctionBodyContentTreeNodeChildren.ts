import type {PaddedStatementsTreeNode} from "../statements/PaddedStatementsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionBodyContentTreeNodeChildren = readonly [
	WhitespaceCharactersTreeNode | null,
	PaddedStatementsTreeNode | null,
];
