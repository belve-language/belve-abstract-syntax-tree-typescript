import type {WhitespaceCharacter} from "./WhitespaceCharacter.ts";

export type WhitespaceCharacters<Characters> =
	Characters extends `${infer FirstCharacter}${infer RestCharacters}`
		? FirstCharacter extends WhitespaceCharacter
			? RestCharacters extends ""
				? Characters
				: `${FirstCharacter}${WhitespaceCharacters<RestCharacters>}`
			: never
		: never;
