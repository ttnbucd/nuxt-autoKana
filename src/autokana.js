import { tree } from './constants.js';

function isMobile(navigator) {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
};

export default class AutoKana {
  constructor(target) {
    this.el = null;
    this.inputNode = [];
    this.kanaNode = [];
    this.initialize(target);
  }

  initialize(target) {
    this.el = document.querySelector(target);
    this.setEvent();
  }

  setEvent() {
    if(isMobile(navigator)){
      this.el.addEventListener('input', this.setInputEvent.bind(this));
    }else{
      this.el.addEventListener('keydown', this.setKeyDownEvent.bind(this));
    };
  }

  setInputEvent(e) {
    console.log(e.data);
    if(e.data && e.data.match(/^[ぁ-んー　]*$/)){
      this.inputNode.push(e.data);
    };
  }

  setKeyDownEvent(e) {
    if(e.keyCode === 229 && e.code.match(/^Key/)){
      this.inputNode.push(e.key);
    };
    if(e.keyCode === 8 && e.target.value.length <= 1){
      this.inputNode = [];
      this.kanaNode = [];
    };
  }

  getKanaValue() {
    if(this.el.value === ''){
      this.inputNode = [];
      this.kanaNode = [];
    };
    if(isMobile(navigator)){
      return this.inputNode.join('');
    }else{
      this.getKanaFromInputNode();
      return this.kanaNode.join('');
    };
  }

  getKanaFromInputNode() {
    let prevNode = null;
    for(let i=0; i<this.inputNode.length; i++) {
      const node = this.inputNode[i];
      const val = prevNode ? prevNode[node] : tree[node];
      if(typeof val === 'string'){
        this.kanaNode.push(val);
        prevNode = null;
      }else if(typeof val === 'object'){
        prevNode = val;
      }
    };
  }
}