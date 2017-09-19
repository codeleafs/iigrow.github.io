
React官方提供了Performance Tools，其使用起来也很简单，通过Perf.start启动一次性能分析，并通过Perf.stop结束一次性能分析。


调用Perf.stop后，我们就可以通过Perf提供的API来获取本次性能分析的数据指标。其中最有用的API是Perf.printWasted()，其结果给出你在哪些组件上进行了无意义的(没有引起真实DOM的改变)虚拟DOM比较，比如如下结果表明我们在TodoItem组件上浪费了4ms进行无意义的虚拟DOM比较，我们可以从这里入手，进行性能优化。


而Perf.printInclusive()的结果则给出渲染各个组件的总体时间，通过它的结果我们可以找出哪个组件是页面渲染的性能瓶颈。


和Perf.printInclusive()相似的API还有Perf.printExclusive()，只是其结果是组件渲染的独占时间，即不包括花费于加载组件的时间： 处理 props, getInitialState, 调用 componentWillMount 及 componentDidMount, 等等。