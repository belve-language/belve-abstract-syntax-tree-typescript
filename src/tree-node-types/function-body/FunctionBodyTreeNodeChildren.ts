import type {FunctionBodyContentTreeNode} from "../function-body-content/FunctionBodyContentTreeNode.ts";
import type {FunctionBodyClosingBracketCharacter} from "./FunctionBodyClosingBracketCharacter.ts";
import type {FunctionBodyOpeningBracketCharacter} from "./FunctionBodyOpeningBracketCharacter.ts";

export type FunctionBodyTreeNodeChildren = readonly [
	FunctionBodyOpeningBracketCharacter,
	FunctionBodyContentTreeNode,
	FunctionBodyClosingBracketCharacter,
];
