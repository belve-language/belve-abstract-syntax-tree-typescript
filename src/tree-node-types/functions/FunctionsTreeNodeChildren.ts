import type {PaddedFunctionTreeNode} from "../function/PaddedFunctionTreeNode.ts";
import type {FunctionsTreeNode} from "./FunctionsTreeNode.ts";
export type FunctionsTreeNodeChildren = readonly [PaddedFunctionTreeNode, FunctionsTreeNode | null];
