import EPCalculator from '../EPCalculator';
test("测试加法小数点精度", () => {
  expect(EPCalculator.accAdd(1.99, 1.9)).toBe(3.89);
});

test("测试减法小数点精度", () => {
  expect(EPCalculator.accDel(100, 99.99)).toBe(0.01);
});

test("测试乘法小数点精度", () => {
  expect(EPCalculator.accMul(1.99, 2.99)).toBe(5.95);
});

test("测试乘法小数点精度", () => {
  expect(EPCalculator.accDiv(5, 1.99)).toBe(2.51);
});