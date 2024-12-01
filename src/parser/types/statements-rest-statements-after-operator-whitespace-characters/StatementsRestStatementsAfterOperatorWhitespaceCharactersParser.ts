import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser} from "../statements-rest-statements-before-operator-whitespace-characters/StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser.ts";
import type {StatementsTreeNode} from "../../../tree-node-types/statements/StatementsTreeNode.ts";

export class StatementsRestStatementsAfterOperatorWhitespaceCharactersParser implements Parser {
	private readonly statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly statementsRestStatementsStatements: StatementsTreeNode;
	private readonly blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly blockClosingBracketCharacter: ClosingCurlyBracketCharacter;

	private readonly blockStack: readonly (readonly [
		functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,
	])[];

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		statementsRestStatementsStatements: StatementsTreeNode,
		blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		blockClosingBracketCharacter: ClosingCurlyBracketCharacter,

		blockStack: readonly (readonly [
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[],

		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.statementsRestStatementsAfterOperatorWhitespaceCharacters =
			statementsRestStatementsAfterOperatorWhitespaceCharacters;

		this.statementsRestStatementsStatements = statementsRestStatementsStatements;
		this.blockContentFinalWhitespaceCharacters = blockContentFinalWhitespaceCharacters;
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;
		this.blockStack = blockStack;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
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
				this.statementsRestStatementsStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsAfterOperatorWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseIdentifier(): never {
		throw new Error("Not implemented.");
	}

	public parseOperator(
		character: OperatorCharacter,
	): StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser {
		const statementsRestStatementsBeforeOperatorWhitespaceCharactersParser =
			new StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser(
				null,
				character,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsBeforeOperatorWhitespaceCharactersParser;
	}

	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
