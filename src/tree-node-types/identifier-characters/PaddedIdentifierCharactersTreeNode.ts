import type {TreeNode} from "../../TreeNode.ts";
import type {PaddedIdentifierCharactersTreeNodeChildren} from "./PaddedIdentifierCharactersTreeNodeChildren.ts";
import type {paddedIdentifierCharactersTreeNodeTypeName} from "./paddedIdentifierCharactersTreeNodeTypeName.ts";

export type PaddedIdentifierCharactersTreeNode = TreeNode<
	typeof paddedIdentifierCharactersTreeNodeTypeName,
	PaddedIdentifierCharactersTreeNodeChildren
>;
