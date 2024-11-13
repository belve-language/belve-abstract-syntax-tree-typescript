import type {FunctionBodyClosingBracketCharacter} from "../characters/FunctionBodyClosingBracketCharacter.ts";
import type {FunctionBodyOpeningBracketCharacter} from "../characters/FunctionBodyOpeningBracketCharacter.ts";
import type {IdentifierCharacter} from "../characters/IdentifierCharacter.ts";
import type {KnownFunctionHeaderSegmentClosingBracketCharacter} from "../characters/KnownFunctionHeaderSegmentClosingBracketCharacter.ts";
import type {KnownFunctionHeaderSegmentOpeningBracketCharacter} from "../characters/KnownFunctionHeaderSegmentOpeningBracketCharacter.ts";
import type {OperatorCharacter} from "../characters/OperatorCharacter.ts";
import type {UnknownFunctionHeaderSegmentClosingBracketCharacter} from "../characters/UnknownFunctionHeaderSegmentClosingBracketCharacter.ts";
import type {UnknownFunctionHeaderSegmentOpeningBracketCharacter} from "../characters/UnknownFunctionHeaderSegmentOpeningBracketCharacter.ts";
import type {WhitespaceCharacter} from "../characters/WhitespaceCharacter.ts";

export type Parser = Readonly<{
	parse: Readonly<{
		whitespace: (character: WhitespaceCharacter) => unknown;
		openingSquareBracket: (
			character: UnknownFunctionHeaderSegmentOpeningBracketCharacter,
		) => unknown;
		closingSquareBracket: (
			character: UnknownFunctionHeaderSegmentClosingBracketCharacter,
		) => unknown;
		openingCurlyBracket: (character: FunctionBodyOpeningBracketCharacter) => unknown;
		closingCurlyBracket: (character: FunctionBodyClosingBracketCharacter) => unknown;
		openingRoundBracket: (character: KnownFunctionHeaderSegmentOpeningBracketCharacter) => unknown;
		closingRoundBracket: (character: KnownFunctionHeaderSegmentClosingBracketCharacter) => unknown;
		identifier: (character: IdentifierCharacter) => unknown;
		operator: (character: OperatorCharacter) => unknown;
	}>;
	finalize: () => unknown;
}>;
