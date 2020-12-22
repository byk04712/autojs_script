/*
 * @Author: Andy.Q
 * @Date: 2020-12-21 23:30:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-12-22 22:15:03
 * @Description: 完美人生每天自动签到
 * @FilePath: /autojs_script/perfectLife.js
 */
var RET_SUCCES = 0;
var RET_FAILED = -1;
var RET_ERR_AUTO_FAIED = -2;

function DUMP_OUT_ERR (format) {
  sleep(100);
  console.error(format);
}
function DUMP_OUT_VERBOSE (format) {
  sleep(100);
  console.verbose(format);
}
function DUMP_OUT_WARNING (format) {
  sleep(100);
  console.warn(format);
}

function accessibility_services () {
  try {
    auto();
  } catch (err) {
    return RET_ERR_AUTO_FAIED;
  }
  return RET_SUCCES;
}

function startup () {
  var ret = accessibility_services();
  if (ret) {
    DUMP_OUT_ERR('程序终止');
    return ret;
  }

  // 启动应用
  app.launch('com.cignacmb.hmsapp');
  // 睡眠十秒，等待广告和首页加载完毕
  sleep(1000 * 10);
  // 按下早起打卡
  press(220, 1520, 100);
  sleep(1000 * 4);
  // 点击早起签到
  press(550, 560, 100);
  sleep(1000 * 3);
  back();
  sleep(1000 * 2);
  press(540, 1520, 100);
  sleep(1000 * 3);
  press(530, 1125, 100);
  sleep(1000 * 4);
  press(530, 1400, 100);
  sleep(1000 * 6);
  toast('任务完成，再见');
}

DUMP_OUT_VERBOSE('程序执行开始....................');
startup();
DUMP_OUT_VERBOSE('程序执行结束....................');
exit();