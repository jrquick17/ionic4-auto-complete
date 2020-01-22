cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova.plugin.zoom.Zoom",
      "file": "plugins/cordova.plugin.zoom/www/Zoom.js",
      "pluginId": "cordova.plugin.zoom",
      "clobbers": [
        "cordova.plugins.Zoom"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-ionic-webview": "4.1.1",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova.plugin.zoom": "4.4.55130.0712"
  };
});