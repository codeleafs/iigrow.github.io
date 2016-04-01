大的代码库需要被组织起来，Module系统提供了用模块的方式去分离代码库。

有以下几种模块定义方式：

1. `<script>`标签的方式

  模块导出为全局对象的接口，有以下几个问题：
>全局对象冲突
>导入顺序是重要的
>处理各个库的依赖很麻烦

2. CommonJs

  通过使用require方法同步加载依赖，并使用module.exports返回导出接口，nodejs使用该方式。
>同步阻塞式并不适用于网络，网络需要异步处理
>不能并发请求多个模块

3. AMD

  define定义模块，require加载模块,require.js使用该方式

>读写比较麻烦

4. ES6 modules

  ES6在语法层面支持了模块化 使用import/export/module方式去加载

>浏览器支持需要一段时间

Webpack is a module bundler
Webpack takes modules with dependencies and generates static assets representing those modules
webpack处理带有依赖关系的模块，生成一系列表示这些模块的静态资源

webpack goals:

*. 将依赖树拆分为可按需加载的块 
*. 更少的初始加载时间
*. 每个静态资源都应该是一个模块
*. 以模块化的方式集成第三方类库
*. 自定义几乎模块打包器的每一部分
*. 适合大项目

webpack的特点

>Code Splitting
webpack的依赖树中有两种依赖方式 sync/async,
webpack将代码库分割为按需加载的块，该功能是可选的，在代码库中定义分割点，webpack小心处理依赖，并输出文件。
>Loaders
Loaders是资源文件转换器，以参数形式传入资源文件的源文件并返回新的源文件。[loaders列表](http://webpack.github.io/docs/list-of-loaders.html)
1. Loaders支持链式，应用于资源管道，最后的loader返回JavaScript，或者其他任意格式（传递给下一个loader）
2. Loaders支持同步和异步
3. Loaders运行用nodejs运行，可以做任何可能的事在这儿
4. Loaders接受查询参数，在将配置传递给loader时使用
5. Loaders可以绑定正则表达式扩展
6. Loaders可以通过npm 发布/安装
7. Normal modules can export a loader in addition to the normal main via package.json loader
8. Loaders可以附加任意文件
9. 一般模块可以更容易导出为loader
10. Loaders can emit additional arbitrary files

Loaders通常使用XXX-loader的命名方式，XXX是context name，可以使用XXX-loader或者XXX引用该loader
loader命名约定和顺序优先是定义在resolveLoader.moduleTemplates用webpack的配置API

>Clever parsing

>Plugin system

    npm install webpack -g