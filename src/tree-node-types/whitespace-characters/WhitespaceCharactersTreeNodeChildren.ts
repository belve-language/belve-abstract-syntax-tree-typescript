import type { WhitespaceCharacter } from "./WhitespaceCharacter.ts";
import type { WhitespaceCharactersTreeNode } from "./WhitespaceCharactersTreeNode.ts";
export type WhitespaceCharactersTreeNodeChildren = readonly [WhitespaceCharacter, WhitespaceCharactersTreeNode | null];
