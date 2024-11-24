import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {FunctionHeaderUnknownSegmentTreeNode} from "./FunctionHeaderUnknownSegmentTreeNode.ts";
import {functionHeaderUnknownSegmentTreeNodeTypeName} from "./functionHeaderUnknownSegmentTreeNodeTypeName.ts";

export function createFunctionHeaderUnknownSegmentTreeNode(
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content: FunctionHeaderSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
): FunctionHeaderUnknownSegmentTreeNode {
	return createTreeNode(functionHeaderUnknownSegmentTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
