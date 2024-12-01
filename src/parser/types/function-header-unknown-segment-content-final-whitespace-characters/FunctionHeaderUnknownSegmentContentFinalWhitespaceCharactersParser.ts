import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderUnknownSegmentContentIdentifierCharactersParser} from "../function-header-unknown-segment-content-identifier-characters/FunctionHeaderUnknownSegmentContentIdentifierCharactersParser.ts";

export class FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser implements Parser {
	private readonly functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter;

	public constructor(
		functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter,
	) {
		this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters =
			functionHeaderUnknownSegmentContentFinalWhitespaceCharacters;

		this.functionHeaderUnknownSegmentClosingBracketCharacter =
			functionHeaderUnknownSegmentClosingBracketCharacter;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser {
		const newFunctionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(
				character,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
			);

		const functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser(
				newFunctionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		return functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error(
			"Unexpected opening square bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseClosingSquareBracket(): never {
		throw new Error(
			"Unexpected closing square bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error(
			"Unexpected opening curly bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseClosingCurlyBracket(): never {
		throw new Error(
			"Unexpected closing curly bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Unexpected opening round bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseClosingRoundBracket(): never {
		throw new Error(
			"Unexpected closing round bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderUnknownSegmentContentIdentifierCharactersParser {
		const functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersTreeNode =
			createIdentifierCharactersTreeNode(character, null);

		const functionHeaderUnknownSegmentContentIdentifierCharactersParser =
			new FunctionHeaderUnknownSegmentContentIdentifierCharactersParser(
				functionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		return functionHeaderUnknownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error(
			"Unexpected operator character in function header unknown segment content final whitespace characters.",
		);
	}

	public finalize(): never {
		throw new Error("Unexpected end of function header unknown segment content.");
	}
}
