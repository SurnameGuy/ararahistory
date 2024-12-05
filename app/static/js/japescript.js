// Alias to document.getElementById().
// Example: id("myId");
function id(x) {
    return document.getElementById(x)
}

// Returns all the elements on the site with the same ID.
// Example: ids("myId");
function ids(x) {
    return document.querySelectorAll(`[id=${x}]`)
}

// Alias to document.getElementsByClassName().
// Example: classes("myClass");
function classes(x) {
    return document.getElementsByClassName(x)
}

// Alias to document.getElementsByTagName().
// Example: tags("div");
function tags(x) {
    return document.getElementsByTagName(x)
}

// Get the parents of an element.
// Example: parents(myElement);
function parents(x) {
    let y = x
    z = []
    if (y != null) {
        while (y) {
            z.push(y);
            y = y.parentNode;
        }
        return z
    }
}

// Create new element.
// Example: create("div", "Hello world!");
function create(x, y) {
    let z = document.createElement(x);
    z.appendChild(document.createTextNode(y));
    return z;
}

function unwrap(x) {
var wrapper = x;
wrapper.outerHTML = wrapper.innerHTML;
}

////// NOT WORKING
//// Create new HTML element.
//// Example: createHtml("<div>Hello world!</div>");
function createHtml(x) {
    let y = document.createElement('temporary-node');
    y.innerHTML = x;
    y.outerHTML = y.innerHTML;
    return y;
}

// Inserts a new element before the <script> tag where this function is used.
// Example: add(create("div", "Hello world!")
function add(x) {
    let y = document.currentScript;
    return y.parentElement.insertBefore(x, y);
}

function addChildren(x) {
    unwrap(add(x));
}

// Alias to console.log().
// Example: print("Hello world!")
function print(x) {
    return console.log(x);
}

// Another alias to console.log().
// Example: log("Hello world!")
function log(x) {
    return console.log(x);
}