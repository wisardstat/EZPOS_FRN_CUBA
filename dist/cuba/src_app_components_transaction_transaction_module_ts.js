"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_transaction_transaction_module_ts"],{

/***/ 92164:
/*!**********************************************************************!*\
  !*** ./src/app/components/transaction/transaction-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionRoutingModule: () => (/* binding */ TransactionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _stock_receive_str_create_str_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-receive/str-create/str-create.component */ 56476);
/* harmony import */ var _stock_receive_str_list_str_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-receive/str-list/str-list.component */ 3554);
/* harmony import */ var _stock_move_stm_create_stm_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-move/stm-create/stm-create.component */ 26160);
/* harmony import */ var _stock_move_stm_list_stm_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-move/stm-list/stm-list.component */ 27388);
/* harmony import */ var _rp_bydoc_rp_bydoc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rp-bydoc/rp-bydoc.component */ 61283);
/* harmony import */ var _rp_bytxnitem_rp_bytxnitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rp-bytxnitem/rp-bytxnitem.component */ 70108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;









const routes = [{
  path: '',
  children: [{
    path: 'str_list',
    component: _stock_receive_str_list_str_list_component__WEBPACK_IMPORTED_MODULE_1__.StrListComponent
  }, {
    path: 'str_create',
    component: _stock_receive_str_create_str_create_component__WEBPACK_IMPORTED_MODULE_0__.StrCreateComponent
  }, {
    path: 'stm_list',
    component: _stock_move_stm_list_stm_list_component__WEBPACK_IMPORTED_MODULE_3__.StmListComponent
  }, {
    path: 'stm_create',
    component: _stock_move_stm_create_stm_create_component__WEBPACK_IMPORTED_MODULE_2__.StmCreateComponent
  }, {
    path: 'transaction_bydoc',
    component: _rp_bydoc_rp_bydoc_component__WEBPACK_IMPORTED_MODULE_4__.RpBydocComponent
  }, {
    path: 'transaction_byitem',
    component: _rp_bytxnitem_rp_bytxnitem_component__WEBPACK_IMPORTED_MODULE_5__.RpBytxnitemComponent
  }]
}];
class TransactionRoutingModule {}
_class = TransactionRoutingModule;
_class.ɵfac = function TransactionRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TransactionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 63250:
/*!**************************************************************!*\
  !*** ./src/app/components/transaction/transaction.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionModule: () => (/* binding */ TransactionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-routing.module */ 92164);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;




class TransactionModule {}
_class = TransactionModule;
_class.ɵfac = function TransactionModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TransactionModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_transaction_transaction_module_ts.js.map