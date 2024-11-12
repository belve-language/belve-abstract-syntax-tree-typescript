import type {PaddedIdentifierCharactersTreeNode} from "../identifier-characters/PaddedIdentifierCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionHeaderSegmentBracketContentTreeNodeChildren = readonly [
	WhitespaceCharactersTreeNode,
	PaddedIdentifierCharactersTreeNode | null,
];
