import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {UnknownFunctionHeaderSegmentClosingBracketCharacter} from "./UnknownFunctionHeaderSegmentClosingBracketCharacter.ts";
import type {UnknownFunctionHeaderSegmentOpeningBracketCharacter} from "./UnknownFunctionHeaderSegmentOpeningBracketCharacter.ts";

export type UnknownFunctionHeaderSegmentTreeNodeChildren = readonly [
	UnknownFunctionHeaderSegmentOpeningBracketCharacter,
	FunctionHeaderSegmentBracketContentTreeNode | null,
	UnknownFunctionHeaderSegmentClosingBracketCharacter,
];
