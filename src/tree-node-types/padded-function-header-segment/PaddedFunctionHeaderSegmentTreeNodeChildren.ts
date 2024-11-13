import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {KnownFunctionHeaderSegmentTreeNode} from "../known-function-header-segment/KnownFunctionHeaderSegmentTreeNode.ts";
import type {UnknownFunctionHeaderSegmentTreeNode} from "../unknown-function-header-segment/UnknownFunctionHeaderSegmentTreeNode.ts";
import type {WordFunctionHeaderSegmentTreeNode} from "../word-function-header-segment/WordFunctionHeaderSegmentTreeNode.ts";

export type PaddedFunctionHeaderSegmentTreeNodeChildren = readonly [
	segment:
		| WordFunctionHeaderSegmentTreeNode
		| KnownFunctionHeaderSegmentTreeNode
		| UnknownFunctionHeaderSegmentTreeNode,
	finalWhitespace: WhitespaceCharactersTreeNode,
];
