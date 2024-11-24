import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsTreeNode.ts";

export type FunctionCallSegmentsRestSegmentsTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode,
	segments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| FunctionCallWordStartingSegmentsTreeNode,
];
