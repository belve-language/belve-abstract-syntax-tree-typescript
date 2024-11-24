import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyTreeNode} from "../../../tree-node-types/function-body/FunctionBodyTreeNode.ts";
import type {SourceFileContentTreeNode} from "../../../tree-node-types/source-file-content/SourceFileContentTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import type {FunctionBodyContentFinalWhitespaceCharactersParser} from "../function-body-content-final-whitespace-characters/FunctionBodyContentFinalWhitespaceCharactersParser.ts";
import {createIdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/createIdentifierCharactersTreeNode.ts";

export class PaddedFunctionHeaderFinalWhitespaceCharactersParser implements Parser {
	private readonly functionBody: FunctionBodyTreeNode;
	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;

	public constructor(
		functionBody: FunctionBodyTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
	) {
		this.functionBody = functionBody;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): PaddedFunctionHeaderFinalWhitespaceCharactersParser {}

	public parseOpeningSquareBracket(): never {
		throw new Error("Opening square bracket is not allowed in function header.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionHeaderUnknownSegmentBracketContentFinalWhitespaceCharactersParser {}

	public parseOpeningCurlyBracket(character: OpeningCurlyBracketCharacter): never {}

	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
	): FunctionBodyContentFinalWhitespaceCharactersParser {}

	public parseOpeningRoundBracket(character: OpeningRoundBracketCharacter): never {}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionHeaderKnownSegmentBracketContentFinalWhitespaceCharactersParser {}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderWordSegmentIdentifierCharactersParser {
		const identifierCharacters = createIdentifierCharactersTreeNode(character, null);
	}

	public parseOperator(): never {
		throw new Error("Operator is not allowed in function header.");
	}

	public finalize(): SourceFileContentTreeNode {}
}
