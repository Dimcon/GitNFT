(self["webpackChunkApp"] = self["webpackChunkApp"] || []).push([["src_app_pages_gits_gits_module_ts"],{

/***/ 3017:
/*!***************************************************!*\
  !*** ./src/app/pages/gits/gits-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitsPageRoutingModule": () => (/* binding */ GitsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _gits_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gits.page */ 6049);




const routes = [
    {
        path: '',
        component: _gits_page__WEBPACK_IMPORTED_MODULE_0__.GitsPage
    }
];
let GitsPageRoutingModule = class GitsPageRoutingModule {
};
GitsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GitsPageRoutingModule);



/***/ }),

/***/ 2470:
/*!*******************************************!*\
  !*** ./src/app/pages/gits/gits.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitsPageModule": () => (/* binding */ GitsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _gits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gits-routing.module */ 3017);
/* harmony import */ var _gits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gits.page */ 6049);







let GitsPageModule = class GitsPageModule {
};
GitsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gits_routing_module__WEBPACK_IMPORTED_MODULE_0__.GitsPageRoutingModule
        ],
        declarations: [_gits_page__WEBPACK_IMPORTED_MODULE_1__.GitsPage]
    })
], GitsPageModule);



/***/ }),

/***/ 6049:
/*!*****************************************!*\
  !*** ./src/app/pages/gits/gits.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitsPage": () => (/* binding */ GitsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_gits_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gits.page.html */ 1848);
/* harmony import */ var _gits_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gits.page.scss */ 3207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_utility_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utility-service.service */ 8766);





let GitsPage = class GitsPage {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.repos = yield this.utilityService.getRepos();
        });
    }
};
GitsPage.ctorParameters = () => [
    { type: _services_utility_service_service__WEBPACK_IMPORTED_MODULE_2__.UtilityServiceService }
];
GitsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-gits',
        template: _raw_loader_gits_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gits_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GitsPage);



/***/ }),

/***/ 3207:
/*!*******************************************!*\
  !*** ./src/app/pages/gits/gits.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1848:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gits/gits.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Repos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div style=\"background: #2a2a2a\" class=\"h-100 align-items-center scrollable\">\n  <div class=\"list-group my-3 mx-3\">\n    <a href=\"#\" *ngFor=\"let repo of repos\"\n       style=\"background: #363636\"\n       class=\"list-group-item list-group-item-action\n            rounded my-1 text-light d-flex ion-justify-content-between\n            align-items-center\n        \">\n      <div class=\"d-flex align-items-center\">\n        <div class=\"bg-info rounded-circle ml-1 mr-4\" style=\"width: 1.5rem; height: 1.5rem\">&nbsp;</div>\n        <div>\n          <div class=\"\">{{repo.name}}</div>\n          <div class=\"small text-secondary\">{{repo.userKey}}</div>\n        </div>\n      </div>\n      <div>\n        <div class=\"\">{{repo.createdAt | date:'shortTime' }}</div>\n        <div class=\"small text-secondary\">{{repo.createdAt | date:'fullDate' }}</div>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gits_gits_module_ts.js.map