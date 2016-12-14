
模块分两类：
  Node提供的核心模块：源码编译过程中编译 并放入代码堆中
  用户编写的文件模块：运行时加载，需要完整的路径分析，文件定位，编译执行过程

  Node对于引入过的模块都会进行缓存，以减少二次引入时的不必要开销。

  CommonJS 模块规范允许在标识符中不包含文件扩展名，此时Node会按 .js / .json / .node的次序补足扩展名，依次进行尝试

  编译过程中 Node对获取的javascript文件内容进行头尾包装。在头部添加了 function(exports,require,module,__filename,_dirname){}
  编译之后：
    (function(exports,require,module,__filename,_dirname){
      var math = require('math);
      exports.area = function(xx){
        return xx;
      }
    });

  .node 文件 被 process.dlopen()方法进行加载和执行