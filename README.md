## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-->
 Basically, elements are sorted using all of these.
GetElementById - The ID name of element is given uniquely, so when we to find a specific element, than search by GetElementById

getElementsByClassName- This is used to get multiple elements with the same class name at once. The advantage of this is that if the value of something is changed through JavaScript, it is automatically updated.

querySelector- This allows to search for elements by their ID, class name, and tag name. However, it selects the first matching element.

querySelectorAll - This is similar to querySelector but returns a list of items that match the CSS selector.


### 2. How do you create and insert a new element into the DOM?
-->
const newHeader = document.createElement("h1");
newHeader.innerText = "This is new Header"
const headSection = document.querySelector(".header-section"); // যেখানে ইনসার্ট করবেন
headSection.appendChild(newHeader);

### 3. What is Event Bubbling? And how does it work?
-->
Event Bubbling is when an event occurs on a child element, the event is not limited to that element. Its effects continue to reach its parent elements.
It basically goes to the immediate parent of the target where the event occurs and gradually extends its influence up to the target - parent - html - document object. Through this, we can process many events within a single add event listener.

### 4. What is Event Delegation in JavaScript? Why is it useful?
-->
Event Delegation is a technique where, instead of adding separate event listeners to each child element, a single event listener is added to their common parent element. All events of the child can be processed by adding a single event listener.
This is very important because it makes the code much smaller and simpler.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
-->
preventDefault() - This method disables the default behavior of an element. For example, disabling anchor tag behavior or turning off auto-reload.

stopPropagation() - This method disables Event Bubbling. As a result, the target event cannot be propagated to its parent.