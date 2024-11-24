import type {ClosingCurlyBracketCharacter} from "../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/OpeningCurlyBracketCharacter.ts";
import type {BlockContentTreeNode} from "../block-content/BlockContentTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type BlockTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningCurlyBracketCharacter,
	content: BlockContentTreeNode | null | WhitespaceCharactersTreeNode,
	closingBracketCharacter: ClosingCurlyBracketCharacter,
];
