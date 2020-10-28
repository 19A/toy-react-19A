class MyComponent {

};

export function createElement(tagName, attributes, ...children) {
  let dom;
  if (typeof key === 'string') {
    dom = document.createElement(tagName);
  } else {
    dom = new MyComponent;
  }
  for (let key in attributes) {
    dom.setAttribute(key, attributes[key]);
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    dom.appendChild(child);
  }
  return dom;
}