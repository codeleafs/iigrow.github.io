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


Loaders module is expected to export a function.

Loaders通常使用XXX-loader的命名方式，XXX是context name，可以使用XXX-loader或者XXX引用该loader
loader命名约定和顺序优先是定义在resolveLoader.moduleTemplates用webpack的配置API

Loaders使用方式:
    1. 使用require声明的方式
        >
    require("./loader!./dir/files.ext");
    //多个loader用!分隔
    require("style!css!less!bootstrap/less/bootstrap.less");
    //在前面加上!可以重写loader
    require("!style!css!less!boostrap/less/bootstrap.less");
        
    2. 使用配置文件
    
    {
        module:{
            loaders:[{test:/\.jade$/,loader:"jade"},
            {test:/\.css$/,loader:["style","css"]}]
        }
    }
                 
    3. 使用CLI方式
    
    webpack --module-bind jade --module-bind 'css=style!css'
    
Loaders可以接受参数，例如url-loader?paramname=value

    require(url-loader?minmetype=image/png!/./file.png");
    {test:/\.png$/,loader:"url-loader?mimetype=image/png"}
    {
        test:/.\png$/, 
        loader:"url-loader",
        query:{mimetype:"image/png"}
    }

>Clever parsing

>Plugin system

使用插件:
    
    var webpack=require("webpack");
    module.exports={
      plugin:[
        new webpack.ResolverPlugin(
          [new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json",["main"])],[]
        )
    }
    
    var ComponenetPlugin=require("component-webpack-plugin");
    module.exports={
        plugin:[
            new ComponentPlugin()
        ]
    }
    
    
webpack配置
---

    {
      context:__dirname+"/app",
      entry:"./entry",
      output:{
         path:__dirname+"/dist",
         filename:"bundle.js"
    }
    
1. context

是entry的基础目录，output.pathinfo缩短到这个目录 

2. entry

捆绑点的入口,可以设置为模块/模块数组(最后一个被export)/对象

    entry:"./entry1"
    entry:["./entry1","./entry2"]
    // 会创建多个entry bundles
    entry:{
      page1:"./entry1",
      page2:"./entry2"
    }

3. output

    output:{
      filename:'bundle.js', // [name]/[hash]/[chunkhash] 例如：[name].js
      path:'/built',
      publishpath:'',
      chunkFilename:'', //[id]/[name]/[hash]/[chunkhash] 设置non-entry chunks的文件名  The filename of non-entry chunks as relative path inside the output.path directory
      sourceMapFilename:'',// 默认"[file].map" javascript sourcemap的文件名
      devtoolModuleFilenameTemplate:'',
      devtoolFallbackModuleFilenameTemplate:'',
      devtoolLineToLine:'',
      hotUpdateChunkFilename:'',
      hotUpdateMainFilename:'',
      jsonpFunction:'',
      hotUpdateFunction:'',
      pathinfo:'',
      library:'', // 将bundles以类库方式导出
      libraryTarget:'',
      umdNamedDefine:'',
      sourcePrefix:'',
      crossOriginLoading:''
    }
    
    >The publicPath specifies the public URL address of the output files when referenced in a browser. For loaders that embed <script> or <link> tags or reference assets like images, publicPath is used as the href or url() to the file when it’s different than their location on disk (as specified by path). This can be helpful when you want to host some or all output files on a different domain or on a CDN. The Webpack Dev Server also uses this to determine the path where the output files are expected to be served from. As with path you can use the [hash] substitution for a better caching profile.
    

4. module
    
    module:{
      // 每一个loader都有如下属性
      // test:必须满足的条件
      // exclude:必须不被满足的条件
      // include:必须被满足的条件
      // loader:以!分隔的loaders
      // loaders:loaders数组
      loaders:[
        {
      ],
      preloaders:[],
      postLoaders:[],
      noParse:'', // 正则表达式或者正则表达式数组 过滤不需要解析的文件
    }
    
        IMPORTANT: The loaders here are resolved relative to the resource which they are applied to. This means they are not resolved relative to the configuration file. If you have loaders installed from npm and your node_modules folder is not in a parent folder of all source files, webpack cannot find the loader. You need to add the node_modules folder as absolute path to the resolveLoader.root option. (resolveLoader: { root: path.join(__dirname, "node_modules") })

    
5. resolve

    resolve:{
      alias:{},
      root:[], // 模块目录的绝对路径 可以用path.resolve('./app/modules')将相对路径转为绝对路径
      
    
    
    npm install webpack -g