import type {FunctionBodyClosingBracketCharacter} from "../../characters/FunctionBodyClosingBracketCharacter.ts";
import type {FunctionBodyOpeningBracketCharacter} from "../../characters/FunctionBodyOpeningBracketCharacter.ts";
import type {FunctionBodyContentTreeNode} from "../function-body-content/FunctionBodyContentTreeNode.ts";

export type FunctionBodyTreeNodeChildren = readonly [
	openingBracketCharacter: FunctionBodyOpeningBracketCharacter,
	content: FunctionBodyContentTreeNode,
	closingBracketCharacter: FunctionBodyClosingBracketCharacter,
];
