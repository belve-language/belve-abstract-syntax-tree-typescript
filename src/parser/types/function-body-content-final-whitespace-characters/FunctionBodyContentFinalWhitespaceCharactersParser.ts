import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createFunctionBodyTreeNode} from "../../../tree-node-types/function-body/createFunctionBodyTreeNode.ts";
import type {FunctionBodyTreeNode} from "../../../tree-node-types/function-body/FunctionBodyTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {PaddedFunctionHeaderFinalWhitespaceCharactersParser} from "../padded-function-header-final-whitespace-characters/PaddedFunctionHeaderFinalWhitespaceCharactersParser.ts";
import {StatementsRestStatementsAfterOperatorWhitespaceCharactersParser} from "../statements-rest-statements-after-operator-whitespace-characters/StatementsRestStatementsAfterOperatorWhitespaceCharactersParser.ts";

export class FunctionBodyContentFinalWhitespaceCharactersParser implements Parser {
	private readonly functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,

		blockStack: readonly (readonly [
			functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
			functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[],

		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.functionBodyContentFinalWhitespaceCharacters =
			functionBodyContentFinalWhitespaceCharacters;

		this.functionBodyClosingBracketCharacter = functionBodyClosingBracketCharacter;
		this.blockStack = blockStack;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionBodyContentFinalWhitespaceCharactersParser {
		const newFunctionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(
				character,
				this.functionBodyContentFinalWhitespaceCharacters,
			);

		const functionBodyContentFinalWhitespaceCharactersParser =
			new FunctionBodyContentFinalWhitespaceCharactersParser(
				newFunctionBodyContentFinalWhitespaceCharacters,
				this.functionBodyClosingBracketCharacter,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionBodyContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error(
			"Opening square bracket should not be present in final whitespace characters of function body content.",
		);
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionCallUnknownSegmentBracketContentFinalWhitespaceCharactersParser {
		const functionCallUnknownSegmentBracketContentFinalWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentBracketContentFinalWhitespaceCharactersParser(
				null,
				character,
				this.functionBodyContentFinalWhitespaceCharacters,
				this.functionBodyClosingBracketCharacter,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallUnknownSegmentBracketContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
	):
		| PaddedFunctionHeaderFinalWhitespaceCharactersParser
		| StatementsRestStatementsAfterOperatorWhitespaceCharactersParser {
		const functionBody: FunctionBodyTreeNode = createFunctionBodyTreeNode(
			character,
			this.functionBodyContentFinalWhitespaceCharacters,
			this.functionBodyClosingBracketCharacter,
		);

		const [firstBlockStackEntry] = this.blockStack;

		if (typeof firstBlockStackEntry === "undefined") {
			const paddedFunctionHeaderFinalWhitespaceCharactersParser =
				new PaddedFunctionHeaderFinalWhitespaceCharactersParser(
					functionBody,
					this.sourceFileContentFinalWhitespaceCharacters,
				);

			return paddedFunctionHeaderFinalWhitespaceCharactersParser;
		}

		const restBlockStackEntries: readonly (readonly [
			functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
			functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[] = this.blockStack.slice(1);

		const statementsRestStatementsAfterOperatorWhitespaceCharactersParser =
			new StatementsRestStatementsAfterOperatorWhitespaceCharactersParser(
				null,
				functionBody,
				restBlockStackEntries,
			);

		return statementsRestStatementsAfterOperatorWhitespaceCharactersParser;
	}

	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
	): FunctionBodyContentFinalWhitespaceCharactersParser {
		const functionBodyContentFinalWhitespaceCharactersParser =
			new FunctionBodyContentFinalWhitespaceCharactersParser(
				null,
				character,
				[
					[
						this.functionBodyContentFinalWhitespaceCharacters,
						this.functionBodyClosingBracketCharacter,
					],
					...this.stack,
				],
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionBodyContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Opening round bracket should not be present in final whitespace characters of function body content.",
		);
	}

	public parseClosingRoundBracket(character: ClosingRoundBracketCharacter): unknown {}

	public parseIdentifier(character: IdentifierCharacter): unknown {}
	public parseOperator(): never {
		throw new Error(
			"Operator should not be present in final whitespace characters of function body content.",
		);
	}

	public finalize(): never {
		throw new Error(
			"Finalize should not be called on FunctionBodyContentFinalWhitespaceCharactersParser.",
		);
	}
}
