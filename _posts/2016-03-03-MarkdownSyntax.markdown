---
layout: post
title:  "Markdown部分语法说明"
date:   2016-03-03 17:56
categories: jekyll update
---

# Markdown部分语法说明

this is an H1
== 
    this is an H1
    == 
this is an H2
--
    this is an H2
    --
# this is an H1
    # this is an H1
   
## this is an H2
    ## this is an H2
    
###### this is an H6
    ###### this is an H6
# this is an H1 #
    # this is an H1 #
## this is an H2 ##
    ## this is an H2 ##
\> 表示引用
> 表示引用

\>> 子项
>> 子项

*/+/- 都可以做无序列表

* red
* green
* blue
--- 
有序列表前面用 数字. 的方式
1. red
2. green
3. blue
---
列表项之间隔一个空行，则会将项渲染为<p>
* red

* green

前面四个空格或一个Tab，就会渲染为代码块

    console.log('Hello world !');
    
符号 ` 括起来的表示单行代码块

`console.log();`

至少三个*/- 表示一条分隔线
***

---

[baidu](http://www.baidu.com)

    [baidu](http://www.baidu.com)

相同服务器的地址跳转

[About](/about/)

    [About](/about/)
同一个页面的锚定位

[tag][id]

    [tag][id]


[id][]

隐藏的锚链接
[id]: http://www.baidu.com "可选的Title标示"
    [id]: http://www.baidu.com "可选的Title标示"
以下渲染为em标签括起来

*single asterisks*

    *single asterisks*
_single underscores_

    _single underscores_
以下渲染为strong标签括起来

**double asterisks**

    **double asterisks**
__double underscores__

    __double underscores__

图像标示

![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg)
![Alt text][id1]

    ![Alt text][id1]
隐藏图片
[id1]: path/to/image "可选的Title标示"
    [id1]: path/to/image "可选的Title标示"
<http://www.baidu.com>

    <http://www.baidu.com>
<address@iigrow.com>

    <address@iigrow.com>

\为转义符

\* backslash \*