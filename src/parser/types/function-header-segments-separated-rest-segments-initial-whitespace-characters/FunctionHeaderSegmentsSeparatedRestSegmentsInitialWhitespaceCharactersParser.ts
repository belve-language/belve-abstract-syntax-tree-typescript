import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyTreeNode} from "../../../tree-node-types/function-body/FunctionBodyTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import {createFunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../../../tree-node-types/function-header-segments-separated-rest-segments/createFunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../../../tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import {createFunctionHeaderTreeNode} from "../../../tree-node-types/function-header/createFunctionHeaderTreeNode.ts";
import type {FunctionHeaderTreeNode} from "../../../tree-node-types/function-header/FunctionHeaderTreeNode.ts";
import {createFunctionTreeNode} from "../../../tree-node-types/function/createFunctionTreeNode.ts";
import type {FunctionTreeNode} from "../../../tree-node-types/function/FunctionTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsTreeNode} from "../../../tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsTreeNode.ts";
import {createFunctionsTreeNode} from "../../../tree-node-types/functions/createFunctionsTreeNode.ts";
import type {FunctionsTreeNode} from "../../../tree-node-types/functions/FunctionsTreeNode.ts";
import type {FunctionsTreeNodeChildren} from "../../../tree-node-types/functions/FunctionsTreeNodeChildren.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import {createPaddedFunctionHeaderTreeNode} from "../../../tree-node-types/padded-function-header/createPaddedFunctionHeaderTreeNode.ts";
import type {PaddedFunctionHeaderTreeNode} from "../../../tree-node-types/padded-function-header/PaddedFunctionHeaderTreeNode.ts";
import {createSourceFileContentTreeNode} from "../../../tree-node-types/source-file-content/createSourcefileContentTreeNode.ts";
import type {SourceFileContentTreeNode} from "../../../tree-node-types/source-file-content/SourceFileContentTreeNode.ts";
import {createWhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/createWhitespaceCharactersTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionBodyContentFinalWhitespaceCharactersParser} from "../function-body-content-final-whitespace-characters copy/FunctionBodyContentFinalWhitespaceCharactersParser.ts";
import {FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser} from "../function-header-known-segment-content-final-whitespace-characters/FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser.ts";
import {FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser} from "../function-header-unknown-segment-content-final-whitespace-characters/FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser.ts";
import {FunctionHeaderWordSegmentIdentifierCharactersParser} from "../function-header-word-segment-identifier-characters/FunctionHeaderWordSegmentIdentifierCharactersParser.ts";

export class FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser
	implements Parser
{
	private readonly functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersTreeNode;

	private readonly functionHeaderSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderWordStartingSegmentsTreeNode;

	private readonly functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionBody: FunctionBodyTreeNode;

	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsTreeNode
		| null
		| FunctionsTreeNodeChildren;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersTreeNode,

		functionHeaderSegments:
			| FunctionHeaderKnownStartingSegmentsTreeNode
			| FunctionHeaderUnknownStartingSegmentsTreeNode
			| FunctionHeaderWordStartingSegmentsTreeNode,

		functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionBody: FunctionBodyTreeNode,
		functionsRestFunctions: FunctionsSeparatedRestFunctionsTreeNode | null | FunctionsTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters =
			functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters;

		this.functionHeaderSegments = functionHeaderSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;

		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser {
		const newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters =
			createWhitespaceCharactersTreeNode(
				character,
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
			);

		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser =
			new FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser(
				newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				this.functionHeaderSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser;
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
	): FunctionBodyContentFinalWhitespaceCharactersParser {
		const functionBodyContentFinalWhitespaceCharactersParser =
			new FunctionBodyContentFinalWhitespaceCharactersParser(
				null,
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
		const functionHeaderSegmentsSeparatedRestSegments: FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode =
			createFunctionHeaderSegmentsSeparatedRestSegmentsTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				this.functionHeaderSegments,
			);

		const functionHeaderKnownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser(
				null,
				character,
				functionHeaderSegmentsSeparatedRestSegments,
			);

		return functionHeaderKnownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderWordSegmentIdentifierCharactersParser {
		const functionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersTreeNode =
			createIdentifierCharactersTreeNode(character, null);

		const functionHeaderSegmentsSeparatedRestSegments: FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode =
			createFunctionHeaderSegmentsSeparatedRestSegmentsTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				this.functionHeaderSegments,
			);

		const functionHeaderWordSegmentIdentifierCharactersParser =
			new FunctionHeaderWordSegmentIdentifierCharactersParser(
				functionHeaderWordSegmentIdentifierCharacters,
				functionHeaderSegmentsSeparatedRestSegments,
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
		const functionHeader: FunctionHeaderTreeNode = createFunctionHeaderTreeNode(
			this.functionHeaderSegments,
		);

		const paddedFunctionHeader: PaddedFunctionHeaderTreeNode = createPaddedFunctionHeaderTreeNode(
			functionHeader,
			this.functionHeaderFinalWhitespaceCharacters,
		);

		const function_: FunctionTreeNode = createFunctionTreeNode(
			paddedFunctionHeader,
			this.functionBody,
		);

		const functions: FunctionsTreeNode = createFunctionsTreeNode(
			function_,
			this.functionsRestFunctions,
		);

		const sourceFileContent: SourceFileContentTreeNode = createSourceFileContentTreeNode(
			this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
			functions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return sourceFileContent;
	}
}
