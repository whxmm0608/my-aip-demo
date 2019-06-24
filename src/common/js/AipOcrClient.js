const AipOcrClient = require("baidu-aip-sdk").ocr;

// 设置APPID/AK/SK
const APP_ID = "16620341";//设置APP_ID
const API_KEY = "IjoVFE28duZ1GdkVVbhghzSV";//设置API_KEY
const SECRET_KEY = "wt3XU6LBWzsuH4cuSc9T4MWpgvgSdmmK";//设置SECRET_KEY

// 新建一个对象，建议只保存一个对象调用服务接口
let client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
module.exports = client;
