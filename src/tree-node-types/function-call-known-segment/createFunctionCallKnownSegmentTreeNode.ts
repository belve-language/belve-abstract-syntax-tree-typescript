import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallSegmentBracketContentTreeNode} from "../function-call-segment-bracket-content/FunctionCallSegmentBracketContentTreeNode.ts";
import type {FunctionCallKnownSegmentTreeNode} from "./FunctionCallKnownSegmentTreeNode.ts";
import {functionCallKnownSegmentTreeNodeTypeName} from "./functionCallKnownSegmentTreeNodeTypeName.ts";

export function createFunctionCallKnownSegmentTreeNode(
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionCallSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
): FunctionCallKnownSegmentTreeNode {
	return createTreeNode(functionCallKnownSegmentTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
