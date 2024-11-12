import type {TreeNode} from "../../TreeNode.ts";
import type {SourceFileContentTreeNodeChildren} from "./SourceFileContentTreeNodeChildren.ts";
import type {sourceFileContentTreeNodeTypeName} from "./sourceFileContentTreeNodeTypeName.ts";

export type SourceFileContentTreeNode = TreeNode<
	typeof sourceFileContentTreeNodeTypeName,
	SourceFileContentTreeNodeChildren
>;
