import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallSegmentBracketContentTreeNode} from "../function-call-segment-bracket-content/FunctionCallSegmentBracketContentTreeNode.ts";
import type {FunctionCallUnknownSegmentTreeNode} from "./FunctionCallUnknownSegmentTreeNode.ts";
import {functionCallUnknownSegmentTreeNodeTypeName} from "./functionCallUnknownSegmentTreeNodeTypeName.ts";

export function createFunctionCallUnknownSegmentTreeNode(
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content: FunctionCallSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
): FunctionCallUnknownSegmentTreeNode {
	return createTreeNode(functionCallUnknownSegmentTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
