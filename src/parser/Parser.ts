import type {OperatorCharacter} from "../OperatorCharacter.ts";
import type {WhitespaceCharacter} from "./WhitespaceCharacter.ts";

export type Parser = Readonly<{
	parse: Readonly<{
		whiteSpace: (character: WhitespaceCharacter) => unknown;
		openingSquareBracket: (character: "[") => unknown;
		closingSquareBracket: (character: "]") => unknown;
		openingCurlyBracket: (character: "{") => unknown;
		closingCurlyBracket: (character: "}") => unknown;
		openingRoundBracket: (character: "(") => unknown;
		closingRoundBracket: (character: ")") => unknown;
		operator: (character: OperatorCharacter) => unknown;
		identifier: (character: string) => unknown;
	}>;
	finalize: () => unknown;
}>;
