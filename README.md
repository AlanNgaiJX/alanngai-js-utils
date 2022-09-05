## Functions

<dl>
<dt><a href="#setCookie">setCookie(cname, cvalue, cvalue)</a> ⇒ <code>undefined</code></dt>
<dd><p>设置 cookie</p>
</dd>
<dt><a href="#getCookie">getCookie(cname)</a> ⇒ <code>string</code></dt>
<dd><p>根据键名，获取cookie值</p>
</dd>
<dt><a href="#deleteCookie">deleteCookie(cname)</a> ⇒ <code>undefined</code></dt>
<dd><p>根据键名，删除cookie值</p>
</dd>
<dt><a href="#isMobile">isMobile()</a> ⇒ <code>boolean</code></dt>
<dd><p>根据 userAgent 判断是否为移动端</p>
</dd>
<dt><a href="#isWxwork">isWxwork()</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd><p>根据 userAgent 判断是否为微信浏览器 或 是否企业微信</p>
</dd>
<dt><a href="#isAndroid">isAndroid()</a> ⇒ <code>boolean</code></dt>
<dd><p>根据 userAgent 判断是否为安卓平台</p>
</dd>
<dt><a href="#formatNumDoubleLen">formatNumDoubleLen(n)</a> ⇒ <code>string</code></dt>
<dd><p>传入个位数字，返回两位数字字符串，6 =&gt; &#39;06&#39;</p>
</dd>
<dt><a href="#formatDateInPattern">formatDateInPattern(time, pattern)</a> ⇒ <code>string</code></dt>
<dd><p>date对象，返回 YYYY-MM-DD HH:MM 格式</p>
</dd>
<dt><a href="#accMul">accMul(arg1, arg2)</a> ⇒ <code>number</code></dt>
<dd><p>两数相乘，解决精度问题</p>
</dd>
<dt><a href="#accDiv">accDiv(arg1, arg2)</a> ⇒ <code>number</code></dt>
<dd><p>两数相除，解决精度问题</p>
</dd>
<dt><a href="#copyObjDeep">copyObjDeep(obj)</a> ⇒ <code>object</code></dt>
<dd><p>深复制对象</p>
</dd>
<dt><a href="#deepClone">deepClone(data)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#uniqObjArrayByKey">uniqObjArrayByKey(array, key)</a> ⇒ <code>array</code></dt>
<dd><p>对象数组根据键去重</p>
</dd>
<dt><a href="#getObjFromLocalStorageByKey">getObjFromLocalStorageByKey(key, defaultVal)</a> ⇒ <code>any</code></dt>
<dd><p>从 localStorage 取键值时，保护一下防止报错崩溃，如过没取到值设置默认值</p>
</dd>
<dt><a href="#getTime">getTime(timeStr)</a></dt>
<dd><p>兼容mac的获取time</p>
</dd>
<dt><a href="#findLastIndex">findLastIndex(arr, callback, thisArg)</a></dt>
<dd><p>与 findIndex相似，但是反向遍历</p>
</dd>
</dl>

<a name="setCookie"></a>

## setCookie(cname, cvalue, cvalue) ⇒ <code>undefined</code>
设置 cookie

**Kind**: global function  
**Returns**: <code>undefined</code> - - 无返回  

| Param | Type | Description |
| --- | --- | --- |
| cname | <code>string</code> | 键 |
| cvalue | <code>string</code> | 值 |
| cvalue | <code>string</code> | 值 |

<a name="getCookie"></a>

## getCookie(cname) ⇒ <code>string</code>
根据键名，获取cookie值

**Kind**: global function  
**Returns**: <code>string</code> - - 如有则返回值；如无则返回空字符串  

| Param | Type | Description |
| --- | --- | --- |
| cname | <code>string</code> | 键 |

<a name="deleteCookie"></a>

## deleteCookie(cname) ⇒ <code>undefined</code>
根据键名，删除cookie值

**Kind**: global function  
**Returns**: <code>undefined</code> - - 无返回  

| Param | Type | Description |
| --- | --- | --- |
| cname | <code>string</code> | 键 |

<a name="isMobile"></a>

## isMobile() ⇒ <code>boolean</code>
根据 userAgent 判断是否为移动端

**Kind**: global function  
**Returns**: <code>boolean</code> - - 移动端返回 true，非移动端返回 false  
<a name="isWxwork"></a>

## isWxwork() ⇒ <code>string</code> \| <code>boolean</code>
根据 userAgent 判断是否为微信浏览器 或 是否企业微信

**Kind**: global function  
**Returns**: <code>string</code> \| <code>boolean</code> - - false:不是微信浏览器 | is_wxwork: 企业微信浏览器 | is_wx: 微信浏览器  
<a name="isAndroid"></a>

## isAndroid() ⇒ <code>boolean</code>
根据 userAgent 判断是否为安卓平台

**Kind**: global function  
**Returns**: <code>boolean</code> - - true 为是安卓平台  
<a name="formatNumDoubleLen"></a>

## formatNumDoubleLen(n) ⇒ <code>string</code>
传入个位数字，返回两位数字字符串，6 => '06'

**Kind**: global function  
**Returns**: <code>string</code> - - ex: 06  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> \| <code>string</code> | n 数字 |

<a name="formatDateInPattern"></a>

## formatDateInPattern(time, pattern) ⇒ <code>string</code>
date对象，返回 YYYY-MM-DD HH:MM 格式

**Kind**: global function  
**Returns**: <code>string</code> - - ex. 2022.03.22 14:54  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>date</code> \| <code>number</code> | time 传入date对象，或者 new Date().getTime() |
| pattern | <code>string</code> | template 排版规则，默认值'{Y}-{M}-{D} {h}:{i}:{s} 星期{a}' 返回 2022-03-22 16:24:30 星期二；可以随意组合如 `{M}-{D} 星期{a}` 返回 03-22 星期二 |

<a name="accMul"></a>

## accMul(arg1, arg2) ⇒ <code>number</code>
两数相乘，解决精度问题

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arg1 | <code>number</code> | 数字 |
| arg2 | <code>number</code> | 数字 |

<a name="accDiv"></a>

## accDiv(arg1, arg2) ⇒ <code>number</code>
两数相除，解决精度问题

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arg1 | <code>number</code> | 数字 |
| arg2 | <code>number</code> | 数字 |

<a name="copyObjDeep"></a>

## copyObjDeep(obj) ⇒ <code>object</code>
深复制对象

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | 对象 |

<a name="deepClone"></a>

## deepClone(data) ⇒ <code>any</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | 对象 |

<a name="uniqObjArrayByKey"></a>

## uniqObjArrayByKey(array, key) ⇒ <code>array</code>
对象数组根据键去重

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | 对象数组 |
| key | <code>string</code> | 键名 |

<a name="getObjFromLocalStorageByKey"></a>

## getObjFromLocalStorageByKey(key, defaultVal) ⇒ <code>any</code>
从 localStorage 取键值时，保护一下防止报错崩溃，如过没取到值设置默认值

**Kind**: global function  
**Returns**: <code>any</code> - - 返回已取到或默认设置的值  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 键名 |
| defaultVal | <code>any</code> | 默认值 |

<a name="getTime"></a>

## getTime(timeStr)
兼容mac的获取time

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timeStr | <code>string</code> | 时间戳 ex.2022-08-31 |

<a name="findLastIndex"></a>

## findLastIndex(arr, callback, thisArg)
与 findIndex相似，但是反向遍历

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | 数组 |
| callback | <code>function</code> | 回调 |
| thisArg | <code>object</code> | this |

