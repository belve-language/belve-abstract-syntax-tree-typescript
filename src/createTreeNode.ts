import type {TreeNode} from "./TreeNode.ts";

export function createTreeNode<
	TypeNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
>(typeName: TypeNameToUse, children: ChildrenToUse): TreeNode<TypeNameToUse, ChildrenToUse> {
	return {
		typeName,
		children,
	};
}
