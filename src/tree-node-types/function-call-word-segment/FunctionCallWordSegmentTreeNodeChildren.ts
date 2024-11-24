import type {IdentifierCharactersTreeNode} from "../identifier-characters/IdentifierCharactersTreeNode.ts";

export type FunctionCallWordSegmentTreeNodeChildren = readonly [
	identifierCharacters: IdentifierCharactersTreeNode,
];
