import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentTreeNode} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentTreeNode.ts";
import type {FunctionHeaderKnownSegmentTreeNode} from "./FunctionHeaderKnownSegmentTreeNode.ts";
import {functionHeaderKnownSegmentTreeNodeTypeName} from "./functionHeaderKnownSegmentTreeNodeTypeName.ts";

export function createFunctionHeaderKnownSegmentTreeNode(
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content: FunctionHeaderKnownSegmentContentTreeNode,
	closingBracketCharacter: ClosingRoundBracketCharacter,
): FunctionHeaderKnownSegmentTreeNode {
	return createTreeNode(functionHeaderKnownSegmentTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
