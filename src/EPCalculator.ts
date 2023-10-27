/**
 * @author pretender
 * @date 2020-12-04
 * @description 打包压缩公共函数文件
 */
import { getAddAndMinusTimes } from './utils/index';
export default {
  /**
   * 加法
   * @param arg1 被加数
   * @param arg2 加数
   * @param original 是否返回原始结果
   * @returns 结果
   */
  accAdd(arg1: number, arg2: number, original = false): number {
    const times = getAddAndMinusTimes(arg1, arg2);
    let result = (arg1 * times + arg2 * times) / times;
    return original ? result : Number(result.toFixed(2));
  },
  /**
   * 减法
   * @param {number} arg1 被减数
   * @param {number} arg2 减数
   * @param {number} original 是否返回原始结果
   * @returns 结果
   */
  accDel(arg1: number, arg2: number, original = false): number {
    const times = getAddAndMinusTimes(arg1, arg2);
    let result = (arg1 * times - arg2 * times) / times;
    return original ? result : Number(result.toFixed(2));
  },
  /**
   * 乘法
   * @param arg1 被乘数
   * @param arg2 乘数
   * @param original 是否返回原始结果
   * @returns 结果
   */
  accMul(arg1: number, arg2: number, original = false): number {
     // 第一个数的小数点位数
    let step1 = 0;
    // 第二个数的小数点位数
    let step2 = 0;
    // 倍数
    let times = 0;

    if (arg1.toString().indexOf(".") != -1) {
        let arr = arg1.toString().split(".");
        step1 = arr[1].length;
        times += arr[1].length;
    }
    if (arg2.toString().indexOf(".") != -1) {
        let arr = arg2.toString().split(".");
        step2 = arr[1].length;
        times += arr[1].length;
    }
    let result = arg1 * Math.pow(10, step1) * arg2 * Math.pow(10, step2) / Math.pow(10, times);
    return original ? result : Number(result.toFixed(2));
  },
  //除法函数
  accDiv(arg1: number, arg2: number, original = false): number {
     // 第一个数的小数点位数
     let step1 = 0;
     // 第二个数的小数点位数
     let step2 = 0;
     if (arg1.toString().indexOf(".") != -1) {
         let arr = arg1.toString().split(".");
         step1 = arr[1].length;
     }
     if (arg2.toString().indexOf(".") != -1) {
         let arr = arg2.toString().split(".");
         step2 = arr[1].length;
     }
    // 将第一个数乘以倍数变成整数
    let r1 = arg1 * Math.pow(10, step1);
    // 将第二个数乘以倍数变成整数
    let r2 = arg2 * Math.pow(10, step2);
    let result = (r1 / r2) * Math.pow(10, step2 - step1);
    return original ? result : Number(result.toFixed(2));
  },
};
