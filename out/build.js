(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c="@myMoney:transactions",a="active",s=function(){function e(){t(this,e),this._wrapper=document.querySelector(".modal-overlay"),this._openButton=document.querySelector(".new"),this._form=document.querySelector("#form"),this.bindEvents(),this.events()}return n(e,[{key:"handleSubmit",value:function(t){}},{key:"handleOutsideClick",value:function(t){!function(t,e,n){t.target===e&&(e.classList.remove(a),n())}(t,this._wrapper,this.close)}},{key:"open",value:function(t){t.preventDefault(),this._wrapper.classList.add(a)}},{key:"handleKeyUp",value:function(t){"Escape"===t.key&&this.close()}},{key:"close",value:function(){this._wrapper.classList.remove(a)}},{key:"events",value:function(){var t=this;this._openButton.addEventListener("click",(function(e){return t.open(e)})),this._form.addEventListener("submit",(function(e){return t.handleSubmit(e)})),document.documentElement.addEventListener("click",(function(e){return t.handleOutsideClick(e)})),window.addEventListener("keyup",this.handleKeyUp)}},{key:"bindEvents",value:function(){this.close=this.close.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}}]),e}();function l(t){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t)}var d=function(){function e(){t(this,e),this._expenseCard=document.querySelector("#expenseDisplay"),this._incomeCard=document.querySelector("#incomeDisplay"),this._totalCard=document.querySelector("#totalDisplay")}return n(e,[{key:"showValues",value:function(t){var e=this.listAll(t),n=e.income,r=e.expenses,o=n-r;this._expenseCard.innerText=l(r),this._incomeCard.innerText=l(n),this._totalCard.innerText=l(o)}},{key:"listAll",value:function(t){var e,n;return{income:null===(e=null==t?void 0:t.filter((function(t){return"income"===t.type})))||void 0===e?void 0:e.reduce((function(t,e){return t+Number(e.amount)}),0),expenses:null===(n=null==t?void 0:t.filter((function(t){return"expense"===t.type})))||void 0===n?void 0:n.reduce((function(t,e){return t+Number(e.amount)}),0)}}}]),e}(),f=new s,p=new d;var y=new(function(){function e(){t(this,e),this.transactions=[],this._transactionsWrapper=document.querySelector("#data-table tbody"),this.list(),this.renderDom()}return n(e,[{key:"create",value:function(t){var e;this.transactions.push(t),this.addToDom(t),e=this.transactions,localStorage.setItem(c,JSON.stringify(e)),f.close(),p.showValues(this.transactions)}},{key:"addToDom",value:function(t){this._transactionsWrapper.insertAdjacentHTML("afterbegin",function(t){return"\n    <tr data-id=".concat(t.id,">\n      <td>").concat(t.title,"</td>\n      <td>").concat(t.description,"</td>\n      <td style=").concat("income"===t.type?"color:green":"color:red",">").concat(l(t.amount),"</td>\n      <td>").concat((e=t.created_at,new Intl.DateTimeFormat("pt-BR").format(e)),"</td>\n    </tr>\n  ");var e}(t))}},{key:"renderDom",value:function(){var t=this;return this.transactions.forEach((function(e){return t.addToDom(e)})),this.transactions}},{key:"list",value:function(){var t=JSON.parse(localStorage.getItem(c))||[];return this.transactions=t,this.transactions}}]),e}());new(function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(l,e);var o,c,s=(o=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(o);if(c){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function l(){var e;return t(this,l),(e=s.call(this))._type="income",e._titleField=document.querySelector("#title"),e._descriptionField=document.querySelector("#description"),e._amountField=document.querySelector("#amount"),e._typeFields=document.querySelectorAll(".input-group [data-option]"),e.typeEvent(),e}return n(l,[{key:"clearFields",value:function(){this._titleField.value="",this._descriptionField.value="",this._amountField.value=""}},{key:"handleChangeType",value:function(t,e){t.preventDefault();var n=t.currentTarget;this._typeFields.forEach((function(t){return t.classList.remove(a)})),this._typeFields[e].classList.add(a),this._type=n.dataset.option}},{key:"handleSubmit",value:function(t){t.preventDefault(),y.create({title:this._titleField.value,id:(new Date).getTime(),description:this._descriptionField.value,amount:Number(this._amountField.value),created_at:(new Date).getTime(),type:this._type}),this.clearFields()}},{key:"typeEvent",value:function(){var t=this;this._typeFields.forEach((function(e,n){return e.addEventListener("click",(function(e){return t.handleChangeType(e,n)}))}))}}]),l}(s)),(new d).showValues(y.transactions)})();