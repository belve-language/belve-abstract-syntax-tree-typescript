import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode} from "../../../tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "../../../tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";

export class FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser implements Parser {
	private readonly functionHeaderKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null;
	private readonly functionHeaderKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter;

	private readonly functionHeaderKnownStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| FunctionHeaderWordStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode;

	public constructor(
		functionHeaderKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersTreeNode | null,
		functionHeaderKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter,

		functionHeaderKnownStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsTreeNode
			| FunctionHeaderUnknownStartingSegmentsTreeNode
			| FunctionHeaderWordStartingSegmentsTreeNode
			| null
			| FunctionHeaderSegmentsSeparatedRestSegmentsTreeNode,
	) {
		this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters =
			functionHeaderKnownSegmentContentFinalWhitespaceCharacters;

		this.functionHeaderKnownSegmentClosingBracketCharacter =
			functionHeaderKnownSegmentClosingBracketCharacter;

		this.functionHeaderKnownStartingSegmentsRestSegments =
			functionHeaderKnownStartingSegmentsRestSegments;
	}

	public parseWhitespace(character: WhitespaceCharacter): unknown {}

	public parseOpeningSquareBracket(character: OpeningSquareBracketCharacter): unknown {}

	public parseClosingSquareBracket(character: ClosingSquareBracketCharacter): unknown {}

	public parseOpeningCurlyBracket(character: OpeningCurlyBracketCharacter): unknown {}
	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): unknown {}

	public parseOpeningRoundBracket(character: OpeningRoundBracketCharacter): unknown {}

	public parseClosingRoundBracket(character: ClosingRoundBracketCharacter): unknown {}

	public parseIdentifier(character: IdentifierCharacter): unknown {}
	public parseOperator(character: OperatorCharacter): unknown {}
	public finalize(): unknown {}
}
