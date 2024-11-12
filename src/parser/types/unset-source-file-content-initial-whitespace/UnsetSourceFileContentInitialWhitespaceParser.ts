import type {Parser} from "../../Parser.ts";
import type {WhitespaceCharacter} from "../../WhitespaceCharacter.ts";
import type {WhitespaceCharacters} from "../../WhitespaceCharacters.ts";
import {SetSourceFileContentInitialWhitespaceParser} from "../set-source-file-content-initial-whitespace/SetSourceFileContentInitialWhitespaceParser.ts";

export class UnsetSourceFileContentInitialWhitespaceParser
	implements
		Parser<
			SetSourceFileContentInitialWhitespaceParser<
				WhitespaceCharacter,
				WhitespaceCharacters<WhitespaceCharacter>
			>,
			never,
			never,
			never,
			never,
			never,
			never,
			never,
			never
		>
{
	public parseWhitespaceCharacter<ParsedWhitespaceCharacter extends WhitespaceCharacter>(
		character: ParsedWhitespaceCharacter,
	): SetSourceFileContentInitialWhitespaceParser<
		ParsedWhitespaceCharacter,
		WhitespaceCharacters<ParsedWhitespaceCharacter>
	> {
		return new SetSourceFileContentInitialWhitespaceParser<
			ParsedWhitespaceCharacter,
			WhitespaceCharacters<ParsedWhitespaceCharacter>
		>(character);
	}

	public parseOpeningSquareBracketCharacter(character: "["): never {
		throw new Error("Not implemented");
	}

	public parseClosingSquareBracketCharacter(character: "]"): never {
		throw new Error("Not implemented");
	}

	public parseOpeningCurlyBracketCharacter(character: "{"): never {
		throw new Error("Not implemented");
	}

	public parseClosingCurlyBracketCharacter(character: "}"): never {
		throw new Error("Not implemented");
	}

	public parseCommaCharacter(character: ","): never {
		throw new Error("Not implemented");
	}

	public parseDotCharacter(character: "."): never {
		throw new Error("Not implemented");
	}

	public parseIdentifierCharacter(character: string): never {
		throw new Error("Not implemented");
	}

	public finalize(): never {
		throw new Error("Not implemented");
	}
}
