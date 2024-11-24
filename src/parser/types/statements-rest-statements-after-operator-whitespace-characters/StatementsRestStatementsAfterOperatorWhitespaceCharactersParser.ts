import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyTreeNode} from "../../../tree-node-types/function-body/FunctionBodyTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";

export class StatementsRestStatementsAfterOperatorWhitespaceCharactersParser implements Parser {
	private readonly statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionBody: FunctionBodyTreeNode;

	private readonly blockStack: readonly (readonly [
		functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,
	])[];

	public constructor(
		statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBody: FunctionBodyTreeNode,
		blockStack: readonly (readonly [
			functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
			functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[],
	) {
		this.statementsRestStatementsAfterOperatorWhitespaceCharacters =
			statementsRestStatementsAfterOperatorWhitespaceCharacters;

		this.functionBody = functionBody;
		this.blockStack = blockStack;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): StatementsRestStatementsAfterOperatorWhitespaceCharactersParser {
		const newStatementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(
				character,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
			);

		const statementsRestStatementsAfterOperatorWhitespaceCharactersParser =
			new StatementsRestStatementsAfterOperatorWhitespaceCharactersParser(
				newStatementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.blockStack,
			);

		return statementsRestStatementsAfterOperatorWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(character: OpeningSquareBracketCharacter): never {}

	public parseClosingSquareBracket(character: ClosingSquareBracketCharacter): never {}

	public parseOpeningCurlyBracket(character: OpeningCurlyBracketCharacter): unknown {}
	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): unknown {}

	public parseOpeningRoundBracket(character: OpeningRoundBracketCharacter): never {}

	public parseClosingRoundBracket(character: ClosingRoundBracketCharacter): never {}

	public parseIdentifier(character: IdentifierCharacter): never {}

	public parseOperator(
		character: OperatorCharacter,
	): StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser {}

	public finalize(): never {}
}
