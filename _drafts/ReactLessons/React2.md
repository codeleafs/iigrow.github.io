
When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. 
For performance reasons, propTypes is only checked in development mode.

MyComponent.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: React.PropTypes.node,

  // A React element.
  optionalElement: React.PropTypes.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: React.PropTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ]),

  // An array of a certain type
  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: React.PropTypes.shape({
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: React.PropTypes.func.isRequired,

  // A value of any data type
  requiredAny: React.PropTypes.any.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};


The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted

React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.

ref={(input) => { this.textInput = input; }} />
If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", 
and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have some issues, are considered legacy, 
and are likely to be removed in one of the future releases. If you're currently using this.refs.textInput to access refs,
 we recommend the callback pattern instead.

 <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> supports defaultValue.


If you're benchmarking or experiencing performance problems in your React apps, 
make sure you're testing with the minified production build
The development build includes extra warnings that are helpful when building your apps, 
but it is slower due to the extra bookkeeping it does.
 new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}),

http://localhost:3000/?react_perf

When a component's props or state change, 
React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. 

This pattern is common enough that React provides a helper to use this logic - just inherit from React.PureComponent. 
So this code is a simpler way to achieve the same thing:
shallow comparison ，PureComponent组件自动对state和props进行浅比较，以决定shouldComponentUpdate的返回值
all the fields of props and state to determine if the component should update.

var SayHello = React.createClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  handleClick: function() {
    alert(this.state.message);
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
});

class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }
  // WARNING: this syntax is experimental!
  // Using an arrow here binds the method:
  handleClick = () => {
    alert(this.state.message);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
}

If you'd rather play it safe, you have a few options:

Bind methods in the constructor.
Use arrow functions, e.g. onClick={(e) => this.handleClick(e)}.
Keep using React.createClass().