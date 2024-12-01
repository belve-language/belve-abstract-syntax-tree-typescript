import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import type {IdentifierCharactersTreeNode} from "../../../tree-node-types/identifier-characters/IdentifierCharactersTreeNode.ts";
import type {Parser} from "../../Parser.ts";

export class FunctionCallWordSegmentIdentifierCharactersParser implements Parser {
	private readonly functionCallWordSegmentIdentifierCharacters: IdentifierCharactersTreeNode;

	public constructor(functionCallWordSegmentIdentifierCharacters: IdentifierCharactersTreeNode) {
		this.functionCallWordSegmentIdentifierCharacters = functionCallWordSegmentIdentifierCharacters;
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
