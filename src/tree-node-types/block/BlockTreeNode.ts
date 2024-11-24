import type {TreeNode} from "../../TreeNode.ts";
import type {BlockTreeNodeChildren} from "./BlockTreeNodeChildren.ts";
import type {blockTreeNodeTypeName} from "./blockTreeNodeTypeName.ts";
export type BlockTreeNode = TreeNode<typeof blockTreeNodeTypeName, BlockTreeNodeChildren>;
