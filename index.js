/* 工具类 */

/**
 * 设置 cookie
 * @param{String} cname 键
 * @param{String} cvalue 值
 * @param{String} cvalue 值
 * @return{undefined} 无返回
 */
function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

/**
 * 根据键名，获取cookie值
 * @param{String} cname 键
 * @return{String} 如有则返回值；如无则返回空字符串
 */
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

/**
 * 根据键名，删除cookie值
 * @param{String} cname 键
 * @return{undefined} 无返回
 */
function deleteCookie(cname) {
  setCookie(cname, "", -1);
}

/**
 * 根据 userAgent 判断是否为移动端
 * @return{Boolean} 移动端返回 true，非移动端返回 false
 */
function isMobile() {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true; // 手机端
  } else {
    return false; // PC端
  }
}

/**
 * 根据 userAgent 判断是否为微信浏览器 或 是否企业微信
 * @return{String | Boolean} false:不是微信浏览器 | is_wxwork: 企业微信浏览器 | is_wx: 微信浏览器
 */
function isWxwork() {
  var ua = navigator.userAgent.toLowerCase();
  let isWx = ua.match(/MicroMessenger/i) == "micromessenger";
  if (!isWx) {
    // 返回false 即说明不是微信浏览器
    return false;
  } else {
    let isWxWork = ua.match(/WxWork/i) == "wxwork";
    if (isWxWork) {
      // 为企业微信浏览器
      return "is_wxwork";
    } else {
      // 仅为微信浏览器
      return "is_wx";
    }
  }
}

/**
 * 根据 userAgent 判断是否为安卓平台
 * @return{Boolean} true 为是安卓平台
 */
function isAndroid() {
  var u = window.navigator.userAgent;
  return u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
}

/**
 * 传入个位数字，返回两位数字字符串，6 => '06'
 * @param{Number | String} n 数字
 * @return{String} ex: 06
 */
function formatNumDoubleLen(n) {
  return n >= 0 && n < 10 ? "0" + n : n;
}

/**
 * date对象，返回 YYYY-MM-DD HH:MM 格式
 * @param{Date | Number} time 传入date对象，或者 new Date().getTime()
 * @param{String} 排版规则，默认值'{Y}-{M}-{D} {h}:{i}:{s} 星期{a}' 返回 2022-03-22 16:24:30 星期二；可以随意组合如 `{M}-{D} 星期{a}` 返回 03-22 星期二
 * @return{String} ex. 2022.03.22 14:54
 */
function formatDateInPattern(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

/**
 *两数相乘，解决精度问题
 *
 * @param {number} arg1 数字
 * @param {number} arg2 数字
 * @return {number}
 */
function accMul(arg1, arg2) {
  let m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  let digitLen1 = s1.split(".")[1];
  let digitLen2 = s2.split(".")[1];
  digitLen1 = digitLen1 ? digitLen1.length : 0;
  digitLen2 = digitLen2 ? digitLen2.length : 0;
  if (digitLen1) {
    m += digitLen1;
  }
  if (digitLen2) {
    m += digitLen2;
  }
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}

/**
 *两数相除，解决精度问题
 *
 * @param {number} arg1 数字
 * @param {number} arg2 数字
 * @return {number}
 */
function accDiv(arg1, arg2) {
  if (arg1 && arg2) {
    let m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    let digitLen1 = s1.split(".")[1];
    let digitLen2 = s2.split(".")[1];
    digitLen1 = digitLen1 ? digitLen1.length : 0;
    digitLen2 = digitLen2 ? digitLen2.length : 0;
    if (digitLen1) {
      m += digitLen1;
    }
    if (digitLen2) {
      m += digitLen2;
    }
    var num =
      Number(s1.replace(".", "")) /
      Number(s2.replace(".", "")) /
      Math.pow(10, m);
    return num.toFixed(3).slice(0, -1);
  } else {
    return "0.00";
  }
}

/**
 * 深复制对象
 *
 * @param {Object} obj 对象
 * @return {Object}
 */
function copyObjDeep(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = copyObjDeep(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

/**
 * @param  { any } data
 * @return { any }
 */
function deepClone(data) {
  // 判断类型
  function checkDataType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
  }
  const dataType = checkDataType(data);

  // init newData
  let newData;
  if (dataType === "Array") newData = [];
  else if (dataType === "Object") newData = {};
  else return (newData = data);

  // compound newData
  for (let key in data) {
    // if：剔除遍历原型上的属性
    if (data.hasOwnProperty(key)) {
      const subDataType = checkDataType(data[key]);
      if (subDataType !== "Array" && subDataType !== "Object") {
        newData[key] = data[key];
      } else {
        newData[key] = deepClone(data[key]);
      }
    }
  }
  return newData;
}

/**
 * 对象数组根据键去重
 * @param {Array[Object]} 对象数组
 * @param {String} 键名
 * @returns {Array[Object]}
 */
function uniqObjArrayByKey(arr, key) {
  let res = arr.filter(function (item, index, self) {
    return self.findIndex((el) => el[key] == item[key]) === index;
  });
  return res;
}

/**
 * 从 localStorage 取键值时，保护一下防止报错崩溃，如过没取到值设置默认值
 * @param {String} key 键名
 * @param {Any} defaultVal 默认值
 * @returns {Any} 返回已取到或默认设置的值
 */
function getObjFromLocalStorageByKey(key, defaultVal) {
  const str = window.localStorage.getItem(key);
  let val = defaultVal;
  if (str) {
    try {
      const _val = JSON.parse(str);
      val = _val;
    } catch (err) {
      console.warn(
        `get value from local storage by key:${key} fail, remain:`,
        defaultVal
      );
    }
  }
  return val;
}

/* 
  兼容mac的获取time
*/
function getTime(timeStr) {
  return new Date(Date.parse(timeStr.replace("-", "/"))).getTime();
}

/**
 * 与 findIndex相似，但是反向遍历
 * @param  { array } arr
 * @param  { function } callback
 * @param  { object } thisArg
 */
function findLastIndex(arr, callback, thisArg) {
  for (let index = arr.length - 1; index >= 0; index--) {
    const value = arr[index];
    if (callback.call(thisArg, value, index, arr)) {
      return index;
    }
  }
  return -1;
}

export default {
  isMobile,
  isWxwork,
  formatNumDoubleLen,
  formatDateInPattern,
  setCookie,
  getCookie,
  deleteCookie,
  accMul,
  accDiv,
  copyObjDeep,
  deepClone,
  getObjFromLocalStorageByKey,
  uniqObjArrayByKey,
  isAndroid,
  getTime,
  findLastIndex,
};
