import type {ClosingCurlyBracketCharacter} from "../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/OpeningCurlyBracketCharacter.ts";
import type {FunctionBodyContentTreeNode} from "../function-body-content/FunctionBodyContentTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type FunctionBodyTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningCurlyBracketCharacter,
	content: FunctionBodyContentTreeNode | null | WhitespaceCharactersTreeNode,
	closingBracketCharacter: ClosingCurlyBracketCharacter,
];
