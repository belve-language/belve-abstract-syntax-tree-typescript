import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderSegmentBracketContentTreeNode} from "../function-header-segment-bracket-content/FunctionHeaderSegmentBracketContentTreeNode.ts";
import type {FunctionHeaderKnownSegmentTreeNode} from "./FunctionHeaderKnownSegmentTreeNode.ts";
import {functionHeaderKnownSegmentTreeNodeTypeName} from "./functionHeaderKnownSegmentTreeNodeTypeName.ts";

export function createFunctionHeaderKnownSegmentTreeNode(
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionHeaderSegmentBracketContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
): FunctionHeaderKnownSegmentTreeNode {
	return createTreeNode(functionHeaderKnownSegmentTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
