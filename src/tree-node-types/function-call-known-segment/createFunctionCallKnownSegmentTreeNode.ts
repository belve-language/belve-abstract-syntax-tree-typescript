import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallKnownSegmentContentTreeNode} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentTreeNode.ts";
import type {FunctionCallKnownSegmentTreeNode} from "./FunctionCallKnownSegmentTreeNode.ts";
import {functionCallKnownSegmentTreeNodeTypeName} from "./functionCallKnownSegmentTreeNodeTypeName.ts";

export function createFunctionCallKnownSegmentTreeNode(
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionCallKnownSegmentContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
): FunctionCallKnownSegmentTreeNode {
	return createTreeNode(functionCallKnownSegmentTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
