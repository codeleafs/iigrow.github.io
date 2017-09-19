
# Redux是什么

  Redux is a predictable state container for JavaScript apps.

# 产生原因

  目标是创建一个状态管理库，来提供最简化 API，但同时做到行为的完全可预测，
  因此才得以实现日志打印，热加载，时间旅行，同构应用，录制和重放，而不需要任何开发参与。

  My goal was to create a state management library with minimal API but completely predictable behavior

#


# overview 
Redux is a predictable state container for JavaScript apps.

Redux evolves the ideas of Flux, but avoids its complexity by taking cues from Elm.

The whole state of your app is stored in an object tree inside a single store.
The only way to change the state tree is to emit an action, an object describing what happened.
To specify how the actions transform the state tree, you write pure reducers.

# reducer
It describes how an action transforms the state into the next state

    // function signature
    (state, action) => state

>The only important part is that you should not mutate the state object, but return a new object if the state changes

    const reducer = (state=initialState,action){
      switch(action.type) {
        // ...
      }
    }
    const store = createStore(reducer);
    store.subscribe(/*function*/) // response to state changes
    store.dispatch(/*action*/) // { type: 'CHANGE' , data: {}}
    store.getState() // return state object

>使用reduce实现管道机制

    const middleware = [
      (obj)=>{ return obj; },
      (obj)=>{ return obj; },
      (obj)=>{ return obj; }
    ];
    const data = {};
    //  管道机制
    middleware.slice(0,-1).reduceRight((reducer,middle)=>middle(reducer),middleware[0](data));

# Redux can be described in three fundamental principles

1. Single source of truth: The state of your whole application is stored in an object tree within a single store.
2. State is read-only: The only way to mutate the state is to emit an action, an object describing what happened.
3. Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers.

# 异步action

引入 redux-thunk Middleware

    // thunk action creater
    export function fetchData(data) {
      return dispatch => {
        dispatch(/*action*/); // start request
        return fetch('url').then(response => {
          dispatch(/*action*/)
          dispatch(/*action*/)
        })
      }
    }

任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，以及得到全局 state 中所需的任何内容。 connect() 的唯一参数是 selector。此方法可以从 Redux store 接收到全局的 state，然后返回组件中需要的 props。最简单的情况下，可以返回一个初始的 state （例如，返回认证方法），但最好先将其进行转化。

组件其实是状态机（State Machines） #
React 把用户界面当作简单状态机。把用户界面想像成拥有不同状态然后渲染这些状态，可以轻松让用户界面和数据保持一致。

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。React 来决定如何最高效地更新 DOM。

State 工作原理
常用的通知 React 数据变化的方法是调用 setState(data, callback)。这个方法会合并（merge） data 到 this.state，并重新渲染组件。渲染完成后，调用可选的 callback 回调。大部分情况下不需要提供 callback，因为 React 会负责把界面更新到最新状态。

哪些组件应该有 State？
大部分组件的工作应该是从 props 里取数据并渲染出来。但是，有时需要对用户输入、服务器请求或者时间变化等作出响应，这时才需要使用 State。

** 尝试把尽可能多的组件无状态化。** 这样做能隔离 state，把它放到最合理的地方，也能减少冗余，同时易于解释程序运作过程。

常用的模式是创建多个只负责渲染数据的无状态（stateless）组件，在它们的上层创建一个有状态（stateful）组件并把它的状态通过 props 传给子级。这个有状态的组件封装了所有用户的交互逻辑，而这些无状态组件则负责声明式地渲染数据。

哪些 应该 作为 State？
State 应该包括那些可能被组件的事件处理器改变并触发用户界面更新的数据。 真实的应用中这种数据一般都很小且能被 JSON 序列化。当创建一个状态化的组件时，想象一下表示它的状态最少需要哪些数据，并只把这些数据存入 this.state。在 render() 里再根据 state 来计算你需要的其它数据。你会发现以这种方式思考和开发程序最终往往是正确的，因为如果在 state 里添加冗余数据或计算所得数据，需要你经常手动保持数据同步，不能让 React 来帮你处理。

哪些 不应该 作为 State？
this.state 应该仅包括能表示用户界面状态所需的最少数据。因此，它不应该包括：

计算所得数据： 不要担心根据 state 来预先计算数据 —— 把所有的计算都放到 render() 里更容易保证用户界面和数据的一致性。例如，在 state 里有一个数组（listItems），我们要把数组长度渲染成字符串， 直接在 render() 里使用 this.state.listItems.length + ' list items' 比把它放到 state 里好的多。
React 组件： 在 render() 里使用当前 props 和 state 来创建它。
基于 props 的重复数据： 尽可能使用 props 来作为惟一数据来源。把 props 保存到 state 的一个有效的场景是需要知道它以前值的时候，因为未来的 props 可能会变化

给定一个数据模型，可以得到对应的的视图
V = f(M)

当数据模型产生变化的时候，其对应的视图也会随之变化
V + ΔV = f(M + ΔM)

如果从变更的角度去解读Model，数据模型不是无缘无故变化的，它是由某个操作引起的
ΔM = perform(action)

把每次的变更综合起来，可以得到对整个应用状态的表达
state := actions.reduce(reducer, initState)

这个表达式的含义是：在初始状态上，依次叠加后续的变更，所得的就是当前状态。这就是当前最流行的数据流方案Redux的核心理念。

