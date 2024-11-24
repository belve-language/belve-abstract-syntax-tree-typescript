import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";

export type FunctionHeaderWordSegmentTreeNodeChildren = readonly [
	identifierCharacters: IdentifierCharactersTreeNode,
];
