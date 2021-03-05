# 关于此库

使用以下方法扩展JavaScript Date原型，该方法返回人类可读的友好时间格式，例如：“5分钟前”、“3天前”

# 安装

## 使用CDN

```
https://unpkg.com/browse/timesince.js@1.0.0/timesince.js
https://cdn.jsdelivr.net/npm/timesince.js@1.0.0/timesince.js
```

## 自托管

将`timesince.js`文件引入您的项目中即可

# 国际化

修改`timesince.js`文件中的`DEFAULT_LANG`变量即可实现国际化

# 用法示例:

```
let time = "2021-03-05 13:08:01";
new Date(time).timeSince();
```

# 更新日志

## v1.0.0

- 全新发布
- 支持中文和英文