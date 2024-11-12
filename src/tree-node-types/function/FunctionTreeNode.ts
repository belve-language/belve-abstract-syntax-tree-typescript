import type {TreeNode} from "../../TreeNode.ts";
import type {FunctionTreeNodeChildren} from "./FunctionTreeNodeChildren.ts";
import type {functionTreeNodeTypeName} from "./functionTreeNodeTypeName.ts";
export type FunctionTreeNode = TreeNode<typeof functionTreeNodeTypeName, FunctionTreeNodeChildren>;
