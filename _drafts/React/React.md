
用React解决了一个问题:
  building large applications with data that changes over time.

[React 核心](https://github.com/reactjs/react-basic)：

  Transformation:
  设计React的核心前提是认为UI只是把数据通过映射关系变换成另一种形式的数据，同样的输入必然会有同样的输出。

  Abstraction（不能仅用一个函数就能实现复杂的UI）
  需要把UI抽象成多个隐藏内部细节，又可复用的函数，通过在一个函数中调用另一个函数来实现复杂的UI。

  Composition（为了真正达到重用的特性，只重用叶子然后每次都为他们创建一个新的容器是不够的）
  需要可以包含其他抽象的容器再次进行组合，将多个不同的抽象合并为一个。

  function FancyBox(children) {
    return {
      borderStyle: '1px solid blue',
      children: children
    };
  }

  function UserBox(user) {
    return FancyBox([
      'Name: ',
      NameBox(user.firstName + ' ' + user.lastName)
    ]);
  }

  State (UI不仅是对服务端或业务逻辑状态的复制，还包括针对具体渲染目标的状态)
  倾向于使用不可变的数据模型，把可以改变state的函数串联起来作为原点放置在顶层。

  Memorization（使用相同的参数多次调用浪费资源）
  创建一个函数的memorized版本，用来追踪最后一个参数和结果，之后使用相同的值，就不需要反复执行它了。

  function memoize(fn) {
    var cachedArg;
    var cachedResult;
    return function(arg) {
      if (cachedArg === arg) {
        return cachedResult;
      }
      cachedArg = arg;
      cachedResult = fn(arg);
      return cachedResult;
    };
  }

  var MemoizedNameBox = memoize(NameBox);

  Lists（大部分UI都是展示列表数据中不同item的列表结构）
  为了管理列表item的state，我们可以创造一个Map容纳具体item的state。

  Continuations（UI中有太多的列表，明确的管理就需要大量的重复性样板代码）
  可以推迟一些函数的执行，进而把一些模版移出业务逻辑。比如使用柯里化

  State Map（使用组合避免重复执行相同的东西）
  把执行和传递state逻辑挪动到被复用很多的低层级的函数中去。

  function FancyBoxWithState(children,stateMap,updateState) {
    return FancyBox(
      children.map(child => child.continuation(
        stateMap.get(child.key),
        updateState
      ))
    );
  }
  function UserList(users) {
    return users.map(user => {
      continuation: FancyNameBox.bind(null, user),
      key: user.id
    });
  }
  function FancyUserList(users) {
    return FancyBoxWithState.bind(null,
      UserList(users)
    );
  }
  const continuation = FancyUserList(data.users);
  continuation(likesPerUser, updateUserLikes);

  Memorization Map（在一个memoization列表中memoize多个item就会变得很困难，因为需要制定复杂的缓存算法来平衡调用频率和内存占有率）
  由于UI在同一个位置会相对的稳定，相同的位置一般每次都会接受相同的参数，所以可以使用集合来做memorization。

  function memoize(fn) {
    return function(arg, memoizationCache) {
      if (memoizationCache.arg === arg) {
        return memoizationCache.result;
      }
      const result = fn(arg);
      memoizationCache.arg = arg;
      memoizationCache.result = result;
      return result;
    };
  }

  function FancyBoxWithState(
    children,
    stateMap,
    updateState,
    memoizationCache
  ) {
    return FancyBox(
      children.map(child => child.continuation(
        stateMap.get(child.key),
        updateState,
        memoizationCache.get(child.key)
      ))
    );
  }

  const MemoizedFancyNameBox = memoize(FancyNameBox); 

  Algebraic Effects（多层抽象共享琐碎数据时，一层层传递数据非常麻烦）
  在React中使用context在多层抽象中传递数据，同时不牵涉到中间层级