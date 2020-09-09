function h(tag, props, ...children) {
    let element = document.createElement(tag);
    element = Object.assign(element, props);
    element.append(...children);
    return element;
}
export default h;