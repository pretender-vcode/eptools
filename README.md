### 项目介绍
    项目旨在处理时间转换、数字的加减乘数等运算的一些通用函数
### 启动命名
```
npm install eptools --save
```
### 使用说明
``` javascript
import { EPTime, EPCalculator } from 'eptools';
```
> EPTime

| 函数 | 参数 | 说明 | 举例 |
| ---  | --- | --- | --- |
|outTime(v, format) | v: Date &#124; TimeStamp<br>format: 'yyyy-MM-dd HH:mm:ss' 见[时间格式](#date) | 对时间或者时间戳进行转换 |EPTime.outTime(new Date(),'yyyy/MM/dd HH:mm:ss') |
| formatTime(v, type) | v: String &#124; Date <br> type: 'strtime' &#124; 'datestr'  | 将时间数字字符串转成时间字符串，当v长度为14时且type为strtime时，输出年月日时分秒时间格式，长度为8时，输出年月日时间格式，当type为datestr时，输入yyyyMMddHH:mm:ss,否则原样输出v | EPTime.formatTime('20190203123523')<br>EPTime.formatTime('20190203')<br>EPTime.formatTime(new Date(),'datestr') | 
|EPTime.diffTime(inTime, type)|inTime:Number<br>type:String | 计算时间差，inTime 为毫秒数，type 为hour 返回毫秒数有多少小时，否则返回年月日时分秒| |
|getDayOfWeek|无| 获取本周的第一天和最后一天||
|getDayOfMonth|无|获取本月的第一天和最后一天||
|getQuartorStartDate|无|根据 年份 和 季度  获取 季度 第一天 和 季度 最后 一天||
|formatDate|value: Number|格式化月和日为MM、dd||

### <span id="date">时间格式</span>
|格式| 函数| 备注| 举例|
|--|--|--|--|
|yyyy|	年|	|	2017|
|M|	月	|不补0	|1|
|MM|	月|		|01|
|W|	周|	仅周选择器的 format 可用；|不补0	|1|
|WW|	周|	仅周选择器的 format 可用|	01|
|d|	日	|不补0|	2|
|dd|	日|	|	02|
|H|	小时	|24小时制；不补0|	3|
|HH|	小时|	24小时制|	03|
|h|	小时	|12小时制，须和 A 或 a 使用；不补0|	3|
|hh|	小时	|12小时制，须和 A 或 a 使用|	03|
|m|	分钟	|不补0|	4|
|mm|	|分钟|		04|
|s|	秒	|不补0|	5|
|ss|	秒|		05|
|A|	AM/PM|	仅 format 可用，大写|	AM|
|a|	am/pm|	仅 format 可用，小写|	am|
|timestamp|	JS时间戳	仅 value-format 可用；组件绑定值为number类型	|1483326245000|
|[MM]|	不需要格式化字符|	使用方括号标识不需要格式化的字符 (如 [A] [MM])	|MM|

> EPCalculator

| 函数 | 参数 | 说明 | 举例 |
| ---  | --- | --- | --- |
|accAdd|arg1:Number<br>arg2:Number<br>original:Boolean|加法运算：前面两个参数为被加数及加数，后面为是否原样输出还是保留两位小数|EPCalculator.accAdd(arg1,arg2,original)|
|accDel|arg1:Number<br>arg2:Number<br>original:Boolean|减法运算：前面两个参数为被减数及减数，后面为是否原样输出还是保留两位小数|EPCalculator.accDel(arg1,arg2,original)|
|accMul|arg1:Number<br>arg2:Number<br>original:Boolean|乘法运算：前面两个参数为被乘数及乘数，后面为是否原样输出还是保留两位小数|EPCalculator.accMul(arg1,arg2,original)|
|accDiv|arg1:Number<br>arg2:Number<br>original:Boolean|除法运算：前面两个参数为被除数及除数，后面为是否原样输出还是保留两位小数|EPCalculator.accDiv(arg1,arg2,original)|