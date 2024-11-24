import type {OperatorCharacter} from "../../characters/OperatorCharacter.ts";
import type {StatementsTreeNode} from "../statements/StatementsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../whitespace-characters/WhitespaceCharactersTreeNode.ts";

export type StatementsRestStatementsTreeNodeChildren = readonly [
	beforeOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	operatorCharacter: OperatorCharacter,
	afterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	statements: StatementsTreeNode,
];
