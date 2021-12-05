(self["webpackChunkApp"] = self["webpackChunkApp"] || []).push([["src_app_pages_nfts_nfts_module_ts"],{

/***/ 448:
/*!***************************************************!*\
  !*** ./src/app/pages/nfts/nfts-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NftsPageRoutingModule": () => (/* binding */ NftsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _nfts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nfts.page */ 8783);




const routes = [
    {
        path: '',
        component: _nfts_page__WEBPACK_IMPORTED_MODULE_0__.NftsPage
    }
];
let NftsPageRoutingModule = class NftsPageRoutingModule {
};
NftsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NftsPageRoutingModule);



/***/ }),

/***/ 57:
/*!*******************************************!*\
  !*** ./src/app/pages/nfts/nfts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NftsPageModule": () => (/* binding */ NftsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _nfts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nfts-routing.module */ 448);
/* harmony import */ var _nfts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfts.page */ 8783);







let NftsPageModule = class NftsPageModule {
};
NftsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nfts_routing_module__WEBPACK_IMPORTED_MODULE_0__.NftsPageRoutingModule
        ],
        declarations: [_nfts_page__WEBPACK_IMPORTED_MODULE_1__.NftsPage]
    })
], NftsPageModule);



/***/ }),

/***/ 8783:
/*!*****************************************!*\
  !*** ./src/app/pages/nfts/nfts.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NftsPage": () => (/* binding */ NftsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_nfts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nfts.page.html */ 9411);
/* harmony import */ var _nfts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfts.page.scss */ 5416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_utility_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utility-service.service */ 8766);





let NftsPage = class NftsPage {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.nfts = yield this.utilityService.getNFTs();
        });
    }
};
NftsPage.ctorParameters = () => [
    { type: _services_utility_service_service__WEBPACK_IMPORTED_MODULE_2__.UtilityServiceService }
];
NftsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-nfts',
        template: _raw_loader_nfts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nfts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NftsPage);



/***/ }),

/***/ 5416:
/*!*******************************************!*\
  !*** ./src/app/pages/nfts/nfts.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9411:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nfts/nfts.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>NFT's</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div style=\"background: #2a2a2a\" class=\"h-100 align-items-center scrollable\">\n  <div class=\"list-group my-3 mx-3\">\n    <a href=\"#\" *ngFor=\"let nft of nfts\"\n       style=\"background: #363636\"\n       class=\"list-group-item list-group-item-action\n            rounded my-1 text-light d-flex ion-justify-content-between\n            align-items-center\n        \">\n      <div class=\"d-flex align-items-center\">\n        <div class=\"bg-info rounded-circle ml-1 mr-4\" style=\"width: 1.5rem; height: 1.5rem\">&nbsp;</div>\n        <div>\n          <div class=\"\">{{nft.nftToken}}</div>\n          <div class=\"small text-secondary\">Commit sdfsdifbu</div>\n        </div>\n      </div>\n      <div>\n        <div class=\"\">17:00</div>\n        <div class=\"small text-secondary\">21/10/2021</div>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_nfts_nfts_module_ts.js.map