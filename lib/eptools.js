(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["eptools"] = factory();
	else
		root["eptools"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EPCalculator": () => /* reexport */ EPCalculator,
  "EPTime": () => /* reexport */ EPTime
});

;// CONCATENATED MODULE: ./src/EPTime.js
/**
 * @author pretender
 * @date 2020-12-04 
 * @description 打包压缩公共函数文件
 */

/* harmony default export */ const EPTime = ({
    //示例： utils.eptimes.formatTime(new Date(), 'YYYY-MM-dd HH:mm:ss')

    //参数value：支持 Date   时间戳（1554194681923）  '2019-03-31 10:00:00'

    //参数format：字符串
    //参数format入参及返回格式示例（部分示例）
    // utils.eptimes.outTime(1554194681923, 'YYYY/MM/dd')
    // utils.eptimes.outTime(new Date(), 'YYYY年MM月dd日')
    // utils.eptimes.outTime(new Date(), 'YYYY-MM-dd HH时mm分ss秒')
    // utils.eptimes.outTime(new Date(), 'HH时mm分ss秒')

    outTime(v, format) {
        if (typeof v == 'string') {
            v = v.replace(/-/g, '/');
        }
        let t = new Date(v);
        let s = format || 'yyyy-MM-dd HH:mm:ss';
        let [FY, Y, M, D] = [t.getFullYear(), t.getYear(), t.getMonth(), t.getDate()];
        let [H, m, S] = [t.getHours(), t.getMinutes(), t.getSeconds()];
        s = s.replace(/yyyy|YYYY/, FY);
        s = s.replace(/yy|YY/, (Y % 100) > 9 ? Y % 100 : '0' + (Y % 100));
        s = s.replace(/MM/, M + 1 > 9 ? M + 1 : '0' + (M + 1));
        s = s.replace(/M/g, M + 1);
        s = s.replace(/dd|DD/, D > 9 ? D : '0' + D);
        s = s.replace(/d|D/g, D);
        s = s.replace(/hh|HH/, H > 9 ? H : '0' + H);
        s = s.replace(/h|H/g, H);
        s = s.replace(/mm/, m > 9 ? m : '0' + m);
        s = s.replace(/m/g, m);
        s = s.replace(/ss|SS/, S > 9 ? S : '0' + S);
        s = s.replace(/s|S/g, S);
        return s;
    },
    //参数v      14位字符串20190203123523  或者8位20190203
    //参数type   默认为 strtime类型   表示字符串转Date////datestr 表示Date转字符串（20190403090710）
    //示例
    //utils.eptimes.formatTime('20190203123523')   输出Date类型
    //utils.eptimes.formatTime('20190203')         输出Date类型
    //utils.eptimes.formatTime(new Date(),'datestr')  输出20190403090710
    formatTime(v, type) {
        type = type || 'strtime'; //当前20190402170958转Date称为strtime
        if (type === 'strtime' && v.length === 14) {
            return new Date(v.substring(0, 4), v.substring(4, 6), v.substring(6, 8), v.substring(8, 10), v.substring(10, 12), v.substring(12, 14));
        } else if (type === 'strtime' && v.length === 8) {
            return new Date(v.substring(0, 4), v.substring(4, 6), v.substring(6, 8));
        } else if (type === 'datestr') {
            return this.outTime(v, 'YYYYMMddHHmmss');
        } else {
            return v;
        }
    },
    //参数inTime 入参为number类型时间差的毫秒值 如2235712
    //参数type 不传参数默认返回  年月日时分秒，参数值为hour时返回 小时
    diffTime(inTime, type) {
        if (typeof inTime !== 'number') { return inTime; }
        var s = '';
        var t = {};
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
                s = (t.y ? t.y + "年" : "") + (t.M ? t.M + "月" : "00月") + (t.d ? t.d + "天" : "00天") + (t.h ? t.h + "时" : "00时") + (t.m ? t.m + "分" : "00分");
            } else if (t.M) {
                s = (t.M ? t.M + "月" : "00月") + (t.d ? t.d + "天" : "00天") + (t.h ? t.h + "时" : "00时") + (t.m ? t.m + "分" : "00分");
            } else if (t.d) {
                s = (t.d ? t.d + "天" : "00天") + (t.h ? t.h + "时" : "00时") + (t.m ? t.m + "分" : "00分");
            } else if (t.h) {
                s = (t.h ? t.h + "时" : "00时") + (t.m ? t.m + "分" : "00分");
            } else {
                s = t.m ? t.m + "分" : "00分";
            }
        }
        return s;
    },
    //获取本周的第一天和最后一天
    getDayOfWeek() {
        let date = new Date();
        // 本周一的日期
        date.setDate(date.getDate() - date.getDay() + 1);
        let begin = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " 00:00:00";

        // 本周日的日期
        date.setDate(date.getDate() + 6);
        let end = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " 23:59:59";
        return { begin, end };
    },
    //获取本月的第一天和最后一天
    getDayOfMonth() {
        let date = new Date(), year = date.getFullYear(), month = date.getMonth();
        let begin = new Date(year, month, 1);
        let end = new Date(year, month + 1, 0);
        begin = this.outTime(begin, 'yyyy/MM/dd') + ' 00:00:00';
        end = this.outTime(end, 'yyyy/MM/dd') + ' 23:59:59';
        return { begin, end };
    },
    /**
     * 根据 年份 和 季度  获取 季度 第一天 和 季度 最后 一天
     * @param year
     * @param quarter
     */
    getQuartorStartDate(year, quarter) {
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
            endMonth = 12
        }
        const begin = year + "/" + this.formatDate(startMonth) + '/01 00:00:00';
        const end = year + '/' + this.formatDate(endMonth) + '/' + new Date(year, endMonth, 0).getDate() + ' 23:59:59'
        return { begin, end }
    },
    //格式化月和日为MM、dd
    formatDate(value) {
        if ( typeof value !== 'number' ) {
            return Error('Invalid parameter')
        }
        return value < 10 ? '0' + value : value;
    }
});
;// CONCATENATED MODULE: ./src/EPCalculator.js
/**
 * @author pretender
 * @date 2020-12-04 
 * @description 打包压缩公共函数文件
 */

/* harmony default export */ const EPCalculator = ({
    //加法
    accAdd(arg1, arg2, original) {
        var r1, r2, m, result = '';
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        result = (arg1 * m + arg2 * m) / m;
        result = original ? result : result.toFixed(2);
        return result;
    },
    //减法
    accDel(arg1, arg2, original) {
        var r1, r2, m, result = '';
        arg1 = parseFloat(arg1);
        arg2 = parseFloat(arg2);
        try { r1 = arg1.toString().split(".")[1].length; } catch (e) { r1 = 0; }
        try { r2 = arg2.toString().split(".")[1].length; } catch (e) { r2 = 0; }
        m = Math.pow(10, Math.max(r1, r2));
        result = (arg1 * m - arg2 * m) / m;
        result = original ? result : result.toFixed(2);
        return result;
    },
    //乘法函数
    accMul(arg1, arg2, original) {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString(),
            result = '';
        try { m += s1.split(".")[1].length; } catch (e) { console.log(e.toString()) }
        try { m += s2.split(".")[1].length; } catch (e) { console.log(e.toString()) }
        result = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
        result = original ? result : result.toFixed(2);
        return result;
    },
    //除法函数
    accDiv(arg1, arg2, original) {
        var t1 = 0,
            t2 = 0,
            r1, r2,
            result = '';
        try { t1 = arg1.toString().split(".")[1].length; } catch (e) { console.log(e.toString()) }
        try { t2 = arg2.toString().split(".")[1].length; } catch (e) { console.log(e.toString()) }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        result = (r1 / r2) * Math.pow(10, t2 - t1);
        result = original ? result : result.toFixed(2);
        return result;
    }
});
;// CONCATENATED MODULE: ./src/index.js





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(213);
/******/ })()
;
});