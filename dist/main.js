!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.AutoKana=o():e.AutoKana=o()}(self,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{bind:()=>r});var t={a:"ア",i:"イ",u:"ウ",e:"エ",o:"オ",k:{a:"カ",i:"キ",u:"ク",e:"ケ",o:"コ",y:{a:"キャ",i:"キィ",u:"キュ",e:"キェ",o:"キョ"}},s:{a:"サ",i:"シ",u:"ス",e:"セ",o:"ソ",h:{a:"シャ",i:"シ",u:"シュ",e:"シェ",o:"ショ"},y:{a:"シャ",i:"シィ",u:"シュ",e:"シェ",o:"ショ"}},t:{a:"タ",i:"チ",u:"ツ",e:"テ",o:"ト",h:{a:"テャ",i:"ティ",u:"テュ",e:"テェ",o:"テョ"},y:{a:"チャ",i:"チィ",u:"チュ",e:"チェ",o:"チョ"},s:{a:"ツァ",i:"ツィ",u:"ツ",e:"ツェ",o:"ツォ"}},c:{a:"カ",i:"シ",u:"ク",e:"セ",o:"コ",h:{a:"チャ",i:"チ",u:"チュ",e:"チェ",o:"チョ"},y:{a:"チャ",i:"チィ",u:"チュ",e:"チェ",o:"チョ"}},q:{a:"クァ",i:"クィ",u:"ク",e:"クェ",o:"クォ"},n:{a:"ナ",i:"ニ",u:"ヌ",e:"ネ",o:"ノ",n:"ン",y:{a:"ニャ",i:"ニィ",u:"ニュ",e:"ニェ",o:"ニョ"}},h:{a:"ハ",i:"ヒ",u:"フ",e:"ヘ",o:"ホ",y:{a:"ヒャ",i:"ヒィ",u:"ヒュ",e:"ヒェ",o:"ヒョ"}},f:{a:"ファ",i:"フィ",u:"フ",e:"フェ",o:"フォ",y:{a:"フャ",u:"フュ",o:"フョ"}},m:{a:"マ",i:"ミ",u:"ム",e:"メ",o:"モ",y:{a:"ミャ",i:"ミィ",u:"ミュ",e:"ミェ",o:"ミョ"}},y:{a:"ヤ",i:"イ",u:"ユ",e:"イェ",o:"ヨ"},r:{a:"ラ",i:"リ",u:"ル",e:"レ",o:"ロ",y:{a:"リャ",i:"リィ",u:"リュ",e:"リェ",o:"リョ"}},w:{a:"ワ",i:"ウィ",u:"ウ",e:"ウェ",o:"ヲ"},g:{a:"ガ",i:"ギ",u:"グ",e:"ゲ",o:"ゴ",y:{a:"ギャ",i:"ギィ",u:"ギュ",e:"ギェ",o:"ギョ"}},z:{a:"ザ",i:"ジ",u:"ズ",e:"ゼ",o:"ゾ",y:{a:"ジャ",i:"ジィ",u:"ジュ",e:"ジェ",o:"ジョ"}},j:{a:"ジャ",i:"ジ",u:"ジュ",e:"ジェ",o:"ジョ",y:{a:"ジャ",i:"ジィ",u:"ジュ",e:"ジェ",o:"ジョ"}},d:{a:"ダ",i:"ヂ",u:"ヅ",e:"デ",o:"ド",h:{a:"デャ",i:"ディ",u:"デュ",e:"デェ",o:"デョ"},y:{a:"ヂャ",i:"ヂィ",u:"ヂュ",e:"ヂェ",o:"ヂョ"}},b:{a:"バ",i:"ビ",u:"ブ",e:"ベ",o:"ボ",y:{a:"ビャ",i:"ビィ",u:"ビュ",e:"ビェ",o:"ビョ"}},v:{a:"ヴァ",i:"ヴィ",u:"ヴ",e:"ヴェ",o:"ヴォ",y:{a:"ヴャ",i:"ヴィ",u:"ヴュ",e:"ヴェ",o:"ヴョ"}},p:{a:"パ",i:"ピ",u:"プ",e:"ペ",o:"ポ",y:{a:"ピャ",i:"ピィ",u:"ピュ",e:"ピェ",o:"ピョ"}},x:{a:"ァ",i:"ィ",u:"ゥ",e:"ェ",o:"ォ",y:{a:"ャ",i:"ィ",u:"ュ",e:"ェ",o:"ョ"},t:{u:"ッ",s:{u:"ッ"}}},l:{a:"ァ",i:"ィ",u:"ゥ",e:"ェ",o:"ォ",y:{a:"ャ",i:"ィ",u:"ュ",e:"ェ",o:"ョ"},t:{u:"ッ",s:{u:"ッ"}}}};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e){return!!e.userAgent.match(/iPhone|Android.+Mobile/)}var a=function(){function e(o){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=null,this.inputNode=[],this.kanaNode=[],this.initialize(o)}var o,a;return o=e,(a=[{key:"initialize",value:function(e){this.el=document.querySelector(e),this.setEvent()}},{key:"setEvent",value:function(){u(navigator)?this.el.addEventListener("input",this.setInputEvent.bind(this)):this.el.addEventListener("keydown",this.setKeyDownEvent.bind(this))}},{key:"setInputEvent",value:function(e){console.log(e),e.data&&e.data.match(/^[ぁ-んー　]*$/)&&this.inputNode.push(e.data.slice(-1))}},{key:"setKeyDownEvent",value:function(e){229===e.keyCode&&e.code.match(/^Key/)&&this.inputNode.push(e.key),8===e.keyCode&&e.target.value.length<=1&&(this.inputNode=[],this.kanaNode=[])}},{key:"getKanaValue",value:function(){return""===this.el.value&&(this.inputNode=[],this.kanaNode=[]),u(navigator)?this.inputNode.join(""):(this.getKanaFromInputNode(),this.kanaNode.join(""))}},{key:"getKanaFromInputNode",value:function(){for(var e=null,o=0;o<this.inputNode.length;o++){var n=this.inputNode[o],u=e?e[n]:t[n];"string"==typeof u?(this.kanaNode.push(u),e=null):"object"===i(u)&&(e=u)}}}])&&n(o.prototype,a),Object.defineProperty(o,"prototype",{writable:!1}),e}();function r(e){return new a(e)}return o})()));