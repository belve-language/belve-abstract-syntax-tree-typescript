import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {KnownFunctionHeaderSegmentClosingBracketCharacter} from "../../characters/KnownFunctionHeaderSegmentClosingBracketCharacter.ts";
import type {KnownFunctionHeaderSegmentOpeningBracketCharacter} from "../../characters/KnownFunctionHeaderSegmentOpeningBracketCharacter.ts";

export type KnownFunctionHeaderSegmentTreeNodeChildren = readonly [
	openingBracketCharacter: KnownFunctionHeaderSegmentOpeningBracketCharacter,
	content: FunctionHeaderSegmentBracketContentTreeNode | null,
	closingBracketCharacter: KnownFunctionHeaderSegmentClosingBracketCharacter,
];
