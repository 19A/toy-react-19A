import {createElement} from './toy-react.js';
class MyComponent {

};

window.a = <div id='id' className='className'>
  <div>123</div>
  <div></div>
  <div></div>
</div>
window.b = <MyComponent id='id' class='class'/>
document.body.appendChild(window.a);
console.log('a:',a,'b:',b);