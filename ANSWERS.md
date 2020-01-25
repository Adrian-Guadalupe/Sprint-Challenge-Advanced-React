- [ ] Why would you use class component over function components (removing hooks from the question)?

      Class Components have been a big part of the React ecosystem because they brought a lot of functionality that we normally didn’t get with the React API when using function components. Now with hooks, that functionality is available in function components. However, a LOT of projects will still have class components in them, and we need to be prepared to work with classes when we see them.



- [ ] Name three lifecycle methods and their purposes.

      1.	The render() method is one of the React lifecycle methods that is used to tell React, to return some piece of DOM. The React virtual DOM will then handle the steps to mount those DOM pieces.

      2.	The componentDidMount method is a part of the mounting phase in the React Lifecycle. This method gets called as soon as the render method is called the first time. Inside of componentDidMount we can call setState which forces a re-render of our component. This way, any asynchronous actions should be performed inside of our componentDidMount function, especially when it comes to fetching data via HTTP. Data fetching is the de-facto purpose for using componentDidMount within a component because of its position within the component lifecycle.

      3.	componentDidUpdate()is called after componentDidMount() and can be useful to perform some action when the state changes.
      componentDidUpdate() takes as its first two arguments the previous props and the previous state.
      Inside the method we can check if a condition is met and perform an action based on it.




- [ ] What is the purpose of a custom hook?

      Custom Hooks, are so-called because you are building the hook yourself (customizing it), to apply non-visual behavior and stateful logic throughout your components. This way, you can reuse the same hook over and over again. Custom hooks follow the same patterns of naming (i.e. prefacing the function name with use, as in useState). You can build a reusable custom hook for anything from handling controlled inputs, to managing event listeners, or watching for key presses.



- [ ] Why is it important to test our apps?

      Automated testing minimizes the risk of bugs finding their way into production code
         •	Surfaces bugs faster.
         •	Reduces the risk of regressions.
         •	Allows us to trust the code.
         •	Makes us think about the edge cases.
         •	Acts as a safety net when making changes or refactoring.
         •	Acts as documentation for the code.
         •	Encourages us to write more testable (better!) code.
