# DOM: The Document Object Model

- Structured representation of an HTML document;
- The DOM is used to connect webpages to scripts like JavaScript;
- For each HTML box, there is an object in the DOM that we can access and interact with.

![DOM tree](/images/pic_htmltree.gif)

## Events

- **Events**: Notifications that are sent to notify the code that something happend on the webpage;
- **Examples**: clicking a button, resizing a window, scrolling down or pressing a key;
- **Event listeners**: A function that performs an action based on a certain event. It waits for a specific event to happen.
- **Event** can only be processed or handled as soon as the **Execution Stack** is empty(which means that all the functions have returned).
- **Event** is a function, so it gets it's own **Execution Context**.