import ArrayTool from '../ArrayTool';

test("测试数组分段：", () => {
  expect(ArrayTool.getSectionArr([])).toMatchObject([]);
});

test("测试数组分段2：", () => {
  const arr = ArrayTool.getSectionArr([1,7,4,8,10]);
  expect(arr[0]).toMatchObject([1, 4]);
});