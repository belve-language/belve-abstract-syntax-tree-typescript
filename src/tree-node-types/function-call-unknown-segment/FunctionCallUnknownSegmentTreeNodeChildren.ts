import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";
import type {FunctionCallSegmentBracketContentTreeNode} from "../function-call-segment-bracket-content/FunctionCallSegmentBracketContentTreeNode.ts";

export type FunctionCallUnknownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content: FunctionCallSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
];
