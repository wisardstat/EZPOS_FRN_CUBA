"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_pages_maintenance_maintenance_module_ts"],{

/***/ 35599:
/*!*****************************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceRoutingModule: () => (/* binding */ MaintenanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _maintenance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance.component */ 54715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _maintenance_component__WEBPACK_IMPORTED_MODULE_0__.MaintenanceComponent
  }]
}];
class MaintenanceRoutingModule {}
_class = MaintenanceRoutingModule;
_class.ɵfac = function MaintenanceRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaintenanceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 54715:
/*!************************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceComponent: () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
var _class;


class MaintenanceComponent {
  constructor() {}
  ngOnInit() {}
}
_class = MaintenanceComponent;
_class.ɵfac = function MaintenanceComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-maintenance"]],
  decls: 19,
  vars: 0,
  consts: [[1, "error-wrapper", "maintenance-bg"], [1, "container"], [1, "maintenance-icons"], [1, "fa", "fa-cog"], [1, "maintenance-heading"], [1, "headline"], [1, "sub-content"], ["routerLink", "", 1, "btn", "btn-primary-gradien", "btn-lg", "text-light"]],
  template: function MaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MAINTENANCE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Our Site is Currently under maintenance We will be back Shortly");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Thank You For Patience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "BACK TO HOME PAGE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16799:
/*!*********************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceModule: () => (/* binding */ MaintenanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance-routing.module */ 35599);
/* harmony import */ var _maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.component */ 54715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;




class MaintenanceModule {}
_class = MaintenanceModule;
_class.ɵfac = function MaintenanceModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenanceRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MaintenanceModule, {
    declarations: [_maintenance_component__WEBPACK_IMPORTED_MODULE_1__.MaintenanceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenanceRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_maintenance_maintenance_module_ts.js.map