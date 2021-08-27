/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./out/constants/index.js":
/*!********************************!*\
  !*** ./out/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STORAGE_KEY\": () => (/* binding */ STORAGE_KEY),\n/* harmony export */   \"ACTIVE_CLASSNAME\": () => (/* binding */ ACTIVE_CLASSNAME),\n/* harmony export */   \"BODY_LOCKED_CLASSNAME\": () => (/* binding */ BODY_LOCKED_CLASSNAME)\n/* harmony export */ });\nvar STORAGE_KEY = \"@myMoney:transactions\";\nvar ACTIVE_CLASSNAME = \"active\";\nvar BODY_LOCKED_CLASSNAME = \"body-locked\";\n\n//# sourceURL=webpack://my-money/./out/constants/index.js?");

/***/ }),

/***/ "./out/modules/app.js":
/*!****************************!*\
  !*** ./out/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_transactions_new_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/transactions/new.js */ \"./out/modules/transactions/new.js\");\n/* harmony import */ var _modules_transactions_summary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/transactions/summary.js */ \"./out/modules/transactions/summary.js\");\n\n\nnew _modules_transactions_new_js__WEBPACK_IMPORTED_MODULE_0__.NewTransaction();\nnew _modules_transactions_summary_js__WEBPACK_IMPORTED_MODULE_1__.TransactionSummary().showValues(_modules_transactions_new_js__WEBPACK_IMPORTED_MODULE_0__.transaction.transactions);\n\n//# sourceURL=webpack://my-money/./out/modules/app.js?");

/***/ }),

/***/ "./out/modules/modal.js":
/*!******************************!*\
  !*** ./out/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./out/constants/index.js\");\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outsideClick.js */ \"./out/modules/outsideClick.js\");\n\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Modal);\n\n    this._wrapper = document.querySelector(\".modal-overlay\");\n    this._openButton = document.querySelector(\".new\");\n    this._form = document.querySelector(\"#form\");\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Modal, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(_) {}\n  }, {\n    key: \"handleOutsideClick\",\n    value: function handleOutsideClick(event) {\n      (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_3__.outsideClick)(event, this._wrapper, this.close);\n    }\n  }, {\n    key: \"open\",\n    value: function open(event) {\n      event.preventDefault();\n\n      this._wrapper.classList.add(_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_CLASSNAME);\n\n      document.body.classList.add(_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.BODY_LOCKED_CLASSNAME);\n      window.addEventListener(\"keyup\", this.handleKeyUp);\n      window.addEventListener(\"click\", this.handleOutsideClick);\n    }\n  }, {\n    key: \"handleKeyUp\",\n    value: function handleKeyUp(event) {\n      if (event.key === \"Escape\") {\n        this.close();\n      }\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this._wrapper.classList.remove(_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_CLASSNAME);\n\n      document.body.classList.remove(_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.BODY_LOCKED_CLASSNAME);\n      window.addEventListener(\"click\", this.handleOutsideClick);\n      window.removeEventListener(\"keyup\", this.handleKeyUp);\n      window.removeEventListener(\"click\", this.handleOutsideClick);\n    }\n  }, {\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this._openButton.addEventListener(\"click\", function (event) {\n        return _this.open(event);\n      });\n\n      this._form.addEventListener(\"submit\", function (event) {\n        return _this.handleSubmit(event);\n      });\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.close = this.close.bind(this);\n      this.handleKeyUp = this.handleKeyUp.bind(this);\n      this.handleOutsideClick = this.handleOutsideClick.bind(this);\n    }\n  }]);\n\n  return Modal;\n}();\n\n//# sourceURL=webpack://my-money/./out/modules/modal.js?");

/***/ }),

/***/ "./out/modules/outsideClick.js":
/*!*************************************!*\
  !*** ./out/modules/outsideClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"outsideClick\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ \"./out/constants/index.js\");\n\nfunction outsideClick(event, element, callback) {\n  if (event.target === element) {\n    element.classList.remove(_constants_index_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n    callback();\n  }\n}\n\n//# sourceURL=webpack://my-money/./out/modules/outsideClick.js?");

/***/ }),

/***/ "./out/modules/transactions/index.js":
/*!*******************************************!*\
  !*** ./out/modules/transactions/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Transactions\": () => (/* binding */ Transactions)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _utils_localStorage_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/localStorage/index.js */ \"./out/utils/localStorage/index.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal.js */ \"./out/modules/modal.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model.js */ \"./out/modules/transactions/model.js\");\n/* harmony import */ var _summary_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary.js */ \"./out/modules/transactions/summary.js\");\n\n\n\n\n\n\nvar modal = new _modal_js__WEBPACK_IMPORTED_MODULE_3__.Modal();\nvar summary = new _summary_js__WEBPACK_IMPORTED_MODULE_5__.TransactionSummary();\nvar Transactions = /*#__PURE__*/function () {\n  function Transactions() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Transactions);\n\n    this.transactions = [];\n    this._transactionsWrapper = document.querySelector(\"#data-table tbody\");\n    this.list();\n    this.renderDom();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Transactions, [{\n    key: \"create\",\n    value: function create(data) {\n      this.transactions.push(data);\n      this.addToDom(data);\n      (0,_utils_localStorage_index_js__WEBPACK_IMPORTED_MODULE_2__.saveItemInStorage)(this.transactions);\n      modal.close();\n      summary.showValues(this.transactions);\n    }\n  }, {\n    key: \"addToDom\",\n    value: function addToDom(transaction) {\n      this._transactionsWrapper.insertAdjacentHTML(\"afterbegin\", (0,_model_js__WEBPACK_IMPORTED_MODULE_4__.createTransactionModel)(transaction));\n    }\n  }, {\n    key: \"renderDom\",\n    value: function renderDom() {\n      var _this = this;\n\n      this.transactions.forEach(function (transaction) {\n        return _this.addToDom(transaction);\n      });\n      return this.transactions;\n    }\n  }, {\n    key: \"list\",\n    value: function list() {\n      var itensFromStorage = (0,_utils_localStorage_index_js__WEBPACK_IMPORTED_MODULE_2__.getItemFromStorage)() || [];\n      this.transactions = itensFromStorage;\n      return this.transactions;\n    }\n  }]);\n\n  return Transactions;\n}();\n\n//# sourceURL=webpack://my-money/./out/modules/transactions/index.js?");

/***/ }),

/***/ "./out/modules/transactions/model.js":
/*!*******************************************!*\
  !*** ./out/modules/transactions/model.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTransactionModel\": () => (/* binding */ createTransactionModel)\n/* harmony export */ });\n/* harmony import */ var _utils_formatters_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/formatters/date.js */ \"./out/utils/formatters/date.js\");\n/* harmony import */ var _utils_formatters_price_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/formatters/price.js */ \"./out/utils/formatters/price.js\");\n\n\nfunction createTransactionModel(transaction) {\n  return \"\\n    <tr>\\n      <td>\".concat(transaction.title, \"</td>\\n      <td>\").concat(transaction.description, \"</td>\\n      <td style=\").concat(transaction.type === \"income\" ? \"color:green\" : \"color:red\", \">\").concat((0,_utils_formatters_price_js__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(transaction.amount), \"</td>\\n      <td>\").concat((0,_utils_formatters_date_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(transaction.created_at), \"</td>\\n    </tr>\\n  \");\n}\n\n//# sourceURL=webpack://my-money/./out/modules/transactions/model.js?");

/***/ }),

/***/ "./out/modules/transactions/new.js":
/*!*****************************************!*\
  !*** ./out/modules/transactions/new.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transaction\": () => (/* binding */ transaction),\n/* harmony export */   \"NewTransaction\": () => (/* binding */ NewTransaction)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/index.js */ \"./out/constants/index.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal.js */ \"./out/modules/modal.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.js */ \"./out/modules/transactions/index.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar transaction = new _index_js__WEBPACK_IMPORTED_MODULE_7__.Transactions();\nvar NewTransaction = /*#__PURE__*/function (_Modal) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(NewTransaction, _Modal);\n\n  var _super = _createSuper(NewTransaction);\n\n  function NewTransaction() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, NewTransaction);\n\n    _this = _super.call(this);\n    _this._type = \"income\";\n    _this._titleField = document.querySelector(\"#title\");\n    _this._descriptionField = document.querySelector(\"#description\");\n    _this._amountField = document.querySelector(\"#amount\");\n    _this._typeFields = document.querySelectorAll(\".input-group [data-option]\");\n\n    _this.typeEvent();\n\n    _this.bindEvents();\n\n    _this.events();\n\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(NewTransaction, [{\n    key: \"clearFields\",\n    value: function clearFields() {\n      this._titleField.value = \"\";\n      this._descriptionField.value = \"\";\n      this._amountField.value = \"\";\n    }\n  }, {\n    key: \"handleChangeType\",\n    value: function handleChangeType(event, index) {\n      event.preventDefault();\n      var selectedOption = event.currentTarget;\n\n      this._typeFields.forEach(function (field) {\n        return field.classList.remove(_constants_index_js__WEBPACK_IMPORTED_MODULE_5__.ACTIVE_CLASSNAME);\n      });\n\n      this._typeFields[index].classList.add(_constants_index_js__WEBPACK_IMPORTED_MODULE_5__.ACTIVE_CLASSNAME);\n\n      this._type = selectedOption.dataset.option;\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      transaction.create({\n        title: this._titleField.value,\n        description: this._descriptionField.value,\n        amount: Number(this._amountField.value),\n        created_at: new Date().getTime(),\n        type: this._type\n      });\n      this.close();\n      this.clearFields();\n    }\n  }, {\n    key: \"typeEvent\",\n    value: function typeEvent() {\n      var _this2 = this;\n\n      this._typeFields.forEach(function (field, index) {\n        return field.addEventListener(\"click\", function (event) {\n          return _this2.handleChangeType(event, index);\n        });\n      });\n    }\n  }]);\n\n  return NewTransaction;\n}(_modal_js__WEBPACK_IMPORTED_MODULE_6__.Modal);\n\n//# sourceURL=webpack://my-money/./out/modules/transactions/new.js?");

/***/ }),

/***/ "./out/modules/transactions/summary.js":
/*!*********************************************!*\
  !*** ./out/modules/transactions/summary.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionSummary\": () => (/* binding */ TransactionSummary)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _utils_formatters_price_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatters/price.js */ \"./out/utils/formatters/price.js\");\n\n\n\nvar TransactionSummary = /*#__PURE__*/function () {\n  function TransactionSummary() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TransactionSummary);\n\n    this._expenseCard = document.querySelector(\"#expenseDisplay\");\n    this._incomeCard = document.querySelector(\"#incomeDisplay\");\n    this._totalCard = document.querySelector(\"#totalDisplay\");\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(TransactionSummary, [{\n    key: \"showValues\",\n    value: function showValues(transactions) {\n      var _this$listAll = this.listAll(transactions),\n          income = _this$listAll.income,\n          expenses = _this$listAll.expenses;\n\n      var total = income - expenses;\n      this._expenseCard.innerText = (0,_utils_formatters_price_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(expenses);\n      this._incomeCard.innerText = (0,_utils_formatters_price_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(income);\n      this._totalCard.innerText = (0,_utils_formatters_price_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(total);\n    }\n  }, {\n    key: \"listAll\",\n    value: function listAll(transactions) {\n      var _a, _b;\n\n      var allTransactions = {\n        income: (_a = transactions === null || transactions === void 0 ? void 0 : transactions.filter(function (transaction) {\n          return transaction.type === \"income\";\n        })) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, total) {\n          return acc + Number(total.amount);\n        }, 0),\n        expenses: (_b = transactions === null || transactions === void 0 ? void 0 : transactions.filter(function (transaction) {\n          return transaction.type === \"expense\";\n        })) === null || _b === void 0 ? void 0 : _b.reduce(function (acc, total) {\n          return acc + Number(total.amount);\n        }, 0)\n      };\n      return allTransactions;\n    }\n  }]);\n\n  return TransactionSummary;\n}();\n\n//# sourceURL=webpack://my-money/./out/modules/transactions/summary.js?");

/***/ }),

/***/ "./out/utils/formatters/date.js":
/*!**************************************!*\
  !*** ./out/utils/formatters/date.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatDate\": () => (/* binding */ formatDate)\n/* harmony export */ });\nfunction formatDate(date) {\n  return new Intl.DateTimeFormat(\"pt-BR\").format(date);\n}\n\n//# sourceURL=webpack://my-money/./out/utils/formatters/date.js?");

/***/ }),

/***/ "./out/utils/formatters/price.js":
/*!***************************************!*\
  !*** ./out/utils/formatters/price.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatPrice\": () => (/* binding */ formatPrice)\n/* harmony export */ });\nfunction formatPrice(value) {\n  return new Intl.NumberFormat(\"pt-BR\", {\n    style: \"currency\",\n    currency: \"BRL\"\n  }).format(value);\n}\n\n//# sourceURL=webpack://my-money/./out/utils/formatters/price.js?");

/***/ }),

/***/ "./out/utils/localStorage/index.js":
/*!*****************************************!*\
  !*** ./out/utils/localStorage/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveItemInStorage\": () => (/* binding */ saveItemInStorage),\n/* harmony export */   \"getItemFromStorage\": () => (/* binding */ getItemFromStorage)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index.js */ \"./out/constants/index.js\");\n\nfunction saveItemInStorage(value) {\n  localStorage.setItem(_constants_index_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(value));\n}\nfunction getItemFromStorage() {\n  return JSON.parse(localStorage.getItem(_constants_index_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY));\n}\n\n//# sourceURL=webpack://my-money/./out/utils/localStorage/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\n//# sourceURL=webpack://my-money/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./out/modules/app.js");
/******/ 	
/******/ })()
;