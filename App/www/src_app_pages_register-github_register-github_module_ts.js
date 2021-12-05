(self["webpackChunkApp"] = self["webpackChunkApp"] || []).push([["src_app_pages_register-github_register-github_module_ts"],{

/***/ 5495:
/*!*************************************************************************!*\
  !*** ./src/app/pages/register-github/register-github-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterGithubPageRoutingModule": () => (/* binding */ RegisterGithubPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_github_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-github.page */ 1056);




const routes = [
    {
        path: '',
        component: _register_github_page__WEBPACK_IMPORTED_MODULE_0__.RegisterGithubPage
    }
];
let RegisterGithubPageRoutingModule = class RegisterGithubPageRoutingModule {
};
RegisterGithubPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterGithubPageRoutingModule);



/***/ }),

/***/ 3065:
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-github/register-github.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterGithubPageModule": () => (/* binding */ RegisterGithubPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_github_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-github-routing.module */ 5495);
/* harmony import */ var _register_github_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-github.page */ 1056);







let RegisterGithubPageModule = class RegisterGithubPageModule {
};
RegisterGithubPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_github_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterGithubPageRoutingModule
        ],
        declarations: [_register_github_page__WEBPACK_IMPORTED_MODULE_1__.RegisterGithubPage]
    })
], RegisterGithubPageModule);



/***/ }),

/***/ 1056:
/*!***************************************************************!*\
  !*** ./src/app/pages/register-github/register-github.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterGithubPage": () => (/* binding */ RegisterGithubPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_github_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-github.page.html */ 3326);
/* harmony import */ var _register_github_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-github.page.scss */ 3831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_utility_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utility-service.service */ 8766);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 7556);






let RegisterGithubPage = class RegisterGithubPage {
    constructor(utilityService, authService) {
        this.utilityService = utilityService;
        this.authService = authService;
    }
    ngOnInit() {
        debugger;
        if (this.authService.isLoggedIn()) {
            this.githubInstallUrl = this.utilityService.githubInstallUrl();
        }
    }
};
RegisterGithubPage.ctorParameters = () => [
    { type: _services_utility_service_service__WEBPACK_IMPORTED_MODULE_2__.UtilityServiceService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
RegisterGithubPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register-github',
        template: _raw_loader_register_github_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_github_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterGithubPage);



/***/ }),

/***/ 3831:
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-github/register-github.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: #787878;\n  --color: #fff;\n}\n\nion-button {\n  --background: #f28705;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWdpdGh1Yi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXItZ2l0aHViLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzc4Nzg3ODtcbiAgICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2YyODcwNTtcbn0iXX0= */");

/***/ }),

/***/ 3326:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-github/register-github.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"bg-dark py-5 h-100 d-flex align-items-center justify-content-center flex-column\">\n  <div class=\"w-100 d-flex flex-column justify-content-between h-100\">\n    <div class=\"px-5 w-100\">\n    </div>\n    <div class=\"w-100 px-5\">\n      <hr>\n      <a target=\"_blank\" [href]=\"githubInstallUrl\" class=\"btn btn-secondary m-2 w-100\">Connect Github</a>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register-github_register-github_module_ts.js.map