import type {TreeNode} from "../../TreeNode.ts";
import type {WhitespaceCharactersTreeNodeChildren} from "./WhitespaceCharactersTreeNodeChildren.ts";
import type {whitespaceCharactersTreeNodeTypeName} from "./whitespaceCharactersTreeNodeTypeName.ts";

export type WhitespaceCharactersTreeNode = TreeNode<
	typeof whitespaceCharactersTreeNodeTypeName,
	WhitespaceCharactersTreeNodeChildren
>;
