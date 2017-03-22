
Load your app with ?react_perf in the query string (for example, http://localhost:3000/?react_perf).
Open the Chrome DevTools Timeline tab and press Record.
Perform the actions you want to profile. Don't record more than 20 seconds or Chrome might hang.

 between all the fields of props and state to determine if the component should update.
 just inherit from React.PureComponent
 Most of the time, you can use React.PureComponent instead of writing your own shouldComponentUpdate. 
 It only does a shallow comparison

 prevState.words.concat(['marklar']) => [...prevState.words, 'marklar']

React implements a heuristic O(n) algorithm based on two assumptions:
Two elements of different types will produce different trees.
The developer can hint at which child elements may be stable across different renders with a key prop.
When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. 

React and Web Components are built to solve different problems. 
Web Components provide strong encapsulation for reusable components, 
while React provides a declarative library that keeps the DOM in sync with your data.The two goals are complementary. 
As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.

Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

The HOC isn't concerned with how or why the data is used, and the wrapped component isn't concerned with where the data came from.
higher-order component (HOC)
const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
});
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }
    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

Container components are part of a strategy of separating responsibility between high-level and low-level concerns. 
Containers manage things like subscriptions and state, and pass props to components that handle things like rendering UI.

function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
