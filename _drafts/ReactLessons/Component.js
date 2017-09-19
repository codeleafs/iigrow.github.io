
// Component

// container Component
/**
 * Redux将React组件分为容器型组件和展示型组件, 当容器型组件对应global state有变化时，它会将变化传播到其所有的子组件(一般为展示型组件)。
 * 简单来说容器型组件与展示型组件是父子关系,而展示型组件不直接从global state获取数据，其数据来源于父组件
 * 件关注的局容器型组件一般通过connet函数生成，它订阅了全局状态的变化，通过mapStateToProps函数，我们可以对全局状态进行过滤，只返回该容器型组部状态
 * 每一次全局状态变化都会调用所有容器型组件的mapStateToProps方法，该方法返回一个常规的Javascript对象，并将其合并到容器型组件的props上。
 */


自定义组件（ReactCompositeComponent）的生命周期主要通过三种状态进行管理：MOUNTING、RECEIVE_PROPS、UNMOUNTING，
它们负责通知组件当前所处的状态，应该执行生命周期中的哪个步骤，是否可以更新 state。
三个状态对应三种方法，分别为：mountComponent、updateComponent、unmountComponent，每个方法都提供了两种处理方法，
will 方法在进入状态之前调用，did 方法在进入状态之后调用，三种状态三种方法五种处理方法，此外还提供两种特殊状态的处理方法。

若存在 componentWillMount，则执行；如果此时在 componentWillMount 中调用 setState，是不会触发 reRender，而是进行 state 合并。

若存在 componentWillReceiveProps，则执行；如果此时在 componentWillReceiveProps 中调用 setState，是不会触发 reRender，而是进行 state 合并。


此时 this.state 虽然获取到更新数据，但只能在内部源码中使用，我们在开发时，若在 componentWillReceiveProps 中调用 setState，
那么在 componentWillReceiveProps、shouldComponentUpdate 和 componentWillUpdate 中还是无法获取到更新后的 this.state，
即此时访问的this.state 仍然是未更新的数据，只有在 render 和 componentDidUpdate 中才能获取到更新后的this.state。


// High-Order Component