
ReactRouter是基于React的路由类库

    <Router>
     <Route path="/" component={App}>
       <Route path="about" component={About} />
       <Route path="inbox" component={Inbox} >
            <Route path="message/:id" component={Message} />
       </Route>
     </Route>
     </Router>
   
    const routes={
       path:'/',
       component:App,
       childRoutes:[
           { path:'about',component:About},
           { path:'inbox',component:Inbox,childRoutes:[
                {path:'message/:id',component:Message}
                ]
           },
          ]
       }
    React.render(<Router routes={routes} />,document.body);
    
    // 访问 /about
    <App>
        <About>
        </About>
    </App>
    
    //访问 /inbox/message/123
    <App>
        <Inbox>
            <Message params={ id:123} />
        </Inbox>
    </App>
    
可通过this.props.params.XXX获取参数信息
可通过this.props.location.query.XXX获取参数信息

路由配置是一组指令，用来告诉router如何匹配URL以及匹配后如何执行代码。

IndexRoute用来设置默认页面,访问根目录时this.props.children是IndexRoute指定的component

    <Router>
        <Route path="/" component={App}>
        {/* 当 url 为/时渲染 Dashboard */}
        <IndexRoute component={Dashboard} />
        </Route>
    </Router>
    
路由的绝对路径是在path以“/”开头

    <Route path="/message/:id" component={Message} />
    
URL重定向

    <Route path="Inbox" component={Inbox} >
        <Route path="/message/:id" component={Message} />
        {/*  /inbox/message/:id  跳转ld到 /message/:id */}
        <Redirect from="message/:id" to="/message/:id" />About
    </Route>
    
    //路由重定向对应的配置信息如下:
    childRoutes:[
        {path:'message/:id',
         onEnter:function(nextState,replaceState){
             replaceState(null,'/message/'+nextState.params.id)
         }

路由Hook

Route可以定义onEnter和onLeave两个hook，这些hook会在页面跳转确认时触发一次，可以做权限验证，或数据持久化。

    <Route onEnter={} onLeave={} />
    
路由使用三个属性来决定是否匹配URL
1. 嵌套关系

ReactRouter使用路由嵌套来定义view的嵌套集合，URL被调用时ReactRouter会深度优先遍历整个路由配置，渲染与URL配置的路由。

2. 路径语法

:paramName 匹配位于 / ? #之后的URL
() 括起来的内容被认为是可选的
*匹配任意字符直到命中下一个字符或者整个URL的末尾，并创建一个splat参数

    <Route path="/hello/:name" /> //匹配 /hello/123
    <Route path="/hello(/:name)" /> //匹配 /hello 或 ／hello/123
    <Route path="/files/*.*" /> //匹配 /files/hello.jpg 或者 /files/path/to/hello.jpg

3. 优先级

路由算法会根据定义的顺序自顶向下匹配路由

ReactRouter是建立在history之上的。当浏览器地址变化时history解析URL转化为location对象，然后router使用它匹配路由。

1. createHashHistory

默认history，使用URL的hash部分创建形如example.com/#/some/path的路由,通过window.location.hash=newhash进行跳转。

2. createBrowserHistory


3. createMemoryHistory

MemoryHistory不会在地址栏被操作或读取，适合服务器渲染，测试及React Native渲染。

