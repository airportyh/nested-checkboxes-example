export interface TreeProvider<T> {
  getRootItem(): T;
  getChildItems(node: T): T[];
}
