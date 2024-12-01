import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createBlockTreeNode} from "../../../tree-node-types/function-body/createBlockTreeNode.ts";
import type {BlockTreeNode} from "../../../tree-node-types/function-body/BlockTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {PaddedFunctionHeaderFinalWhitespaceCharactersParser} from "../padded-function-header-final-whitespace-characters/PaddedFunctionHeaderFinalWhitespaceCharactersParser.ts";
import {StatementsRestStatementsAfterOperatorWhitespaceCharactersParser} from "../statements-rest-statements-after-operator-whitespace-characters/StatementsRestStatementsAfterOperatorWhitespaceCharactersParser.ts";

export class BlockContentFinalWhitespaceCharactersParser implements Parser {
	private readonly blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly blockClosingBracketCharacter: ClosingCurlyBracketCharacter;

	private readonly blockStack: readonly (readonly [
		blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
	])[];

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		blockClosingBracketCharacter: ClosingCurlyBracketCharacter,

		blockStack: readonly (readonly [
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[],

		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.blockContentFinalWhitespaceCharacters = blockContentFinalWhitespaceCharacters;
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;
		this.blockStack = blockStack;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): BlockContentFinalWhitespaceCharactersParser {
		const newBlockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(character, this.blockContentFinalWhitespaceCharacters);

		const blockContentFinalWhitespaceCharactersParser =
			new BlockContentFinalWhitespaceCharactersParser(
				newBlockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return blockContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error(
			"Opening square bracket should not be present in final whitespace characters of function body content.",
		);
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser {
		const functionCallUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser(
				null,
				character,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
	):
		| PaddedFunctionHeaderFinalWhitespaceCharactersParser
		| StatementsRestStatementsAfterOperatorWhitespaceCharactersParser {
		const block: BlockTreeNode = createBlockTreeNode(
			character,
			this.blockContentFinalWhitespaceCharacters,
			this.blockClosingBracketCharacter,
		);

		const [firstBlockStackEntry] = this.blockStack;

		if (typeof firstBlockStackEntry === "undefined") {
			const functionHeaderFinalWhitespaceCharactersParser =
				new PaddedFunctionHeaderFinalWhitespaceCharactersParser(
					block,
					this.sourceFileContentFinalWhitespaceCharacters,
				);

			return functionHeaderFinalWhitespaceCharactersParser;
		}

		const restBlockStackEntries: readonly (readonly [
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[] = this.blockStack.slice(1);

		const statementsRestStatementsAfterOperatorWhitespaceCharactersParser =
			new StatementsRestStatementsAfterOperatorWhitespaceCharactersParser(
				null,
				block,
				restBlockStackEntries,
			);

		return statementsRestStatementsAfterOperatorWhitespaceCharactersParser;
	}

	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
	): BlockContentFinalWhitespaceCharactersParser {
		const blockContentFinalWhitespaceCharactersParser =
			new BlockContentFinalWhitespaceCharactersParser(
				null,
				character,
				[
					[this.blockContentFinalWhitespaceCharacters, this.blockClosingBracketCharacter],
					...this.blockStack,
				],
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return blockContentFinalWhitespaceCharactersParser;
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
			"Finalize should not be called on BlockContentFinalWhitespaceCharactersParser.",
		);
	}
}
