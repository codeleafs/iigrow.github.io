
[mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function): If an object is passed, each function inside it is assumed to be a Redux action creator. An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props.

If a function is passed, it will be given dispatch as the first parameter. It’s up to you to return an object that somehow uses dispatch to bind action creators in your own way. (Tip: you may use the bindActionCreators() helper from Redux.)

If you do not supply your own mapDispatchToProps function or object full of action creators, the default mapDispatchToProps implementation just injects dispatch into your component’s props.