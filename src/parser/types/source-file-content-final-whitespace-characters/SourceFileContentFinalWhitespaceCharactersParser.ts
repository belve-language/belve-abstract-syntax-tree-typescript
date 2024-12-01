import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionBodyContentParser} from "../function-body-content/FunctionBodyContentParser.ts";

export class SourceFileContentFinalWhitespaceCharactersParser implements Parser {
	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode;

	public constructor(sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode) {
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public finalize(): WhitespaceCharactersTreeNode {
		return this.sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): SourceFileContentFinalWhitespaceCharactersParser {
		const newSourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(
				character,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		const sourceFileContentFinalWhitespaceCharactersParser =
			new SourceFileContentFinalWhitespaceCharactersParser(
				newSourceFileContentFinalWhitespaceCharacters,
			);

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
	): FunctionBodyContentParser {
		const functionBodyContentFinalWhitespaceCharactersParser = new FunctionBodyContentParser(
			character,
			this.sourceFileContentFinalWhitespaceCharacters,
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
