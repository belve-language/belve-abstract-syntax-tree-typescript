import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionBodyContentFinalWhitespaceCharactersParser} from "../function-body-content-final-whitespace-characters/FunctionBodyContentFinalWhitespaceCharactersParser.ts";

export class SourceFileContentFinalWhitespaceCharactersParser implements Parser {
	private readonly whitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(whitespaceCharacters: WhitespaceCharactersTreeNode) {
		this.whitespaceCharacters = whitespaceCharacters;
	}

	public finalize(): WhitespaceCharactersTreeNode | null {
		return this.whitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): SourceFileContentFinalWhitespaceCharactersParser {
		const newWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(character, this.whitespaceCharacters);

		const sourceFileContentFinalWhitespaceCharactersParser =
			new SourceFileContentFinalWhitespaceCharactersParser(newWhitespaceCharacters);

		return sourceFileContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Opening square bracket should not be present in final whitespace characters.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Closing square bracket should not be present in final whitespace characters.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Opening curly bracket should not be present in final whitespace characters.");
	}

	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
	): FunctionBodyContentFinalWhitespaceCharactersParser {
		const functionBodyContentFinalWhitespaceCharactersParser =
			new FunctionBodyContentFinalWhitespaceCharactersParser(
				null,
				character,
				this.whitespaceCharacters,
			);

		return functionBodyContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Opening round bracket should not be present in final whitespace characters.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Closing round bracket should not be present in final whitespace characters.");
	}

	public parseIdentifier(): never {
		throw new Error("Identifier should not be present in final whitespace characters.");
	}

	public parseOperator(): never {
		throw new Error("Operator should not be present in final whitespace characters.");
	}
}
