import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallUnknownSegmentContentTreeNode} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentTreeNode.ts";
import type {FunctionCallUnknownSegmentTreeNode} from "./FunctionCallUnknownSegmentTreeNode.ts";
import {functionCallUnknownSegmentTreeNodeTypeName} from "./functionCallUnknownSegmentTreeNodeTypeName.ts";

export function createFunctionCallUnknownSegmentTreeNode(
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content: FunctionCallUnknownSegmentContentTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
): FunctionCallUnknownSegmentTreeNode {
	return createTreeNode(functionCallUnknownSegmentTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
