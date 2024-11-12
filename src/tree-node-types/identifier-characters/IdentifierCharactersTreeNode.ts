import type {TreeNode} from "../../TreeNode.ts";
import type {IdentifierCharactersTreeNodeChildren} from "./IdentifierCharactersTreeNodeChildren.ts";
import type {identifierCharactersTreeNodeTypeName} from "./identifierCharactersTreeNodeTypeName.ts";

export type IdentifierCharactersTreeNode = TreeNode<
	typeof identifierCharactersTreeNodeTypeName,
	IdentifierCharactersTreeNodeChildren
>;
