import './style.css'
import Icon from './single.png'
import Data from './data.xml'
import printMe from './print.js'

function component() {
    const element = document.createElement('div');

    // 添加string 字符对象
    element.innerHTML = 'hello world yaoqijun hahahah';
    element.classList.add('hello');

    // 添加图片对象
    const myIcon = new Image();
    myIcon.src = Icon
    element.appendChild(myIcon);

    // 添加数据对象
    console.log(Data);

    // 添加Buttion 对象
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    console.log('123213');

    return element;
}

document.body.appendChild(component());
