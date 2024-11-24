import type {ClosingCurlyBracketCharacter} from "../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../characters/OpeningCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../characters/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../characters/OpeningRoundBracketCharacter.ts";
import type {OperatorCharacter} from "../characters/OperatorCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../characters/WhitespaceCharacter.ts";

export type Parser = Readonly<{
	parseWhitespace: (character: WhitespaceCharacter) => unknown;

	parseOpeningSquareBracket: (character: OpeningSquareBracketCharacter) => unknown;

	parseClosingSquareBracket: (character: ClosingSquareBracketCharacter) => unknown;

	parseOpeningCurlyBracket: (character: OpeningCurlyBracketCharacter) => unknown;
	parseClosingCurlyBracket: (character: ClosingCurlyBracketCharacter) => unknown;

	parseOpeningRoundBracket: (character: OpeningRoundBracketCharacter) => unknown;

	parseClosingRoundBracket: (character: ClosingRoundBracketCharacter) => unknown;

	parseIdentifier: (character: IdentifierCharacter) => unknown;
	parseOperator: (character: OperatorCharacter) => unknown;
	finalize: () => unknown;
}>;
