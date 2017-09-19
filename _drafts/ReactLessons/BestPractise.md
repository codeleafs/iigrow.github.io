
// 如果是 pure componnet 则将props放在外边，非pure component将props放里面

componentName.propTypes = () => {
  onSubmit: React.PropTypes.func
}

<!-- 匿名组件 -->
export default () => (<div></div>)
组件为:
  function () {
    return React.createElement("div", null);
  }

<!-- 非匿名组件 -->
const Name = () => (<div></div>)
const Name = function Name() { return <div></div> }

function Name() {
  return <div></div>
}

passing object to setState() is not the problem here. The real problem is passing object to setState() when you want to calculate the next state from the previous state. 
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
// 如果需要根据上一个stage计算下一个stage 则需要给setState一个callback 因为setState是异步的
this.setState({ name: value })
this.setState(function(state,props){
  return {

  }
})