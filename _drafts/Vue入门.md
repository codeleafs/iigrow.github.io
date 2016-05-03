Vue思想概述

每个Vue实例都会代理其 `data` 对象里所有的属性，只有这些被代理的属性是响应的。

Vue.js的模版是基于DOM实现的，这意味着所有的Vue.js模版都是可解析的有效的HTML。

插入文本
1. 使用 {{variableName}} 当variableName变化时，会自动变化；
2. 使用 {{* varibaleName}} 单次插值，今后variableName变化时，不会引起该地方值变化； 

插入HTML
1. 使用 {{{ raw_html }}} 将输出HTML

{{ varibaleName }} 称为 Mustache标签
Mustache标签内的文本称为绑定表达式，***一段绑定表达式由一个简单的JavaScript表达式和可选的一个或多个过滤器构成(不能是语句)***。

过滤器
1. Vue.js允许在表达式后添加可选的过滤器(filter),以管道符(|)指示，过滤器实质上是一个JavaScript函数，过滤器始终以表达式的值作为第一个参数
filterName 的第一个参数是message，第二个是arg1，第三个是arg3

    {{ message | filterName [arg1 [arg2]] }}
    
指令是特殊的带有前缀 `v-` 的特性，限定为绑定表达式，可以使用过滤器等等。
v-bind 用于响应地更新HTML特性

    <a v-bind:href-"url"></a>
    // href参数，将元素的href特性跟表达式url的值绑定，
    
>href="{{url}}"内部会转为v-bind绑定

v-on 用于监听事件

修饰符

修饰符是以.开始的特殊后缀，表示指令应当以特殊方式绑定，action是绑定的方式。

    <a v-bind:href.action="url" ></a>
    
v-bind: 缩写为 :
v-on: 缩写为 @

计算属性

由于在摸板中放入太多的逻辑会让模板过重且难以维护，Vue.js将绑定表达式限制为一个表达式，如果需要多于一个表达式的逻辑，应该使用计算属性。

    computed:{
        prop1:function(){
            return this.data1 + 1;
        }
    }
    //默认为get方式
    //以下为get和set方式
    computed:{
        prop1:{
            get:function(){},
            set:function(){}
        }
    }
    
>当data1发生变化时，prop1也会自动变化。

Vue提供了一个$watch方法用来监控 实例的数据变化

    vm.$watch('dataName',callback);
    
不推荐使用Mustache写法绑定class，使用v-bind:class来绑定class

    <div class="redClass" v-bind:class="{'classa':bool,'classb':bool}"></div>
    
    <div v-bind:class="dataName"></div>
    dataname:{ 'classa':true,'classb':false }
    
    <div v-bind:class="[classa,classb]" ></div>
    data:{ classa:'classNameA',classb:'classNameB' }
    
    <div v-bind:style="{color:'red',fontSize: fontSize+'px'}"></div>
    data:{fontSize:30}
    
>当 v-bind:style 使用需要厂商前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

v-if v-else 只能用于单标签 如果要多个标签 用 `<template></template>`括起来
v-show只是简单的切换元素的display属性
    
v-for 列表渲染

    // item in 10 则表示重复模板10次
    <li v-for="item in items">
        //$index表示当前数组的索引 
        //$key表示键值
    </li>
    // 也可以用item of items 
    <li v-for="(index,item) in items">
        //(key,val) in object 按照Object.keys()的结果遍历
    </li>

Vue.js包装了被观察数组的变异方法，所以可以触发视图更新，使用非变异方法时用返回新数组的方式触发数据更新。

Vue.js使用启发算法，以最大化复用DOM元素，因而用另一个数组替换数组是一个非常高效的操作。

track-by

使用track-by特性使得Vue能尽可能地复用已有实例

Vue不能检测到下面数组的变化，

    vm.items[0] = {};
    vm.items.length = 0;
Vue扩展了观察数组，添加了$set方法
    vm.items.$set(0,{})
    
通过事件修饰符.prevent .stop 来调用event.preventDefault() event.stopPropagation()

    <!-- 添加事件侦听器时使用 capture 模式 -->
    <div v-on:click.capture="doThis">...</div>

    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">...</div>
    
    <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
    <input v-on:keyup.13="submit">
全部的按键别名：

enter
tab
delete
esc
space
up
down
left
right

    // 可以使用 @keyup.f1 自定义按键别名
    Vue.directive('on').keyCodes.f1 = 112
    
缺动画    

使用v-model指令在表单元素上创建双向数据绑定，根据控件类型自动选取正确的方法更新元素。

默认情况下 v-model在input事件中同步 输入框值与数据，可以添加一个特性lazy 从而改到在change事件中同步

HTML 特性不区分大小写。名字形式为 camelCase 的 prop 用作特性时，需要转为 kebab-case（短横线隔开）

    Vue.component('child', {
    // camelCase in JavaScript
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
    })
    <!-- kebab-case in HTML -->
    <child my-message="hello!"></child>
    
可以用v-bind绑定动态props，当父组件的数据变化时，也会传导给子组件

初学者常犯的一个错误是使用字面量语法传递数值：

    <!-- 传递了一个字符串 "1" -->
    <comp some-prop="1"></comp>
    因为它是一个字面 prop，它的值以字符串 "1" 而不是以实际的数字传下去。如果想传递一个实际的 JavaScript 数字，需要使用动态语法，从而让它的值被当作 JavaScript 表达式计算：

    <!-- 传递实际的数字  -->
    <comp :some-prop="1"></comp>
    
prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。不过，也可以使用 .sync 或 .once 绑定修饰符显式地强制双向或单次绑定

注意如果 prop 是一个对象或数组，是按引用传递。在子组件内修改它会影响父组件的状态，不管是使用哪种绑定类型。

使用 $on() 监听事件；

使用 $emit() 在它上面触发事件；

HTML 特性不区分大小写。名字形式为 camelCase 的 prop 用作特性时，需要转为 kebab-case（短横线隔开）：