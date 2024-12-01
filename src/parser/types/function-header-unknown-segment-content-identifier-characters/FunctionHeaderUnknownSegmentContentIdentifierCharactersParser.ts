import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createFunctionHeaderUnknownSegmentContent} from "../../../tree-node-types/function-header-unknown-segment-content/createFunctionHeaderUnknownSegmentContent.ts";
import type {FunctionHeaderUnknownSegmentContentTreeNode} from "../../../tree-node-types/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentTreeNode.ts";
import {createFunctionHeaderUnknownSegmentTreeNode} from "../../../tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentTreeNode.ts";
import type {FunctionHeaderUnknownSegmentTreeNode} from "../../../tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentTreeNode.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsRestSegmentsParser} from "../function-header-segments-rest-segments/FunctionHeaderSegmentsRestSegmentsParser.ts";
import {FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser} from "../function-header-unknown-segment-content-initial-whitespace-characters/FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser.ts";

export class FunctionHeaderUnknownSegmentContentIdentifierCharactersParser implements Parser {
	private readonly functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersTreeNode;
	private readonly functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter;

	public constructor(
		functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersTreeNode,
		functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionHeaderUnknownSegmentContentClosingBracketCharacter: ClosingSquareBracketCharacter,
	) {
		this.functionHeaderUnknownSegmentContentIdentifierCharacters =
			functionHeaderUnknownSegmentContentIdentifierCharacters;

		this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters =
			functionHeaderUnknownSegmentContentFinalWhitespaceCharacters;

		this.functionHeaderUnknownSegmentClosingBracketCharacter =
			functionHeaderUnknownSegmentContentClosingBracketCharacter;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser {
		const functionHeaderUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(character, null);

		const functionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser(
				functionHeaderUnknownSegmentContentInitialWhitespaceCharacters,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		return functionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
	): FunctionHeaderSegmentsRestSegmentsParser {
		const functionHeaderUnknownSegmentContent: FunctionHeaderUnknownSegmentContentTreeNode =
			createFunctionHeaderUnknownSegmentContent(
				null,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
			);

		const functionHeaderUnknownSegment: FunctionHeaderUnknownSegmentTreeNode =
			createFunctionHeaderUnknownSegmentTreeNode(
				character,
				functionHeaderUnknownSegmentContent,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		const functionHeaderSegmentsRestSegmentsParser = new FunctionHeaderSegmentsRestSegmentsParser(
			functionHeaderUnknownSegment,
		);

		return functionHeaderSegmentsRestSegmentsParser;
	}

	public parseClosingSquareBracket(): never {
		throw new Error(
			"Unexpected closing square bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error(
			"Unexpected opening curly bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseClosingCurlyBracket(): never {
		throw new Error(
			"Unexpected closing curly bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Unexpected opening round bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseClosingRoundBracket(): never {
		throw new Error(
			"Unexpected closing round bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderUnknownSegmentContentIdentifierCharactersParser {
		const newFunctionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersTreeNode =
			createIdentifierCharactersTreeNode(
				character,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
			);

		const functionHeaderUnknownSegmentContentIdentifierCharactersParser =
			new FunctionHeaderUnknownSegmentContentIdentifierCharactersParser(
				newFunctionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		return functionHeaderUnknownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error(
			"Unexpected operator character in function header unknown segment content identifier characters.",
		);
	}

	public finalize(): never {
		throw new Error(
			"Unexpected end of function header unknown segment content identifier characters.",
		);
	}
}
