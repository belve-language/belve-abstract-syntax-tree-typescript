import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "./FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsTreeNodeTypeName} from "./functionHeaderSegmentsSeparatedRestTreeNodeTypeName.ts";

export function createFunctionHeaderSegmentsSeparatedRestSegmentsTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersTreeNode,
	segments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderWordStartingSegmentsTreeNode,
): FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode {
	return createTreeNode(functionHeaderSegmentsSeparatedRestSegmentsTreeNodeTypeName, [
		initialWhitespaceCharacters,
		segments,
	]);
}
