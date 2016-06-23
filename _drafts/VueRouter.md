
使用v-link

v-link 是vue-router应用的不同路径之间的跳转指令，该指令接受一个javascript表达式，在触发时用该表达式的值调用router.go
v-link 对应的URL匹配当前的路径，该元素会添加特定的class: .v-link-active  可以全局定义 linkActiveClass，也可以添加参数 activeClass
可通过 exact:true/false 内连选项来设置只有当前路径完全一致时才匹配，而不是包含性匹配

    //字面量路径，用双引号包裹单引号
    <tagname v-link="'index'"></tagname>
    
    <tagname v-link="{path:'/index'}"></tagname>
    
    // 具名路径
    <tagname v-link="{ name: 'routername' ,params:{ name:value }}"></tagname>
    
    router.go({
      path:'',
      为true时路径始终被添加在当前路径之后 /a 跳转到 b 为true: /a/b 否则 b
      append:true,
      // 为true值时不产生跳转记录
      replace:true
    });
    
    router.go({
      name:'',
      // 可缺省
      params:'',
      // 可缺省
      query:''
      // 为true值时不产生跳转记录
      replace:true
    });
    
在使用了vue-router的应用中，路由对象会被注入每个组件中，赋值为 this.$route,路由变化时该对象动态更新。

    // 当前路由对象的绝对路径
    $route.path
    
    // 包含路由中的动态片段和全匹配片段的键值对
    $route.params
    
    // 查询参数的键值对
    $route.query
    
    // 路由规则所属的路由器
    $route.router
    
    // 当前匹配路径中所包含的所有片段对应的配置参数对象
    $route.matched
    
    // 当前路径的名字
    $route.name
    
    // 自定义字段 当嵌套路由被匹配时，每一个路径的自定义字段都会拷贝到同一个路由对象上，如果一个子路径与父路径有相同的字段，则子路径的值会覆盖父路径的值。
    router.map({
      ‘/home’:{
        component:{},
        customVariable:value // 路由匹配时 $route.customVariable值为value
      }
    });
    
    // 动态片段是以:号开头的路径片段定义，动态片段的值从$router.params中取
    router.map({
      '/home/index/:keyword':{}
    });
    
    /user/:username   /user/evan   username=evan
    /user/:username/post/:postid  /user/evan/post/123  username=evan postid=123
    
    /user/*           /user/a/b/c
    /user/*variable   /user/a/b/c    variable= 'a/b/c'
    /user/*variable/bar /user/a/b/c/bar  variable= 'a/b/c'
    
动态组件载入

    router.map({
      '/home':{
        component:function(resolve){
          resolve(MyComponent);
        }
      },
      'bill':{
        component:function(resolve){
          // 利用webpack的代码分隔功能  路由匹配时 自动异步加载依赖组件
          require(['./MyComponent.vue'],resolve);
        }
      }
    });
    
组件切换中的Hook
每个hook都有一个transition参数

    Vue.component('name',{
      route:{
        data:function(){},
        activate:function(transition){
          
        },
        deactivate:function(){},
        canActivate:function(){},
        canDeactivate:function(){},
        canReuse:function(){},
      }
    });
    
    transition.to
    transition.from
    transition.next()
    transition.abort([reason])
    transition.redirect(path)
    
Hook函数异步规则
在一个异步的Hook被resolve之前，路由切换会处于暂停状态
    1. 如果Hook返回Promise，则与Promise的resolve同步
    2. 如果Hook不返回Promise也没有参数，该Hook将被同步resolve
    3. 如果Hook不返回Promise，但有参数，则Hook会等到next/abort/redirect 之一调用才会resolve
    4. 验证类的Hook返回boolean值也会使得Hook同步resolve
    