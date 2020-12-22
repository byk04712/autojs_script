/*
 * @Author: Do not edit
 * @Date: 2020-12-16 22:21:14
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-12-18 00:03:19
 * @Description: 支付宝
 * @FilePath: /demo02/alipay.js
 */
(function () {
  // 打开支付宝
  function launchAlipay () {
    app.launch('com.eg.android.AlipayGphone');
    sleep(1000);
    // 双击底部栏首页滑到顶部
    for (var i = 0; i < 2; i++) {
      press(120, device.height - 50, 100);
    }
  }

  function registEvent () {
    // 启用按键监听
    events.observeKey();
    // 监听音量上键按下
    events.onKeyDown("volume_down", function (event) {
      toast("脚本手动退出");
      exit();
    });
  }

  auto();
  // 注册监听退出事件
  registEvent();
  // 启动支付宝应用
  launchAlipay();
  // 请求截屏权限
  if (!requestScreenCapture()) {
    toastLog('没有截图权限，完犊子了，拜拜');
    exit();
  }
  var forest = images.read("/sdcard/Pictures/QQ/forest.png");
  if (!forest) {
    toastLog('手机内没有蚂蚁森林图标，拜拜');
    exit();
  }
  // 截图并找到蚂蚁森林
  var p = findImage(captureScreen(), forest, {
    region: [0, 0, device.width, device.height],
    threshold: 0.2
  });
  if (p) {
    toastLog("找到蚂蚁森林图标啦: " + p);
  } else {
    toastLog("没有找到蚂蚁森林图标");
  }
  
})();
