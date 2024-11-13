import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {UnknownFunctionHeaderSegmentClosingBracketCharacter} from "../../characters/UnknownFunctionHeaderSegmentClosingBracketCharacter.ts";
import type {UnknownFunctionHeaderSegmentOpeningBracketCharacter} from "../../characters/UnknownFunctionHeaderSegmentOpeningBracketCharacter.ts";

export type UnknownFunctionHeaderSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: UnknownFunctionHeaderSegmentOpeningBracketCharacter,
	content: FunctionHeaderSegmentBracketContentTreeNode | null,
	closingBracketCharacter: UnknownFunctionHeaderSegmentClosingBracketCharacter,
];
