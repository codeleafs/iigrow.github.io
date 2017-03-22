
Reat:
  A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES

为什么React会火？
React解决了什么问题？
React产生的意义是什么？



[create-react-app](https://github.com/facebookincubator/create-react-app)
npm install -g create-react-app
create-react-app hello-world
cd hello-world
npm start


JSX is a syntax extension to JavaScript, to describe what the UI should look like

You can embed any JavaScript expression in JSX
用 () 包裹，避免[自动插入分号](http://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)


After compilation, JSX expressions become regular JavaScript objects.

This means that you can use JSX inside of if statements and for loops, 
assign it to variables, accept it as arguments, and return it from functions:

attribute:
  const element = <div tabIndex="0"></div>;
  const element = <img src={user.avatarUrl}></img>; //  embed a JavaScript expression

Since JSX is closer to JavaScript than HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
For example, class becomes className in JSX, and tabindex becomes tabIndex.

Babel compiles JSX down to React.createElement() calls.
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);


React elements are immutable. Once you create an element, you can't change its children or attributes. 
An element is like a single frame in a movie: it represents the UI at a certain point in time.
With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Always start component names with a capital letter.

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. 

Components must return a single root element. 

We recommend naming props from the component's own point of view rather than the context in which it is being used.

A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), 
it is a good candidate to be a reusable component.

Such functions are called "pure" because they do not attempt to change their inputs, and always return the same result for the same inputs.
All React components must act like pure functions with respect to their props.

State is similar to props, but it is private and fully controlled by the component.

Class components should always call the base constructor with props.

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.

If you need to store something that is not used for the visual output. If you don't use something in render(), it shouldn't be in the state.
state针对于render而生，如果在render逻辑中没有用不到state则不去使用。

It will use this.setState() to schedule updates to the component local state

setState()
  1. The only place where you can assign this.state is the constructor.不能直接修改，否则 this will not re-render a component

React may batch multiple setState() calls into a single update for performance

下一个state的计算不能依赖上一个state
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

When you call setState(), React merges the object you provide into the current state.
The merging is shallow

 "top-down" or "unidirectional" data flow

/*********events********************/

 React events are named using camelCase

bind的目的是在方法中获得整个this对象而不是 js方法自己的this对象
 class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

if this callback is passed as a prop to lower components, those components might do an extra re-rendering. 
We generally recommend binding in the constructor to avoid this sort of performance problem.

You can use variables to store elements.

In rare cases you might want a component to hide itself even though it was rendered by another component.
To do this return null instead of its render output.

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}


Keys help React identify which items have changed, are added, or are removed. 
Keys should be given to the elements inside the array to give the elements a stable identity:

We don't recommend using indexes for keys if the items can reorder, as that would be slow

Keys used within arrays should be unique among their siblings. 
However they don't need to be globally unique. 
We can use the same keys when we produce two different arrays

JSX allows embedding any expressions in curly braces

controlled components: have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form

In HTML, a <textarea> element defines its text by its children, In React, a <textarea> uses a value attribute instead

Note that the Coconut option is initially selected, because of the selected attribute. 
React, instead of using this selected attribute, uses a value attribute on the root select tag

Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - 
they all accept a value attribute that you can use to implement a controlled component.

To write an uncontrolled component, instead of writing an event handler for every state update, 
you can use a ref to get form values from the DOM.

<input type="text" ref={(input) => this.input = input} />
this.input.value

<input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> supports defaultValue.

<input defaultValue="Bob" type="text" ref={(input) => this.input = input} />


Capitalized types indicate that the JSX tag is referring to a React component. 
These tags get compiled into a direct reference to the named variable, so if you use the JSX <Foo /> expression, Foo must be in scope.

You can also refer to a React component using dot-notation from within JSX
<MyComponents.DatePicker color="blue" />;

<MyComponent message="hello world" />
<MyComponent message={'hello world'} />

If you pass no value for a prop, it defaults to true

<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />
