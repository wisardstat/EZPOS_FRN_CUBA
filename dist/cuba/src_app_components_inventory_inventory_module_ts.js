"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_inventory_inventory_module_ts"],{

/***/ 73657:
/*!******************************************************************!*\
  !*** ./src/app/components/inventory/inventory-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryRoutingModule: () => (/* binding */ InventoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _rp_bymodel_rp_bymodel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rp-bymodel/rp-bymodel.component */ 59861);
/* harmony import */ var _rp_bybrand_rp_bybrand_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-bybrand/rp-bybrand.component */ 17357);
/* harmony import */ var _rp_byitem_rp_byitem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rp-byitem/rp-byitem.component */ 49756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;






// rp-bybrand.component
const routes = [{
  path: '',
  children: [{
    path: 'rpbymodel',
    component: _rp_bymodel_rp_bymodel_component__WEBPACK_IMPORTED_MODULE_0__.RpBymodelComponent
  }, {
    path: 'rpbybrand',
    component: _rp_bybrand_rp_bybrand_component__WEBPACK_IMPORTED_MODULE_1__.RpBybrandComponent
  }, {
    path: 'rpbyitem',
    component: _rp_byitem_rp_byitem_component__WEBPACK_IMPORTED_MODULE_2__.RpByitemComponent
  }]
}];
class InventoryRoutingModule {}
_class = InventoryRoutingModule;
_class.ɵfac = function InventoryRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InventoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 54231:
/*!**********************************************************!*\
  !*** ./src/app/components/inventory/inventory.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryModule: () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-routing.module */ 73657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;








// import { DashboardModule } from '../../components/dashboard/dashboard.module';
class InventoryModule {}
_class = InventoryModule;
_class.ɵfac = function InventoryModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_1__.InventoryRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InventoryModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_1__.InventoryRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_inventory_inventory_module_ts.js.map