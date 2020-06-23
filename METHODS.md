# Methods

- `document.getElementById('id')` --> this method returns the element that has the ID attribute with the specified value.

- `document.querySelector('.class' or '#id')` --> this method returns the first element that matches a specified CSS selector(s) in the document.

- `document.querySelector().textContent = 'string'` --> The textContent property sets or returns the text content of the specified node, and all its descendants.

- `document.querySelector().innerHTML = <em> + 'string' + <em>` --> The innerHTML property sets or returns the HTML content (inner HTML) of an element.

- `document.querySelector().classList` --> The classList property returns the class name(s) of an element, as a DOMTokenList object.
- `document.querySelector().classList.remove('class')` --> Removes one or more class names from an element.
- `document.querySelector().classList.add('class', 'class')` --> Adds one or more class names to an element.
- `document.querySelector().classList.toggle('class')` --> Toggles between a class name for an element. The first parameter removes the specified class from an element, and returns false. If the class does not exist, it is added to the element, and the return value is true.

- `document.querySelector().style` --> The style property returns a CSSStyleDeclaration object, which represents an element's style attribute.
- `document.querySelector().style.display = 'none'` --> changes visibility of element
- `document.querySelector().style.src ='./pass/item` --> changes source pass.

- `document.querySelector().value = ''` --> The value property sets or returns the value of the value attribute of a text field. The value property contains the default value OR the value a user types in (or a value set by a script).

- `document.querySelector().addEventListener('type', function(){})` --> this method attaches an event handler to the document(specified element). It sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).
