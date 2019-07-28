import './style.css'
import Icon from './single.png'
import Data from './data.xml'

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'hello world yaoqijun hahahah';

    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
