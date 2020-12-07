/**
 * @author pretender
 * @date 2020-12-04 
 * @description 打包压缩公共函数文件
 */

export default {
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
}