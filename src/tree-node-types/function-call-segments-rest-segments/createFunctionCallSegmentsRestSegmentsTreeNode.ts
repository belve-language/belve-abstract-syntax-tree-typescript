import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsTreeNode.ts";
import type {FunctionCallSegmentsRestSegmentsTreeNode} from "./FunctionCallSegmentsRestSegmentsTreeNode.ts";
import {functionCallSegmentsRestSegmentsTreeNodeTypeName} from "./functionCallSegmentsRestSegmentsTreeNodeTypeName.ts";

export function createFunctionCallSegmentsRestSegmentsTreeNode(
	whitespaceCharacters: WhitespaceCharactersTreeNode,
	segments:
		| FunctionCallKnownStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| FunctionCallWordStartingSegmentsTreeNode,
): FunctionCallSegmentsRestSegmentsTreeNode {
	return createTreeNode(functionCallSegmentsRestSegmentsTreeNodeTypeName, [
		whitespaceCharacters,
		segments,
	]);
}
