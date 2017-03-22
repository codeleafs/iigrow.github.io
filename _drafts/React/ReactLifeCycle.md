---
layout: page
title: "React生命周期"
date: 
categories: React/LifeCycle
---

实例化

    React.createClass({
        getDefaultProps:function(){
            //该方法只会在CreateClass的时候调用一次
            //任何复杂的值，比如对象和数组，都会在所有的实例中共享
        },
        getInitialState:function(){
            //每次创建实例时该方法会被调用一次
        },
        componentWillMount:function(){
            //完成首次渲染之前被调用
        },
        render:function(){
            //会创建一个虚拟DOM
            //只能通过this.props和this.state访问数据
            //只能出现一个顶级组件
            //不能改变组件的状态或者修改DOM的输出
            //方法结束后会将虚拟DOM渲染到client
        },
        componentDidMount:function(){
            //可以通过this.getDOMNode()来获得DOM节点
        }})
生存期

    React.createClass({
        componentWillReceiveProps:function(newProps){
            //组件的props都可以通过父组件来更改，更改时会触发该事件
        },
        shouldComponentUpdate:function(){
            // 通过该方法可以对组件进行精确优化
            // 在首次渲染期间调用了forceUpdate方法后，该方法不会被调用
            // return false(跳过render/componentWillUpdate/componentDidUpdate)/true()
        },
        componentWillUpdate:function(){
            //与componentWillMount类似
        },
        render:function(){
        },
        componentDidUpdate:function(){
            //与componentDidMount类似
        },
        componentWillUnmount:function(){
            //组件被移除之前时，该方法被调用
        }
        })  
        
props

如果顶层的prop改变了，React会递归地向下遍历整棵组件树，重新渲染所有使用该属性的组件。

    var myProps=[{name:'hello world'}];
    <CustomComponent myProps={myProps} />
    // 或者
    var myProps2={name:'hello world'};
    <CustomComponent {...myProps2} />
    // 或者
    var customComponentExample=React.render(<CustomComponent />,/.../);
    customComponentExample.setProps(myProps);
    
验证props

通过在组件中定义一个配置对象，React提供了一种验证props的方式,如果传递的属性和[propsTypes](https://facebook.github.io/react/docs/reusable-components.html)不匹配，则会打印一个console.warn日志,为了性能考虑只在开发环境中使用该验证.

    React.createClass({
        propTypes:{
            id:React.PropTypes.number.isRequired
        },
        render:function(){}
        })
        
state

state只存在于组件的内部，可以用来确认一个元素的视图状态，可通过setState方法来修改，调用setState方法时，render就会被调用