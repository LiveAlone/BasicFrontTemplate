function component() {
    const element = document.createElement('div');

    element.innerHTML = 'hello world yaoqijun';

    console.log('test all content');

    return element;
}

document.body.appendChild(component());
