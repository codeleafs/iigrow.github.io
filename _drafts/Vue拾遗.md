
可以用{{{}}} 或者v-html 修改innerHTML

当使用 DOM 作为模版时（例如，将 el 选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制，因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。
尤其像这些元素 <ul> ， <ol>， <table> ， <select> 限制了能被它包裹的元素， <option> 只能出现在其它元素内部。

在 Vue.js 中，父子组件的关系可以总结为 props down, events up 
父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，那就是自定义事件！

HTML 特性不区分大小写。当使用非字符串模版时，prop的名字形式会从 camelCase 转为 kebab-case（短横线隔开）：

它是一个字面 prop ，它的值以字符串 "1" 而不是以实际的数字传下去。
<!-- 传递了一个字符串"1" -->
<comp some-prop="1"></comp>
<!-- 传递实际的数字 -->
<comp v-bind:some-prop="1"></comp>

你可能想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on
<my-component v-on:click.native="doTheThing"></my-component>

自定义事件也可以用来创建自定义的表单输入组件，使用 v-model 来进行数据双向绑定。

<input v-model="something">
<input v-bind:value="something" v-on:input="something = $event.target.value">

<button-counter v-on:eventname="incrementTotal"></button-counter>
=>
this.$emit('eventname')

多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的 <component> 元素，动态地绑定到它的 is 特性：
var vm = new Vue({
  el: '#example',
  data: {
    currentView: 'home'
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
<component v-bind:is="currentView">
  <!-- 组件在 vm.currentview 变化时改变！ -->
</component>

如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数：
<keep-alive>
  <component :is="currentView">
    <!-- 非活动组件将被缓存！ -->
  </component>
</keep-alive>

$slots
$scopedSlots

已经移除了 $index 和 $key 这两个隐式声明变量

<div v-for="item in items" track-by="id">
=>
<div v-for="item in items" v-bind:key="item.id">

