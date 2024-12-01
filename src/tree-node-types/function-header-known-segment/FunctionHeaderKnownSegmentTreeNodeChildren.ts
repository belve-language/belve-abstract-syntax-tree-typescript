import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import type {FunctionHeaderKnownSegmentContentTreeNode} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentTreeNode.ts";

export type FunctionHeaderKnownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionHeaderKnownSegmentContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
];
