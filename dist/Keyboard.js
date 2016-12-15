var Keyboard=function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={exports:{},id:a,loaded:!1};return e[a].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var a=n(3),l=n(2);e.exports=a["default"]||a,e.exports.KeyboardButton=l["default"]||l},function(e,t){e.exports=React},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),c=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return o(t,e),i(t,[{key:"handleClick",value:function(){this.props.onClick(this.props.value)}},{key:"handleTab",value:function(){this.props.onClick("tab")}},{key:"render",value:function(){var e=this;return"tab"==this.props.value?s["default"].createElement("button",{className:"keyboard-button "+this.props.classes,onClick:function(){return e.handleTab()}},"Tab"):s["default"].createElement("button",{className:"keyboard-button "+this.props.classes,onClick:this.handleClick},this.props.value)}}]),t}(u.PureComponent);c.propTypes={value:u.PropTypes.oneOfType([u.PropTypes.string.isRequired,u.PropTypes.node.isRequired]),classes:u.PropTypes.string,onClick:u.PropTypes.func.isRequired},t["default"]=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),c=n(2),d=a(c),f=n(8),p=a(f),h=n(7),v=a(h),y=n(9),k=a(y),b=n(4),m=(a(b),n(5)),C=(a(m),n(6)),g=(a(C),function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLetterButtonClick=n.handleLetterButtonClick.bind(n),n.handleBackspaceClick=n.handleBackspaceClick.bind(n),n.handleLanguageClick=n.handleLanguageClick.bind(n),n.handleShiftClick=n.handleShiftClick.bind(n),n.handleSymbolsClick=n.handleSymbolsClick.bind(n),n.state={currentLanguage:e.defaultLanguage,showSymbols:!1,uppercase:n.isUppercase()},n}return o(t,e),i(t,[{key:"handleLanguageClick",value:function(){this.setState({currentLanguage:"latin"===this.state.currentLanguage?"cyrrilic":"latin"})}},{key:"handleShiftClick",value:function(){console.log("shift!"),this.setState({uppercase:!this.state.uppercase})}},{key:"handleSymbolsClick",value:function(){this.setState({showSymbols:!this.state.showSymbols})}},{key:"handleLetterButtonClick",value:function(e){console.log("Keyy: ",e);var t=this.props.inputNode,n=t.value,a=t.selectionStart,l=t.selectionEnd,r=n.substring(0,a)+e+n.substring(l);console.log("inputNode ",t),this.props.setProp(t.name,r),t.value=r,this.props.onClick&&this.props.onClick(r),setTimeout(function(){t.focus(),t.setSelectionRange(a+1,a+1)},0),this.setState({uppercase:this.isUppercase()}),t.dispatchEvent(new Event("input"))}},{key:"isUppercase",value:function(){var e=this.props;e.inputNode,e.isFirstLetterUppercase;return!1}},{key:"handleBackspaceClick",value:function(){var e=this.props.inputNode,t=e.value,n=e.selectionStart,a=e.selectionEnd,l=void 0,r=void 0;n===a?(l=t.substring(0,n-1)+t.substring(a),r=n-1):(l=t.substring(0,n)+t.substring(a),r=n),r=r>0?r:0,e.value=l,this.props.onClick&&this.props.onClick(l),setTimeout(function(){e.focus(),e.setSelectionRange(r,r)},0),this.setState({uppercase:this.isUppercase()}),e.dispatchEvent(new Event("change"))}},{key:"getKeys",value:function(){var e=void 0;return e=this.state.showSymbols?k["default"]:"latin"===this.state.currentLanguage?p["default"]:v["default"]}},{key:"getSymbolsKeyValue",value:function(){var e=void 0;return e=this.state.showSymbols?"latin"===this.state.currentLanguage?"Abc":"Абв":".?!&"}},{key:"render",value:function(){var e=this,t=this.props,n=(t.leftButtons,t.rightButtons,t.inputNode,this.getKeys()),a=[1,2,3,4,5,6,7,8,9,0];this.getSymbolsKeyValue();return s["default"].createElement("div",{className:"keyboard"},s["default"].createElement("div",{className:"keyboard-row"},a.map(function(t){return s["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,classes:"keyboard-numberButton",key:t})}),s["default"].createElement(d["default"],{value:"Del",classes:"keyboard-backspace keyboard-last-in-row",onClick:this.handleBackspaceClick})),s["default"].createElement("div",{className:"keyboard-row"},n[0].map(function(t){return s["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,key:t})}),s["default"].createElement(d["default"],{value:"tab",classes:"keyboard-last-in-row",onClick:this.handleLetterButtonClick})),s["default"].createElement("div",{className:"keyboard-row"},s["default"].createElement("div",{className:"keyboard-halfButton"}),n[1].map(function(t){return s["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,key:t})}),s["default"].createElement(d["default"],{value:"@",onClick:this.handleLetterButtonClick}),s["default"].createElement(d["default"],{value:"é",classes:"keyboard-last-in-row",onClick:this.handleLetterButtonClick}),s["default"].createElement("div",{className:"keyboard-halfButton"})),s["default"].createElement("div",{className:"keyboard-row"},n[2].map(function(t){return s["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,key:t})}),s["default"].createElement(d["default"],{value:"-",onClick:this.handleLetterButtonClick}),s["default"].createElement(d["default"],{value:"_",onClick:this.handleLetterButtonClick}),s["default"].createElement(d["default"],{value:".",onClick:this.handleLetterButtonClick}),s["default"].createElement(d["default"],{value:"'",classes:"keyboard-last-in-row",onClick:this.handleLetterButtonClick})),s["default"].createElement("div",{className:"keyboard-row"},s["default"].createElement(d["default"],{value:"Shift",classes:"keyboard-shift",onClick:this.handleShiftClick}),s["default"].createElement(d["default"],{value:"Space",classes:"keyboard-space",onClick:this.handleLetterButtonClick})))}}]),t}(u.PureComponent));g.propTypes={leftButtons:u.PropTypes.arrayOf(u.PropTypes.node),rightButtons:u.PropTypes.arrayOf(u.PropTypes.node),inputNode:u.PropTypes.any.isRequired,onClick:u.PropTypes.func,isFirstLetterUppercase:u.PropTypes.bool,defaultLanguage:u.PropTypes.string},g.defaultProps={leftButtons:[],rightButtons:[],isFirstLetterUppercase:!1,defaultLanguage:"cyrrilic"},t["default"]=g},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=a(l),o=function(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,a=e.width,l=void 0===a?24:a,o=e.height,i=void 0===o?24:o,u=e.fill;return r["default"].createElement("svg",{width:l,height:i,fill:u,viewBox:n},r["default"].createElement("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"}))};t["default"]=o},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=a(l),o=function(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,a=e.width,l=void 0===a?24:a,o=e.height,i=void 0===o?24:o,u=e.fill;return r["default"].createElement("svg",{width:l,height:i,fill:u,viewBox:n},r["default"].createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}))};t["default"]=o},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=a(l),o=function(e){var t=e.viewBox,n=void 0===t?"0 0 32 32":t,a=e.width,l=void 0===a?24:a,o=e.height,i=void 0===o?24:o,u=e.fill;return r["default"].createElement("svg",{width:l,height:i,fill:u,viewBox:n},r["default"].createElement("path",{d:"M21 28h-10c-0.552 0-1-0.448-1-1v-11h-4c-0.404 0-0.769-0.244-0.924-0.617s-0.069-0.804 0.217-1.090l10-10c0.391-0.39 1.024-0.39 1.414 0l10 10c0.286 0.286 0.372 0.716 0.217 1.090s-0.519 0.617-0.924 0.617h-4v11c0 0.552-0.448 1-1 1zM12 26h8v-11c0-0.552 0.448-1 1-1h2.586l-7.586-7.586-7.586 7.586h2.586c0.552 0 1 0.448 1 1v11z"}))};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[["й","ц","у","к","е","н","г","ш","щ","з","х","ъ"],["ф","ы","в","а","п","р","о","л","д","ж","э"],["я","ч","с","м","и","т","ь","б","ю"]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[["=","+","%","*","[","]","{","}","<",">"],["@",":",";","_","-","#","(",")","/","\\"],[".",",","?","!","'",'"',"^"]]}]);
//# sourceMappingURL=Keyboard.js.map