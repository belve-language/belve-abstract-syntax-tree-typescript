import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import type {StatementsTreeNode} from "../../../tree-node-types/statements/StatementsTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentFinalWhitespaceCharactersParser} from "../block-content-final-whitespace-characters/BlockContentFinalWhitespaceCharactersParser.ts";
import {FunctionCallKnownSegmentContentFinalWhitespaceCharactersParser} from "../function-call-known-segment-content-final-whitespace-characters-parser/FunctionCallKnownSegmentContentFinalWhitespaceCharactersParser.ts";
import {FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser} from "../function-call-unknown-segment-bracket-content-final-whitespace-characters-parser/FunctionCallUnknownSegmentBracketContentFinalWhitespaceCharactersParser.ts";
import {FunctionCallWordSegmentIdentifierCharactersParser} from "../function-call-word-segment-identifier-characters/FunctionCallWordSegmentIdentifierCharactersParser.ts";

export class StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser implements Parser {
	private readonly statementsRestStatementsBeforeOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly statementsRestStatementsOperatorCharacter: OperatorCharacter;
	private readonly statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly statementsRestStatementsStatements: StatementsTreeNode;
	private readonly functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter;

	private readonly blockStack: readonly (readonly [
		blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
	])[];

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		statementsRestStatementsBeforeOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		statementsRestStatementsOperatorCharacter: OperatorCharacter,
		statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		statementsRestStatementsStatements: StatementsTreeNode,
		functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,

		blockStack: readonly (readonly [
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[],

		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.statementsRestStatementsBeforeOperatorWhitespaceCharacters =
			statementsRestStatementsBeforeOperatorWhitespaceCharacters;
		this.statementsRestStatementsOperatorCharacter = statementsRestStatementsOperatorCharacter;
		this.statementsRestStatementsAfterOperatorWhitespaceCharacters =
			statementsRestStatementsAfterOperatorWhitespaceCharacters;
		this.statementsRestStatementsStatements = statementsRestStatementsStatements;

		this.functionBodyContentFinalWhitespaceCharacters =
			functionBodyContentFinalWhitespaceCharacters;

		this.functionBodyClosingBracketCharacter = functionBodyClosingBracketCharacter;

		this.blockStack = blockStack;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser {
		const newStatementsRestStatementsBeforeOperatorWhitespaceCharacters =
			createWhitespaceCharactersTreeNode(
				character,
				this.statementsRestStatementsBeforeOperatorWhitespaceCharacters,
			);

		const statementsRestStatementsBeforeOperatorWhitespaceCharactersParser =
			new StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser(
				newStatementsRestStatementsBeforeOperatorWhitespaceCharacters,
				this.statementsRestStatementsOperatorCharacter,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
				this.functionBodyContentFinalWhitespaceCharacters,
				this.functionBodyClosingBracketCharacter,
				this.blockStack,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsBeforeOperatorWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Unexpected opening square bracket character.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser {
		const functionCallUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser(
				null,
				character,
				this.functionBodyContentFinalWhitespaceCharacters,
				this.functionBodyClosingBracketCharacter,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Unexpected opening curly bracket character.");
	}

	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
	): BlockContentFinalWhitespaceCharactersParser {
		const blockContentFinalWhitespaceCharactersParser =
			new BlockContentFinalWhitespaceCharactersParser(
				null,
				character,
				this.blockStack,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return blockContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Unexpected opening round bracket character.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionCallKnownSegmentContentFinalWhitespaceCharactersParser {
		const functionCallKnownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionCallKnownSegmentContentFinalWhitespaceCharactersParser(character);

		return functionCallKnownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionCallWordSegmentIdentifierCharactersParser {
		const functionCallWordSegmentIdentifierCharacters: IdentifierCharactersTreeNode =
			createIdentifierCharactersTreeNode(character, null);

		const functionCallWordSegmentIdentifierCharactersParser =
			new FunctionCallWordSegmentIdentifierCharactersParser(
				functionCallWordSegmentIdentifierCharacters,
			);

		return functionCallWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Unexpected operator character");
	}

	public finalize(): never {
		throw new Error("Unexpected end of input.");
	}
}
