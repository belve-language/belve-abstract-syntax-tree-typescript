import type {SourceFileContentTreeNode} from "../../../tree-node-types/source-file-content/SourceFileContentTreeNode.ts";
import {sourceFileContentTreeNodeTypeName} from "../../../tree-node-types/source-file-content/sourceFileContentTreeNodeTypeName.ts";
import type {WhitespaceCharactersTreeNode} from "../../../tree-node-types/whitespace-characters/WhitespaceCharactersTreeNode.ts";
import {whitespaceCharactersTreeNodeTypeName} from "../../../tree-node-types/whitespace-characters/whitespaceCharactersTreeNodeTypeName.ts";
import type {Parser} from "../../Parser.ts";
import type {WhitespaceCharacter} from "../../WhitespaceCharacter.ts";
import type {WhitespaceCharacters} from "../../WhitespaceCharacters.ts";

export class SetSourceFileContentInitialWhitespaceParser<
	ParsedCharacters extends string,
	ValidatedParsedCharacters extends WhitespaceCharacters<ParsedCharacters>,
> implements
		Parser<
			SetSourceFileContentInitialWhitespaceParser<
				`${WhitespaceCharacter}${ValidatedParsedCharacters}`,
				`${WhitespaceCharacter}${ValidatedParsedCharacters}`
			>,
			never,
			never,
			never,
			never,
			never,
			never,
			never,
			SourceFileContentTreeNode
		>
{
	private readonly initialWhitespace: WhitespaceCharactersTreeNode;

	public constructor(parsedCharacters: ValidatedParsedCharacters) {
		this.parsedCharacters = parsedCharacters;
	}

	public parseWhitespaceCharacter<ParsedWhitespaceCharacter extends WhitespaceCharacter>(
		character: ParsedWhitespaceCharacter,
	): SetSourceFileContentInitialWhitespaceParser<
		`${ParsedWhitespaceCharacter}${ValidatedParsedCharacters}`,
		`${ParsedWhitespaceCharacter}${ValidatedParsedCharacters}`
	> {
		const newParsedCharacters = `${character}${this.parsedCharacters}` as const;
		return new SetSourceFileContentInitialWhitespaceParser<
			`${ParsedWhitespaceCharacter}${ValidatedParsedCharacters}`,
			`${ParsedWhitespaceCharacter}${ValidatedParsedCharacters}`
		>(newParsedCharacters);
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

	public finalize(): SourceFileContentTreeNode<
		[
			{
				typeName: typeof whitespaceCharactersTreeNodeTypeName;
				children: [" ", null];
			},
			null,
		]
	> {
		return {
			typeName: sourceFileContentTreeNodeTypeName,
			children: [
				{
					typeName: whitespaceCharactersTreeNodeTypeName,
					children: [" ", null],
				},
				null,
			],
		};
	}
}

const parser = new SetSourceFileContentInitialWhitespaceParser<" ", " ">(" ");
parser.parseWhitespaceCharacter("\t");
const result = parser.finalize();
