import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";

export class FunctionCallUnknownSegmentBracketContentIdentifierCharactersParser implements Parser {
	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionCallUnknownSegmentBracketContentInitialWhitespaceCharactersParser {
		const functionCallUnknownSegmentBracketContentInitialWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentBracketContentInitialWhitespaceCharactersParser();

		return functionCallUnknownSegmentBracketContentInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
	): FunctionCallSegmentsRestSegmentsInitialWhitespaceCharactersParser {
		const segment = createFunctionHeaderUnknownSegmentTreeNode(this.identifierCharacters);

		const functionCallSegmentsRestSegmentsInitialWhitespaceCharactersParser =
			new FunctionCallSegmentsRestSegmentsInitialWhitespaceCharactersParser();

		return functionCallSegmentsRestSegmentsInitialWhitespaceCharactersParser;
	}

	public parseClosingSquareBracket(): unknown {
		throw new Error("Closing square bracket not allowed in unknown function call segment.");
	}

	public parseOpeningCurlyBracket(character: OpeningCurlyBracketCharacter): unknown {
		throw new Error("Opening curly bracket not allowed in unknown function call segment.");
	}
	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): unknown {
		throw new Error("Closing curly bracket not allowed in unknown function call segment.");
	}

	public parseOpeningRoundBracket(character: OpeningRoundBracketCharacter): unknown {
		throw new Error("Opening round bracket not allowed in unknown function call segment.");
	}

	public parseClosingRoundBracket(character: ClosingRoundBracketCharacter): unknown {
		throw new Error("Closing round bracket not allowed in unknown function call segment.");
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionCallUnknownSegmentBracketContentIdentifierCharactersParser {
		const newIdentifierCharacters: IdentifierCharactersTreeNode =
			createIdentifierCharactersTreeNode(character, this.identifierCharacters);

		const functionCallUnknownSegmentBracketContentIdentifierCharactersParser =
			new FunctionCallUnknownSegmentBracketContentIdentifierCharactersParser(
				newIdentifierCharacters,
			);

		return functionCallUnknownSegmentBracketContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Unexpected operator in unknown function call segment.");
	}

	public finalize(): never {
		throw new Error("Unexpected end of input in unknown function call segment.");
	}
}
