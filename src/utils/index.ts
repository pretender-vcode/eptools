/**
 *
 * @param num1 第一个数字
 * @param num2 第二个数字
 * @returns 倍数
 */
export const getAddAndMinusTimes = (arg1: number, arg2: number): number => {
  // 第一个数的小数点位数
  let step1 = 0;
  // 第二个数的小数点位数
  let step2 = 0;
  // 倍数
  let times = 1;

  if (arg1.toString().indexOf(".") != -1) {
    let arr = arg1.toString().split(".");
    step1 = arr[1].length;
  }
  if (arg2.toString().indexOf(".") != -1) {
    let arr = arg2.toString().split(".");
    step2 = arr[1].length;
  }
  times = Math.pow(10, Math.max(step1, step2));
  return times;
};

export const getZeroString = (arg: number): string => {
  return arg > 9 ? arg.toString() : arg.toString().padStart(2, '0');
}
