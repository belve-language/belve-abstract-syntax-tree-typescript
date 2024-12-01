import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createFunctionHeaderUnknownSegmentContent} from "../../../tree-node-types/function-header-unknown-segment-content/createFunctionHeaderUnknownSegmentContent.ts";
import type {FunctionHeaderUnknownSegmentContentTreeNode} from "../../../tree-node-types/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentTreeNode.ts";
import {createFunctionHeaderUnknownSegmentTreeNode} from "../../../tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentTreeNode.ts";
import type {FunctionHeaderUnknownSegmentTreeNode} from "../../../tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsRestSegmentsParser} from "../function-header-segments-rest-segments/FunctionHeaderSegmentsRestSegmentsParser.ts";

export class FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser
	implements Parser
{
	private readonly functionHeaderUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersTreeNode;
	private readonly functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersTreeNode;
	private readonly functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter;

	public constructor(
		functionHeaderUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersTreeNode,
		functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersTreeNode,
		functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionHeaderUnknownSegmentContentClosingBracketCharacter: ClosingSquareBracketCharacter,
	) {
		this.functionHeaderUnknownSegmentContentInitialWhitespaceCharacters =
			functionHeaderUnknownSegmentContentInitialWhitespaceCharacters;

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
		const newFunctionHeaderUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(
				character,
				this.functionHeaderUnknownSegmentContentInitialWhitespaceCharacters,
			);

		const functionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser(
				newFunctionHeaderUnknownSegmentContentInitialWhitespaceCharacters,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		return functionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
	): FunctionHeaderSegmentsRestSegmentsParser {
		const functionHeaderUnkownSegmentContent: FunctionHeaderUnknownSegmentContentTreeNode =
			createFunctionHeaderUnknownSegmentContent(
				this.functionHeaderUnknownSegmentContentInitialWhitespaceCharacters,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
			);

		const functionHeaderUnknownSegment: FunctionHeaderUnknownSegmentTreeNode =
			createFunctionHeaderUnknownSegmentTreeNode(
				character,
				functionHeaderUnkownSegmentContent,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		// 	functionHeaderSegment:
		// 	| FunctionHeaderUnknownSegmentTreeNode
		// 	| FunctionHeaderKnownStartingSegmentsTreeNode,

		// functionHeaderSegments:
		// 	| FunctionHeaderKnownStartingSegmentsTreeNode
		// 	| FunctionHeaderUnknownStartingSegmentsTreeNode
		// 	| FunctionHeaderWordStartingSegmentsTreeNode,

		// functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		// functionBody: FunctionBodyTreeNode,

		// functionsRestFunctions:
		// 	| FunctionsSeparatedRestFunctionsTreeNode
		// 	| null
		// 	| FunctionsTreeNodeChildren,

		// sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,

		const functionHeaderSegmentsRestSegmentsParser = new FunctionHeaderSegmentsRestSegmentsParser(
			functionHeaderUnknownSegment,
		);

		return functionHeaderSegmentsRestSegmentsParser;
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseIdentifier(): never {
		throw new Error("Not implemented.");
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
