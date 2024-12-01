import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import type {FunctionBodyContentFinalWhitespaceCharactersParser} from "../function-body-content-final-whitespace-characters/FunctionBodyContentFinalWhitespaceCharactersParser.ts";
import type {FunctionCallWordSegmentIdentifierCharactersParser} from "../function-call-word-segment-identifier-characters/FunctionCallWordSegmentIdentifierCharactersParser.ts";

export class FunctionBodyContentParser implements Parser {
	private readonly functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter;
	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.functionBodyClosingBracketCharacter = functionBodyClosingBracketCharacter;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionBodyContentFinalWhitespaceCharactersParser {
		const functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(character, null);

		const functionBodyContentFinalWhitespaceCharactersParser =
			new FunctionBodyContentFinalWhitespaceCharactersParser();

		return functionBodyContentFinalWhitespaceCharactersParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error("OpeningSquareBracketCharacter is not allowed in function body content.");
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallUnknownSegmentContentParser = new FunctionCallUnknownSegmentContentParser();
		return functionCallUnknownSegmentContentParser;
	}

	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
	): FunctionsRestFunctionsParser {
		const functionsRestFunctionsParser = new FunctionsRestFunctionsParser();
		return functionsRestFunctionsParser;
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const blockContentParser = new BlockContentParser(character);
		return blockContentParser;
	}

	public parseOpeningRoundBracket(character: OpeningRoundBracketCharacter): never {
		throw new Error("OpeningRoundBracketCharacter is not allowed in function body content.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionCallKnownSegmentContentParser {
		const functionCallKnownSegmentContentParser = new FunctionCallKnownSegmentContentParser();
		return functionCallKnownSegmentContentParser;
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
		throw new Error("OperatorCharacter is not allowed in function body content.");
	}

	public finalize(): never {
		throw new Error("Function body content cannot be finalized.");
	}
}
