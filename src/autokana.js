import { tree } from './constants.js';

function isMobile(navigator) {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
};

function changeHiraganaToKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) + 0x60);
  });
}

export default class AutoKana {
  constructor(target) {
    this.el = null;
    this.inputNode = [];
    this.kanaNode = [];
    this.prevData = null;
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
      this.el.addEventListener('keydown', this.setKeydownEvent.bind(this));
    };
  }

  setInputEvent(e) {
    if(
      e.inputType === 'insertFromComposition' ||
      e.inputType === 'insertCompositionText' ||
      e.inputType === 'insertText'
    ){
      if(e.data.match(/^[ぁ-んァ-ン一　]*$/)){
        const normalize = e.data.slice(-1).normalize('NFD');
        this.inputNode.push(normalize[normalize.length - 1].charCodeAt(0));
        this.prevData = e.data;
      };
    }else if(e.inputType === 'deleteContentBackward'){
      if(e.target.value.length <= 1){
        this.inputNode = [];
      }else{
        this.inputNode.pop();
      };
      this.kanaNode = [];
    };
  }

  setKeydownEvent(e) {
    if(e.keyCode === 229 && e.code.match(/^Key/)){
      this.inputNode.push(e.key);
    };
    if(e.keyCode === 8){
      if(e.target.value.length <= 1){
        this.inputNode = [];
        this.kanaNode = [];
      }else{
        if(
          this.inputNode.length > 2 &&
          typeof tree[this.inputNode[this.inputNode.length - 2]] === 'object'
        ){
          this.inputNode = this.inputNode.slice(0, this.inputNode.length - 2);
        }else{
          this.inputNode.pop();
        };
        this.kanaNode = [];
      };
    };
    if(e.keyCode === 13){
      this.kanaNode = [];
    };
  }

  getKanaValue() {
    this.getKanaFromInputNode();
    return this.kanaNode.join('');
  }

  getKanaFromInputNode() {
    if(isMobile(navigator)){
      const str = String.fromCharCode(...this.inputNode);
      this.kanaNode = [...changeHiraganaToKatakana(str)];
    }else{
      let prevNode = null;
      for(let i=0; i<this.inputNode.length; i++) {
        const node = this.inputNode[i];
        const val = prevNode ? prevNode[node] : tree[node];
        if(typeof val === 'string'){
          this.kanaNode.push(val);
          prevNode = null;
        }else if(typeof val === 'object'){
          prevNode = val;
        };
      };
    };
  }
}