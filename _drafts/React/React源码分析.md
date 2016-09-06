

├── addons
│   ├── ReactAddonsDOMDependencies.js
│   ├── ReactComponentWithPureRenderMixin.js
│   ├── ReactFragment.js
│   ├── ReactWithAddons.js
│   ├── link
│   │   ├── LinkedStateMixin.js
│   │   ├── ReactLink.js
│   │   └── ReactStateSetters.js
│   ├── shallowCompare.js
│   ├── transitions
│   │   ├── ReactCSSTransitionGroup.js
│   │   ├── ReactCSSTransitionGroupChild.js
│   │   ├── ReactTransitionChildMapping.js
│   │   ├── ReactTransitionEvents.js
│   │   └── ReactTransitionGroup.js
│   └── update.js
├── isomorphic
│   ├── React.js
│   ├── children
│   │   ├── ReactChildren.js
│   │   ├── onlyChild.js
│   │   └── sliceChildren.js
│   ├── classic
│   │   ├── class
│   │   │   └── ReactClass.js
│   │   ├── element
│   │   │   ├── ReactCurrentOwner.js
│   │   │   ├── ReactDOMFactories.js
│   │   │   ├── ReactElement.js
│   │   │   ├── ReactElementType.js
│   │   │   └── ReactElementValidator.js
│   │   └── types
│   │       └── ReactPropTypes.js
│   ├── hooks
│   │   ├── ReactComponentTreeDevtool.js
│   │   └── ReactComponentTreeHook.js
│   └── modern
│       ├── class
│       │   ├── React.d.ts
│       │   ├── ReactComponent.js
│       │   ├── ReactDOM.d.ts
│       │   ├── ReactNoopUpdateQueue.js
│       │   └── ReactPureComponent.js
│       ├── element
│       └── types
├── renderers
│   ├── art
│   │   └── ReactART.js
│   ├── dom
│   │   ├── ReactDOM.js
│   │   ├── ReactDOMServer.js
│   │   ├── client
│   │   │   ├── ReactBrowserEventEmitter.js
│   │   │   ├── ReactDOMComponentTree.js
│   │   │   ├── ReactDOMIDOperations.js
│   │   │   ├── ReactDOMSelection.js
│   │   │   ├── ReactDOMTreeTraversal.js
│   │   │   ├── ReactEventListener.js
│   │   │   ├── ReactInputSelection.js
│   │   │   ├── ReactMount.js
│   │   │   ├── ReactReconcileTransaction.js
│   │   │   ├── eventPlugins
│   │   │   │   ├── BeforeInputEventPlugin.js
│   │   │   │   ├── ChangeEventPlugin.js
│   │   │   │   ├── DefaultEventPluginOrder.js
│   │   │   │   ├── EnterLeaveEventPlugin.js
│   │   │   │   ├── FallbackCompositionState.js
│   │   │   │   ├── SelectEventPlugin.js
│   │   │   │   ├── SimpleEventPlugin.js
│   │   │   │   └── TapEventPlugin.js
│   │   │   ├── findDOMNode.js
│   │   │   ├── inputValueTracking.js
│   │   │   ├── renderSubtreeIntoContainer.js
│   │   │   ├── syntheticEvents
│   │   │   │   ├── SyntheticAnimationEvent.js
│   │   │   │   ├── SyntheticClipboardEvent.js
│   │   │   │   ├── SyntheticCompositionEvent.js
│   │   │   │   ├── SyntheticDragEvent.js
│   │   │   │   ├── SyntheticFocusEvent.js
│   │   │   │   ├── SyntheticInputEvent.js
│   │   │   │   ├── SyntheticKeyboardEvent.js
│   │   │   │   ├── SyntheticMouseEvent.js
│   │   │   │   ├── SyntheticTouchEvent.js
│   │   │   │   ├── SyntheticTransitionEvent.js
│   │   │   │   ├── SyntheticUIEvent.js
│   │   │   │   └── SyntheticWheelEvent.js
│   │   │   ├── utils
│   │   │   │   ├── DOMChildrenOperations.js
│   │   │   │   ├── DOMLazyTree.js
│   │   │   │   ├── ViewportMetrics.js
│   │   │   │   ├── createMicrosoftUnsafeLocalFunction.js
│   │   │   │   ├── getEventCharCode.js
│   │   │   │   ├── getEventKey.js
│   │   │   │   ├── getEventModifierState.js
│   │   │   │   ├── getEventTarget.js
│   │   │   │   ├── getNodeForCharacterOffset.js
│   │   │   │   ├── getTextContentAccessor.js
│   │   │   │   ├── getVendorPrefixedEventName.js
│   │   │   │   ├── isEventSupported.js
│   │   │   │   ├── setInnerHTML.js
│   │   │   │   └── setTextContent.js
│   │   │   ├── validateDOMNesting.js
│   │   │   └── wrappers
│   │   │       ├── AutoFocusUtils.js
│   │   │       ├── DisabledInputUtils.js
│   │   │       ├── LinkedValueUtils.js
│   │   │       ├── ReactDOMButton.js
│   │   │       ├── ReactDOMInput.js
│   │   │       ├── ReactDOMOption.js
│   │   │       ├── ReactDOMSelect.js
│   │   │       └── ReactDOMTextarea.js
│   │   ├── fiber
│   │   │   └── ReactDOMFiber.js
│   │   ├── server
│   │   │   ├── ReactMarkupChecksum.js
│   │   │   ├── ReactServerBatchingStrategy.js
│   │   │   ├── ReactServerRendering.js
│   │   │   ├── ReactServerRenderingTransaction.js
│   │   │   └── ReactServerUpdateQueue.js
│   │   └── shared
│   │       ├── CSSProperty.js
│   │       ├── CSSPropertyOperations.js
│   │       ├── DOMNamespaces.js
│   │       ├── DOMProperty.js
│   │       ├── DOMPropertyOperations.js
│   │       ├── Danger.js
│   │       ├── HTMLDOMPropertyConfig.js
│   │       ├── ReactComponentBrowserEnvironment.js
│   │       ├── ReactDOMComponent.js
│   │       ├── ReactDOMComponentFlags.js
│   │       ├── ReactDOMContainerInfo.js
│   │       ├── ReactDOMEmptyComponent.js
│   │       ├── ReactDOMFeatureFlags.js
│   │       ├── ReactDOMTextComponent.js
│   │       ├── ReactDefaultInjection.js
│   │       ├── ReactInjection.js
│   │       ├── SVGDOMPropertyConfig.js
│   │       ├── dangerousStyleValue.js
│   │       ├── escapeTextContentForBrowser.js
│   │       ├── hooks
│   │       │   ├── ReactDOMNullInputValuePropHook.js
│   │       │   └── ReactDOMUnknownPropertyHook.js
│   │       └── quoteAttributeValueForBrowser.js
│   ├── native
│   │   ├── NativeMethodsMixin.js
│   │   ├── ReactNative.js
│   │   ├── ReactNativeAttributePayload.js
│   │   ├── ReactNativeBaseComponent.js
│   │   ├── ReactNativeBridgeEventPlugin.js
│   │   ├── ReactNativeComponentEnvironment.js
│   │   ├── ReactNativeComponentTree.js
│   │   ├── ReactNativeContainerInfo.js
│   │   ├── ReactNativeDOMIDOperations.js
│   │   ├── ReactNativeDefaultInjection.js
│   │   ├── ReactNativeEventEmitter.js
│   │   ├── ReactNativeEventPluginOrder.js
│   │   ├── ReactNativeGlobalResponderHandler.js
│   │   ├── ReactNativeMount.js
│   │   ├── ReactNativePropRegistry.js
│   │   ├── ReactNativeReconcileTransaction.js
│   │   ├── ReactNativeTagHandles.js
│   │   ├── ReactNativeTextComponent.js
│   │   ├── ReactNativeTreeTraversal.js
│   │   ├── createReactNativeComponentClass.js
│   │   └── findNodeHandle.js
│   ├── noop
│   │   └── ReactNoop.js
│   ├── shared
│   │   ├── ReactDebugTool.js
│   │   ├── ReactInstrumentation.js
│   │   ├── ReactPerf.js
│   │   ├── fiber
│   │   │   ├── ReactChildFiber.js
│   │   │   ├── ReactFiber.js
│   │   │   ├── ReactFiberBeginWork.js
│   │   │   ├── ReactFiberCommitWork.js
│   │   │   ├── ReactFiberCompleteWork.js
│   │   │   ├── ReactFiberPendingWork.js
│   │   │   ├── ReactFiberReconciler.js
│   │   │   ├── ReactFiberRoot.js
│   │   │   ├── ReactFiberScheduler.js
│   │   │   ├── ReactPriorityLevel.js
│   │   │   ├── ReactReifiedYield.js
│   │   │   ├── ReactTypeOfWork.js
│   │   │   └── isomorphic
│   │   │       ├── ReactCoroutine.js
│   │   │       └── ReactTypes.js
│   │   ├── hooks
│   │   │   ├── ReactChildrenMutationWarningHook.js
│   │   │   ├── ReactHostOperationHistoryHook.js
│   │   │   └── ReactInvalidSetStateWarningHook.js
│   │   ├── shared
│   │   │   └── shouldUpdateReactComponent.js
│   │   ├── stack
│   │   │   ├── event
│   │   │   │   ├── EventConstants.js
│   │   │   │   ├── EventPluginHub.js
│   │   │   │   ├── EventPluginRegistry.js
│   │   │   │   ├── EventPluginUtils.js
│   │   │   │   ├── EventPropagators.js
│   │   │   │   ├── SyntheticEvent.js
│   │   │   │   └── eventPlugins
│   │   │   │       ├── ResponderEventPlugin.js
│   │   │   │       ├── ResponderSyntheticEvent.js
│   │   │   │       ├── ResponderTouchHistoryStore.js
│   │   │   │       └── TouchHistoryMath.js
│   │   │   └── reconciler
│   │   │       ├── ReactChildReconciler.js
│   │   │       ├── ReactComponentEnvironment.js
│   │   │       ├── ReactCompositeComponent.js
│   │   │       ├── ReactDefaultBatchingStrategy.js
│   │   │       ├── ReactEmptyComponent.js
│   │   │       ├── ReactEventEmitterMixin.js
│   │   │       ├── ReactHostComponent.js
│   │   │       ├── ReactInstanceHandles.js
│   │   │       ├── ReactInstanceMap.js
│   │   │       ├── ReactInstanceType.js
│   │   │       ├── ReactMultiChild.js
│   │   │       ├── ReactMultiChildUpdateTypes.js
│   │   │       ├── ReactNodeTypes.js
│   │   │       ├── ReactOwner.js
│   │   │       ├── ReactReconciler.js
│   │   │       ├── ReactRef.js
│   │   │       ├── ReactSimpleEmptyComponent.js
│   │   │       ├── ReactUpdateQueue.js
│   │   │       ├── ReactUpdates.js
│   │   │       ├── getHostComponentFromComposite.js
│   │   │       └── instantiateReactComponent.js
│   │   └── utils
│   │       ├── CallbackQueue.js
│   │       ├── ReactErrorUtils.js
│   │       ├── ReactFeatureFlags.js
│   │       ├── Transaction.js
│   │       ├── accumulate.js
│   │       ├── accumulateInto.js
│   │       ├── adler32.js
│   │       ├── forEachAccumulated.js
│   │       └── isTextInputElement.js
│   └── testing
│       ├── ReactTestMount.js
│       ├── ReactTestReconcileTransaction.js
│       └── ReactTestRenderer.js
├── shared
│   ├── types
│   │   ├── ReactPropTypeLocationNames.js
│   │   ├── ReactPropTypeLocations.js
│   │   ├── ReactPropTypesSecret.js
│   │   └── checkReactTypeSpec.js
│   ├── utils
│   │   ├── KeyEscapeUtils.js
│   │   ├── PooledClass.js
│   │   ├── ReactElementSymbol.js
│   │   ├── canDefineProperty.js
│   │   ├── deprecated.js
│   │   ├── flattenChildren.js
│   │   ├── getIteratorFn.js
│   │   ├── reactProdInvariant.js
│   │   └── traverseAllChildren.js
│   └── vendor
│       └── third_party
│           └── webcomponents.js
└── umd
    ├── ReactDOMServerUMDEntry.js
    ├── ReactDOMUMDEntry.js
    ├── ReactUMDEntry.js
    ├── ReactWithAddonsUMDEntry.js
    └── shims
        ├── ReactAddonsDOMDependenciesUMDShim.js
        ├── ReactComponentTreeHookUMDShim.js
        ├── ReactCurrentOwnerUMDShim.js
        └── ReactUMDShim.js