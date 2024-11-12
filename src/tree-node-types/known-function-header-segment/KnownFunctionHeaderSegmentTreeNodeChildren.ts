import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {KnownFunctionHeaderSegmentClosingBracketCharacter} from "./KnownFunctionHeaderSegmentClosingBracketCharacter.ts";
import type {KnownFunctionHeaderSegmentOpeningBracketCharacter} from "./KnownFunctionHeaderSegmentOpeningBracketCharacter.ts";

export type KnownFunctionHeaderSegmentTreeNodeChildren = readonly [
	KnownFunctionHeaderSegmentOpeningBracketCharacter,
	FunctionHeaderSegmentBracketContentTreeNode | null,
	KnownFunctionHeaderSegmentClosingBracketCharacter,
];
