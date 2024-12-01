import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import type {FunctionCallKnownSegmentContentTreeNode} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentTreeNode.ts";

export type FunctionCallKnownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionCallKnownSegmentContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
];
