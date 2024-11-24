import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import type {FunctionCallSegmentBracketContentTreeNode} from "../function-call-segment-bracket-content/FunctionCallSegmentBracketContentTreeNode.ts";

export type FunctionCallKnownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionCallSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
];
