import './style.css'

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'hello world yaoqijun hahahah';

    element.classList.add('hello');

    console.log('test all content');

    return element;
}

document.body.appendChild(component());
