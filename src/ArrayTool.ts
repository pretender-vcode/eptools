/**
 * @author pretender
 * @date 2023-10-26 
 * @description 打包压缩公共函数文件
 */
export type Key = string | number;
export type ObjectType = Record<string, any>;
export type TreeObjectType = ObjectType & { children?: Array<TreeObjectType> };
export type ArrOptionType = {
  id: keyof ObjectType,
  pid: keyof ObjectType,
};
export type TreeOptionType = {
  child: keyof TreeObjectType,
}
export default {
  /**
   * 根据一个数字数组转成分段数组，例：getSectionArr([1,7,4,8,10])， 返回[[1, 4], [4, 7], [7, 8], [8, 10]]。
   * @param arr 
   */
  getSectionArr(arr: number[] = []): number[][] {
    if (!arr.length || arr.length === 1) return [];
    arr = arr.sort((a, b) => a - b);
    if (arr.length === 2) return [[arr[0], arr[1]]];
    const result = [[arr[0], arr[1]]];
    for (let i = 1; i < arr.length - 1; i++) {
      result.push([result[i - 1][1], arr[i + 1]]);
    }
    return result;
  },
  /**
   * 具有父子级关系的一维数组转成树级结构
   * @param arr 一维对象数组
   * @param options 唯一标识包括父级id和自身id
   */
  arr2Tree(arr: TreeObjectType[] = [], options: ArrOptionType = { id: 'id', pid: 'pid' }): TreeObjectType[] {
    const list: TreeObjectType[] = [];
    const data = {};
    arr.forEach((item: TreeObjectType) => {
      item.children = [];
      data[item[options.id]] = item;
      if (item[options.pid] == 0 || !item[options.pid]) list.push(item);
      if (data[item[options.pid]]) data[item[options.pid]].children.push(item);
    });
    return list;
  },
  /**
   * 数组扁平化
   * @param tree 树形数据
   * @param path 从第一级到最后一级的标识数组
   * @param result 扁平化后的数组
   * @returns 
   */
  traverse(tree: TreeObjectType[] = [], path: Key[] = [], result: TreeObjectType[] = []) {
    for (const data of tree) {
      path.push(data.id);
      const isLeaf = !data.children || !data.children.length;
      if (isLeaf) {
        result.push({ ...data, path: [...path] });
      } else {
        result.push({ ...data, path: [...path] });
        this.traverse(data.children, path, result);
      }
      path.pop();
    }
    return result;
  },
  /**
   * 
   * @param treeData 树形数据
   * @param options 子项字段标识
   * @param result 具有父子关系的一维数组
   * @returns 
   */
  tree2Arr(treeData: TreeObjectType[] = [], options: TreeOptionType = { child: 'children' }, result: TreeObjectType[] = []): TreeObjectType[] {
    if (!Array.isArray(treeData)) return [];
    treeData.forEach((item) => {
      result.push(item);
      if (item[options.child] && Array.isArray(item[options.child]) && item[options.child].length) {
        this.tree2Arr(item[options.child], options, result);
      }
    });
    // 清除每项的子项
    const temp = result.map((item) => {
      delete item[options.child];
      return item;
    });
    return temp;
  },
}