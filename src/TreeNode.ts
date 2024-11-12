export type TreeNode<TypeName extends string, Children extends readonly unknown[]> = Readonly<{
	typeName: TypeName;
	children: Children;
}>;
