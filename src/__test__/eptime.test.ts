import EPTime from "../EPTime";

test("测试日期格式化：", () => {
  expect(EPTime.outTime(new Date("2023-10-26"), "yyyy/MM/dd")).toBe(
    "2023/10/26"
  );
});

test("测试时间戳格式化：", () => {
  expect(EPTime.outTime(new Date("2023-10-26").getTime(), "yyyy/MM/dd")).toBe(
    "2023/10/26"
  );
});

test("测试时间字符串格式化：", () => {
  expect(EPTime.outTime("2023-10-26", "yyyy/MM/dd")).toBe("2023/10/26");
});

test("测试时间字符串转时间", () => {
  expect(
    EPTime.outTime(EPTime.formatTime("20230926181012", "strtime"), "yyyy/MM/dd")
  ).toBe("2023/10/26");
});

test("测试相差时间", () => {
  expect(EPTime.diffTime(60 * 60 * 9 * 1000, "time")).toBe("9时00分");
});

test("测试本周开始与结束", () => {
  expect(EPTime.getDayOfWeek()).toMatchObject({ begin: "2023/10/23 00:00:00", end: "2023/10/29 23:59:59"});
});

test("测试本月开始与结束", () => {
  expect(EPTime.getDayOfMonth()).toMatchObject({ start: "2023/10/01 00:00:00", end: "2023/10/31 23:59:59"});
});

test("测试本季度开始与结束", () => {
  expect(EPTime.getQuartorStartDate(2023, 2)).toMatchObject({ begin: "2023/04/01 00:00:00", end: "2023/06/30 23:59:59"});
})

test("测试字符串格式化", () => {
  expect(EPTime.formatDate(2)).toEqual('02');
})