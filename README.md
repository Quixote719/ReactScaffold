## Requirements

-   `8.x <= node <= 11.x`
-   `npm`
-   `Chrome >= 70`

## 开发环境

-   安装依赖 `npm install 或 yarn install`
-   启动 node 服务 `npm start`

## 项目结构

```
├─public // 模板文件
├─config // 项目配置
├─scripts // npm脚本
├─mock // mock数据
└─src
    ├─assets // 静态文件存放
    ├─commonStyles // 公共样式
    ├─components   // 公共组件
    ├─constants // 常量
    ├─layouts // 布局
    ├─pages // 页面
    ├─servers // 接口
    ├─store
    └─utils //工具方法
... // 其他配置文件
```

## todoList

create-react-app 脚手架

[x]暴露出 webpack 配置文件 `npm run eject`

[x]webpack 配置自制

-   添加 alias 和对应的 path √
-   添加 less 和对应的 loader √
-   删除 sass-loader √
-   修改 eslint-loader √
-   增加 keep 文件占位 √
-   增加 mock 功能 x
-   dll 插件 √

[x] 添加 css 重置

[x]补充 readme 使用 tree 工具补充目录结构说明

[x]修改 eslint 及 prettier

[x] 添加 pre-commit 钩子
