import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";

export type FunctionHeaderUnknownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content: FunctionHeaderSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
];
