import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionsTreeNode} from "../functions/FunctionsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {SourceFileContentTreeNode} from "./SourceFileContentTreeNode.ts";
import {sourceFileContentTreeNodeTypeName} from "./sourceFileContentTreeNodeTypeName.ts";

export function createSourceFileContentTreeNode(
	intialWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	functions: FunctionsTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
): SourceFileContentTreeNode {
	return createTreeNode(sourceFileContentTreeNodeTypeName, [
		intialWhitespaceCharacters,
		functions,
		finalWhitespaceCharacters,
	]);
}
