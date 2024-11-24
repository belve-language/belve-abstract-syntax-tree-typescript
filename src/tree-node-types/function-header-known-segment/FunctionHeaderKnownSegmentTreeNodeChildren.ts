import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";

export type FunctionHeaderKnownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionHeaderSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
];
