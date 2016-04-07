# Webpack

## Why?

---

### HTML
1. 1993年6月作为IETF(The Internet Engineering Task Force)工作草案发布
2. 1997年1月 HTML3.2成为W3C（World Wide Web Consortium）推荐标准
3. 2014年10月发布HTML5

### JavaScript

1. 1995年 由Netscape公司的Brendan Eich在 Netscape Navigator浏览器上首次设计实现而成
2. 1997年在ECMA(European Computer Manufactures Association)的协调下统一标准定为ECMA-262
3. 2015年6月发布第6版

从静态网页到动态网页，从简单的页面到单页应用程序,页面的JavaScript代码越来越多，这些代码的组织就成了一个问题，通过模块化可以更好的组织代码。
模块化有以下几种方式：
* 使用`<script>`标签,模块导出为全局对象
>全局对象冲突，严格的导入顺序，库相关的依赖处理很麻烦
* 使用CommonJS,通过require方法同步加载依赖，并使用module.exports返回导出模块(nodejs使用该方式)
>同步阻塞式并不适用于网络环境，网络需要异步处理以及并发请求多个模块
* 使用AMD,通过define定义模块，require加载模块(require.js使用该方式)
>定义模块，加载模块比较麻烦
* ES6模块机制
>浏览器原生支持需要一段时间

解决方案：
* 开发者自己选择模块风格
* 兼容已有的代码
* 很容易自定义模块风格

## What?

### webpack is a module bundler. 
webpack处理带有依赖关系的模块，生成一系列表示这些模块的静态资源。

webpack的目标：
* 将依赖树拆分为可按需加载的块
* 更少的初始加载时间
* 每个静态资源都应该是一个模块
* 以模块化的方式集成第三方类库
* 几乎可以自定义模块打包器的每一部分
* 适用于大型项目

webpack的特殊之处

Code Splitting

TODO:写两种依赖的加载模式

CommonJS

    // base.js
    /*
    * code scope
    */
    module.exports = base;
    
    // common.js
    var base = require('./base');
    
    // require.ensure当调用callback时，dependencies被同步调用
    require.ensure(dependencies,callback)
    
    
AMD

    // function signature 
    // dependencies默认为['require','exports','module']
    // factory的返回值就是这个模块的exported value
    
    define(id?:String,dependencies?:String[],factory:Function|Object);
    
    define('common',['base'],function(base){});
    define(['base'],function(base){});
    define(function(require){
        var base = require('./base');
    });
    
    require('base');
    
    require(dependencies,callback);
    

webpack has two types of dependencies in its dependency tree: sync and async. Async dependencies act as split points and form a new chunk. After the chunk tree is optimized, a file is emitted for each chunk.

Loaders

webpack can only process JavaScript natively, but loaders are used to transform other resources into JavaScript. By doing so, every resource forms a module.

Loaders是导出function的node模块，是资源文件转换器，以参数形式传入资源文件的源文件并返回新的源文件([loaders列表](http://webpack.github.io/docs/list-of-loaders.html))。
1. Loaders支持链式，应用于资源管道，最后的loader返回JavaScript，或者其他任意格式
2. Loaders支持同步和异步
3. Loaders使用nodejs执行，可以做任何可能的事在这儿
4. Loaders接受查询参数，在将配置传递给loader时使用
5. Loaders可以绑定正则表达式扩展
6. Loaders可以通过npm 发布/安装
7. Normal modules can export a loader in addition to the normal main via package.json loader
8. Loaders可以附加任意文件
9. 一般模块可以更容易导出为loader
10. Loaders can emit additional arbitrary files

TODO:开发一个loader

Clever parsing

webpack has a clever parser that can process nearly every 3rd party library. It even allows expressions in dependencies like so require("./templates/" + name + ".jade"). It handles the most common module styles: CommonJs and AMD.

Plugin System

TODO:开发一个插件

webpack features a rich plugin system. Most internal features are based on this plugin system. This allows you to customize webpack for your needs and distribute common plugins as open source.


## How?

install

    npm install webpack --save-dev
    npm install less less-loader --save-dev
    // 如果使用开发者工具
    npm install webpack-dev-server --save-dev
    
    
