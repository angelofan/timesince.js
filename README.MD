# About this 关于此库

Extends the JavaScript Date prototype with a method that returns a human readable "time ago" string between then and now

使用以下方法扩展JavaScript Date原型，该方法返回人类可读的“多少时间前”字符串

# Installation 安装

## Use CDN 使用CDN

正在寻找CDN托管平台

## Self-hosted 自托管

Introduce the `timesince.js` file into your project.

将`timesince.js`文件引入您的项目中即可

# Internatialization 国际化

Modify the `DEFAULT_LANG` variable in the `timesince.js` file to achieve internationalization.

修改`timesince.js`文件中的`DEFAULT_LANG`变量即可实现国际化

# Example Usage 用法示例:

```
let time = "2021-03-05 13:08:01";
new Date(time).timeSince();
```
