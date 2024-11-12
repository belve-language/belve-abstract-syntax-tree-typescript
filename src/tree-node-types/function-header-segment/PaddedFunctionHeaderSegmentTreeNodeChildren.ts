import type {FunctionHeaderSegmentTreeNode} from "./FunctionHeaderSegmentTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type PaddedFunctionHeaderSegmentTreeNodeChildren = readonly [
	FunctionHeaderSegmentTreeNode,
	WhitespaceCharactersTreeNode,
];
