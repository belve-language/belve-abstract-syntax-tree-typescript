import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";

export class FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser implements Parser {
	private readonly functionCallUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionCallUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter;
	private readonly functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter;
	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		functionCallUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionCallUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter,
		functionBodyContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBodyClosingBracketCharacter: ClosingCurlyBracketCharacter,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.whitespaceCharacters = whitespaceCharacters;
		this.closingBracketCharacter = closingBracketCharacter;

		this.functionBodyContentFinalWhitespaceCharacters =
			functionBodyContentFinalWhitespaceCharacters;

		this.functionBodyClosingBracketCharacter = functionBodyClosingBracketCharacter;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser {
		const newWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(character, this.whitespaceCharacters);

		const functionCallUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser(newWhitespaceCharacters);

		return functionCallUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): unknown {
		throw new Error("Opening square bracket not allowed in unknown function call segment.");
	}

	public parseClosingSquareBracket(): unknown {
		throw new Error("Closing square bracket not allowed in unknown function call segment.");
	}

	public parseOpeningCurlyBracket(): unknown {
		throw new Error("Opening curly bracket not allowed in unknown function call segment.");
	}

	public parseClosingCurlyBracket(): unknown {
		throw new Error("Closing curly bracket not allowed in unknown function call segment.");
	}

	public parseOpeningRoundBracket(): unknown {
		throw new Error("Opening round bracket not allowed in unknown function call segment.");
	}

	public parseClosingRoundBracket(): unknown {
		throw new Error("Closing round bracket not allowed in unknown function call segment.");
	}

	public parseIdentifier(character: IdentifierCharacter): unknown {
		const identifierCharactersTreeNode = createIdentifierCharactersTreeNode(character, null);

		const functionCallUnknownSegmentContentIdentifierCharactersParser =
			new FunctionCallUnknownSegmentContentIdentifierCharactersParser(identifierCharactersTreeNode);

		return functionCallUnknownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Operator not allowed in unknown function call segment.");
	}

	public finalize(): never {
		throw new Error("Unexpected end of input in unknown function call segment.");
	}
}
