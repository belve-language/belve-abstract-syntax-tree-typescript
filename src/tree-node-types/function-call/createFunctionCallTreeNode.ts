import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsTreeNode.ts";
import type {FunctionCallWordStartingSegmentsTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsTreeNode.ts";
import type {FunctionCallTreeNode} from "./FunctionCallTreeNode.ts";
import {functionCallTreeNodeTypeName} from "./functionCallTreeNodeTypeName.ts";

export function createFunctionCallTreeNode(
	segments:
		| FunctionCallWordStartingSegmentsTreeNode
		| FunctionCallUnknownStartingSegmentsTreeNode
		| FunctionCallKnownStartingSegmentsTreeNode,
): FunctionCallTreeNode {
	return createTreeNode(functionCallTreeNodeTypeName, [segments]);
}
