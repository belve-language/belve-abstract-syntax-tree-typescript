import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionBodyContentParser} from "../function-body-content/FunctionBodyContentParser.ts";
import {SourceFileContentFinalWhitespaceCharactersParser} from "../source-file-content-final-whitespace-characters/SourceFileContentFinalWhitespaceCharactersParser.ts";

export class SourceFileContentParser implements Parser {
	public parseWhitespace(
		character: WhitespaceCharacter,
	): SourceFileContentFinalWhitespaceCharactersParser {
		const sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(character, null);

		const sourceFileContentFinalWhitespaceCharactersParser =
			new SourceFileContentFinalWhitespaceCharactersParser(
				sourceFileContentFinalWhitespaceCharacters,
			);

		return sourceFileContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("OpeningSquareBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("ClosingSquareBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("OpeningCurlyBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
	): FunctionBodyContentParser {
		const functionBodyContentParser = new FunctionBodyContentParser(character, null);
		return functionBodyContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("OpeningRoundBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("ClosingRoundBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseIdentifier(): never {
		throw new Error("IdentifierCharacter is not allowed in SourceFileContent.");
	}

	public parseOperator(): never {
		throw new Error("OperatorCharacter is not allowed in SourceFileContent.");
	}

	public finalize(): null {
		return null;
	}
}
