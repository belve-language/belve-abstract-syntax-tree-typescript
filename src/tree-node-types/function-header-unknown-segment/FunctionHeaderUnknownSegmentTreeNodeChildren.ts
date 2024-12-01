import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";
import type {FunctionHeaderUnknownSegmentContentTreeNode} from "../function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentTreeNode.ts";

export type FunctionHeaderUnknownSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content: FunctionHeaderUnknownSegmentContentTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
];
