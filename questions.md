### What is the difference between Component and PureComponent? give an example where it might break my app.
R// The Pure Component doesn't re-render when props unrelated to it changes. it uses the shouldComponentUpdate lifecycle function in order to do the comparassion.
Therefore if we have a prop that is an array, then the PureComponent will always re-render and might break the app even if the array elements are the same.

### Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
R// Yes, it is Dangerous because if we are comparing the props of the component to decide if update the component or not, and we are updating a value in the context, then the component won't update the value inside because the context propagation stops to this component since is not detecting changes on the props.
Therefore we're gonna get an outdated value from the context.

### Describe 3 ways to pass information from a component to its PARENT
1. Through a callback function: (from parent send a function that will received that data when child call that function with the data to share as param)
2. Thorugh an action in a state management system
3. Through a custom hook

### Give 2 ways to prevent components from re-rendering.
1. Using momoization (React.Memo, useCallback, useMemo)
2. Using PureComponent

### What is a fragment and why do we need it? Give an example where it might break my app.
R// React Fragment is used to wrap several elements in order to return multiple elements on a React Component, this is not possible without it.
We need it becasue of that and becasue it has better permormance than a div since basically it removes the extra divs around and allow us to save memory and speed.
Sometimes we need a div for styling. An example where can break out app is when we don't use ReactFragment and we got a lot of unnecesary divs, that way our app can become very slow.

### Give 3 examples of the HOC pattern
1. We are returning a Component definition instead of JSX
2. We share behavior between different component, like logic and calculations by wrapping our component with our HOC
3. Let say we want to share the the product information, we create a `withProduct` HOC and we can wrap any other component we want to use this information into our `withProduct` HOC

### what's the difference in handling exceptions in promises, callbacks and async...await.
R// The diffences is that with async..await we must wrap it into a try-catch block, while in promises..callback, we can right a catch statement to handle the error.

### How many arguments does setState take and why is it async.
R// 2 argument, the state to update and a callback function, if we want to excecute some action after the state has been update. Thats why is considered async.

### List the steps needed to migrate a Class to Function Component.
1. Remove the class keyword
2. Remove the contructor and pass this code either to the function body or to the useEffect(() => {}, []) hook.
3. Remove the use of the `this` keyword
4. Add the necesary hooks to replace the React Lyfecycle methods
5. Replace the render method to the return of the Function.

### List a few ways styles can be used with components.
1. Creating a CSS file and importing it to the component .
2. Creating CSS modules and import them to the component.
2. Using classNames instead of class to assign classes.
3. Using Object inside the style property with the name of the properties as key using CammelCased.

### How to render an HTML string coming from the server.
R// We could use: the `dangerouslySetInnerHTML` from React.js instead of innerHTML, but a safer way would be using Regex, split the content and re-markup.




