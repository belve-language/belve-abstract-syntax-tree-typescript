import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";
import type {FunctionCallUnknownSegmentContentTreeNode} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentTreeNode.ts";

export type FunctionCallUnknownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content: FunctionCallUnknownSegmentContentTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
];
