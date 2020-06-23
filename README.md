# DOM: The Document Object Model

- Structured representation of an HTML document;
- The DOM is used to connect webpages to scripts like JavaScript;
- For each HTML box, there is an object in the DOM that we can access and interact with.

![DOM tree](/images/pic_htmltree.gif)

--------------------------------------------------------------

## Document

The **HTML DOM document object** is the owner of all other objects in your web page.

The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

Below are some examples of how you can use the document object to access and manipulate HTML.

## Methods

**HTML DOM methods** are actions you can perform (on HTML Elements).

HTML DOM properties are values (of HTML Elements) that you can set or change.

The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as objects.
The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).

A **method** is an action you can do (like add or deleting an HTML element).

**Example**:

The following example changes the content (the innerHTML) of the `<p>` element with `id="demo"`:

```javascript
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

## Elements

Often, with JavaScript, you want to manipulate HTML elements.

To do so, you have to find the elements first. There are several ways to do this:

- Finding HTML elements by id
- Finding HTML elements by tag name
- Finding HTML elements by class name
- Finding HTML elements by CSS selectors
- Finding HTML elements by HTML object collections

**Example**:

This example finds the element with `id="intro"`:

```javascript
var myElement = document.getElementById("intro");
```

## Events

- **Events**: Notifications that are sent to notify the code that something happend on the webpage;
- **Examples**: clicking a button, resizing a window, scrolling down or pressing a key;
- **Event listeners**: A function that performs an action based on a certain event. It waits for a specific event to happen.
- **Event** can only be processed or handled as soon as the **Execution Stack** is empty(which means that all the functions have returned).
- **Event** is a function, so it gets it's own **Execution Context**.

**addEventListener types**:

- mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu;
- touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel;
- keyboard events (KeyboardEvent): keydown, keypress, keyup;
- form events: focus, blur, change, submit;
- window events: scroll, resize, hashchange, load, unload;