/**
 * @author pretender
 * @date 2020-12-04
 * @description 打包压缩公共函数文件
 */
import { getZeroString } from "./utils/index";
export default {
  /**
   * 格式化时间函数
   * @param v 日期、时间戳或者时间格式的字符串
   * @param format 日期格式
   * @returns 时间字符串
   */
  outTime(v: Date | number | string, format = "yyyy-MM-dd HH:mm:ss"): string {
    try {
      let date = new Date(v);
      let [FY, M, D] = [date.getFullYear(), date.getMonth(), date.getDate()];
      let [H, m, S] = [date.getHours(), date.getMinutes(), date.getSeconds()];
      format = format.replace(/yyyy|YYYY/, String(FY));
      format = format.replace(/yy|YY/, String(FY % 100).padEnd(2, "0"));
      format = format.replace(/MM/, getZeroString(M + 1));
      format = format.replace(/M/g, String(M + 1));
      format = format.replace(/dd|DD/, getZeroString(D));
      format = format.replace(/d|D/g, String(D));
      format = format.replace(/hh|HH/, getZeroString(H));
      format = format.replace(/h|H/g, String(H));
      format = format.replace(/mm/, getZeroString(m));
      format = format.replace(/m/g, String(m));
      format = format.replace(/ss|SS/, getZeroString(S));
      format = format.replace(/s|S/g, String(S));
    } catch (err) {
        format = 'Invaild Date';
    }
    return format;
  },
  /**
   * 
   * @param v 日期或者时间字符串
   * @param type 日期类型或者日期字符串类型
   * @returns 
   */
  formatTime(v: Date | string, type: "strtime" | "datestr" = 'strtime'): Date | string {
    if (typeof v === "string" && type === "strtime" && v.length === 14) {
      return new Date(
        Number(v.substring(0, 4)),
        Number(v.substring(4, 6)),
        Number(v.substring(6, 8)),
        Number(v.substring(8, 10)),
        Number(v.substring(10, 12)),
        Number(v.substring(12, 14))
      );
    } else if (typeof v === "string" && type === "strtime" && v.length === 8) {
      return new Date(Number(v.substring(0, 4)), Number(v.substring(4, 6)), Number(v.substring(6, 8)));
    } else if (type === "datestr") {
      return this.outTime(v, "YYYYMMddHHmmss");
    } else {
      return v;
    }
  },
  
  /**
   * 参数inTime 入参为number类型时间差的毫秒值 如2235712
   * 参数type 不传参数默认返回  年月日时分秒，参数值为hour时返回 小时
   * @param inTime 毫秒数
   * @param type 类型
   * @returns 
   */
  diffTime(inTime: number, type = 'hour'): string {
    let s = "";
    let t = {
        y: 0,
        M: 0,
        d: 0,
        h: 0,
        m: 0,
        s: 0
    };
    t.s = inTime;
    inTime = Math.floor(inTime / (1000 * 60));
    t.m = inTime % 60;
    inTime = Math.floor(inTime / 60);
    t.h = inTime % 24;
    inTime = Math.floor(inTime / 24);
    t.d = inTime % 30;
    inTime = Math.floor(inTime / 30);
    t.M = inTime % 12;
    inTime = Math.floor(inTime / 12);
    t.y = inTime;
    //console.log('t', t)
    if (type == "hour") {
      s = (t.s / (1000 * 60 * 60)).toFixed(1);
    } else {
      if (t.y) {
        s =
          (t.y ? t.y + "年" : "") +
          (t.M ? t.M + "月" : "00月") +
          (t.d ? t.d + "天" : "00天") +
          (t.h ? t.h + "时" : "00时") +
          (t.m ? t.m + "分" : "00分");
      } else if (t.M) {
        s =
          (t.M ? t.M + "月" : "00月") +
          (t.d ? t.d + "天" : "00天") +
          (t.h ? t.h + "时" : "00时") +
          (t.m ? t.m + "分" : "00分");
      } else if (t.d) {
        s =
          (t.d ? t.d + "天" : "00天") +
          (t.h ? t.h + "时" : "00时") +
          (t.m ? t.m + "分" : "00分");
      } else if (t.h) {
        s = (t.h ? t.h + "时" : "00时") + (t.m ? t.m + "分" : "00分");
      } else {
        s = t.m ? t.m + "分" : "00分";
      }
    }
    return s;
  },
  /**
   * 获取本周的第一天和最后一天
   * @returns 
   */
  getDayOfWeek() {
    let date = new Date();
    // 本周一的日期
    date.setDate(date.getDate() - date.getDay() + 1);
    let begin =
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      " 00:00:00";

    // 本周日的日期
    date.setDate(date.getDate() + 6);
    let end =
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      " 23:59:59";
    return { begin, end };
  },
  /**
   * 获取本月的第一天和最后一天
   * @returns 
   */
  getDayOfMonth() {
    let date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth();
    let beginDate = new Date(year, month, 1);
    let endDate = new Date(year, month + 1, 0);
    let start: string = this.outTime(beginDate, "yyyy/MM/dd") + " 00:00:00";
    let end: string = this.outTime(endDate, "yyyy/MM/dd") + " 23:59:59";
    return { start, end };
  },
  /**
   * 根据 年份 和 季度  获取 季度 第一天 和 季度 最后 一天
   * @param year 年份
   * @param quarter 季度
   */
  getQuartorStartDate(year: number, quarter: number) {
    let startMonth = 1;
    if (quarter == 1) {
      startMonth = 1;
    } else if (quarter == 2) {
      startMonth = 4;
    } else if (quarter == 3) {
      startMonth = 7;
    } else if (quarter == 4) {
      startMonth = 10;
    }
    let endMonth = startMonth + 2;
    if (quarter == 0) {
      endMonth = 12;
    }
    const begin = year + "/" + this.formatDate(startMonth) + "/01 00:00:00";
    const end =
      year +
      "/" +
      this.formatDate(endMonth) +
      "/" +
      new Date(year, endMonth, 0).getDate() +
      " 23:59:59";
    return { begin, end };
  },
  /**
   * 获取格式化的月、日、时、分、秒
   * @param value 月、日、时、分、秒
   * @returns 
   */
  formatDate(value: number): string | number {
    return value < 10 ? "0" + value : value;
  },
};
