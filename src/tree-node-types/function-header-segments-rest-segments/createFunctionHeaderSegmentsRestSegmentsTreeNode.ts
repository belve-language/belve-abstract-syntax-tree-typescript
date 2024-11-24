import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderSegmentsRestSegmentsTreeNode} from "./FunctionHeaderSegmentsRestSegmentsTreeNode.ts";
import {functionHeaderSegmentsRestSegmentsTreeNodeTypeName} from "./functionHeaderSegmentsRestSegmentsTreeNodeTypeName.ts";

export function createFunctionHeaderSegmentsRestSegmentsTreeNode(
	whitespaceCharacters: WhitespaceCharactersTreeNode,
	segments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderWordStartingSegmentsTreeNode,
): FunctionHeaderSegmentsRestSegmentsTreeNode {
	return createTreeNode(functionHeaderSegmentsRestSegmentsTreeNodeTypeName, [
		whitespaceCharacters,
		segments,
	]);
}
