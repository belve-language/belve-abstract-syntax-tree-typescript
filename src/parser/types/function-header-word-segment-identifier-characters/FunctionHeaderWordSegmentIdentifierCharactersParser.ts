import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyTreeNode} from "../../../tree-node-types/function-body/FunctionBodyTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../../../tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import {createFunctionHeaderWordSegmentTreeNode} from "../../../tree-node-types/function-header-word-segment/createFunctionHeaderWordSegmentTreeNode.ts";
import type {FunctionHeaderWordSegmentTreeNode} from "../../../tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentTreeNode.ts";
import {createFunctionHeaderWordStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-word-starting-segments/createFunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import {createFunctionHeaderTreeNode} from "../../../tree-node-types/function-header/createFunctionHeaderTreeNode.ts";
import type {FunctionHeaderTreeNode} from "../../../tree-node-types/function-header/FunctionHeaderTreeNode.ts";
import {createFunctionTreeNode} from "../../../tree-node-types/function/createFunctionTreeNode.ts";
import type {FunctionTreeNode} from "../../../tree-node-types/function/FunctionTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsTreeNode} from "../../../tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsTreeNode.ts";
import {createFunctionsTreeNode} from "../../../tree-node-types/functions/createFunctionsTreeNode.ts";
import type {FunctionsTreeNode} from "../../../tree-node-types/functions/FunctionsTreeNode.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import {createSourceFileContentTreeNode} from "../../../tree-node-types/source-file-content/createSourcefileContentTreeNode.ts";
import type {SourceFileContentTreeNode} from "../../../tree-node-types/source-file-content/SourceFileContentTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionBodyContentParser} from "../function-body-content/FunctionBodyContentParser.ts";
import {FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser} from "../function-header-known-segment-content-final-whitespace-characters/FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser.ts";
import {FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser} from "../function-header-segments-separated-rest-segments-initial-whitespace-characters/FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser.ts";
import {FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser} from "../function-header-unknown-segment-content-final-whitespace-characters/FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser.ts";

export class FunctionHeaderWordSegmentIdentifierCharactersParser implements Parser {
	private readonly functionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersTreeNode;

	private readonly functionHeaderWordStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode;

	private readonly functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionBody: FunctionBodyTreeNode;

	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsTreeNode
		| null
		| FunctionsTreeNode;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		functionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersTreeNode,

		functionHeaderWordStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsTreeNode
			| FunctionHeaderUnknownStartingSegmentsTreeNode
			| null
			| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode,

		functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBody: FunctionBodyTreeNode,
		functionsRestFunctions: FunctionsSeparatedRestFunctionsTreeNode | null | FunctionsTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.functionHeaderWordSegmentIdentifierCharacters =
			functionHeaderWordSegmentIdentifierCharacters;

		this.functionHeaderWordStartingSegmentsRestSegments =
			functionHeaderWordStartingSegmentsRestSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;

		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser {
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersTreeNode =
			createWhitespaceCharactersTreeNode(character, null);

		const functionHeaderWordSegment: FunctionHeaderWordSegmentTreeNode =
			createFunctionHeaderWordSegmentTreeNode(this.functionHeaderWordSegmentIdentifierCharacters);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsTreeNode =
			createFunctionHeaderWordStartingSegmentsTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeaderSegmentsSeparatedRestSegmentsIntialWhitespaceCharactersParser =
			new FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser(
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				functionHeaderWordStartingSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderSegmentsSeparatedRestSegmentsIntialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser {
		const functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser(null, character);

		return functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
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
		throw new Error("Not implemented.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser {
		const functionHeaderWordSegment: FunctionHeaderWordSegmentTreeNode =
			createFunctionHeaderWordSegmentTreeNode(this.functionHeaderWordSegmentIdentifierCharacters);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsTreeNode =
			createFunctionHeaderWordStartingSegmentsTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeaderKnownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser(
				null,
				character,
				functionHeaderWordStartingSegments,
			);

		return functionHeaderKnownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderWordSegmentIdentifierCharactersParser {
		const newFunctionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersTreeNode =
			createIdentifierCharactersTreeNode(
				character,
				this.functionHeaderWordSegmentIdentifierCharacters,
			);

		const functionHeaderWordSegmentIdentifierCharactersParser =
			new FunctionHeaderWordSegmentIdentifierCharactersParser(
				newFunctionHeaderWordSegmentIdentifierCharacters,
				this.functionHeaderWordStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): SourceFileContentTreeNode {
		const functionHeaderWordSegment: FunctionHeaderWordSegmentTreeNode =
			createFunctionHeaderWordSegmentTreeNode(this.functionHeaderWordSegmentIdentifierCharacters);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsTreeNode =
			createFunctionHeaderWordStartingSegmentsTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeader: FunctionHeaderTreeNode = createFunctionHeaderTreeNode(
			functionHeaderWordStartingSegments,
			this.functionHeaderFinalWhitespaceCharacters,
		);

		const function_: FunctionTreeNode = createFunctionTreeNode(functionHeader, this.functionBody);

		const functions: FunctionsTreeNode = createFunctionsTreeNode(
			function_,
			this.functionsRestFunctions,
		);

		const sourceFileContent: SourceFileContentTreeNode = createSourceFileContentTreeNode(
			null,
			functions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return sourceFileContent;
	}
}
