(self["webpackChunkApp"] = self["webpackChunkApp"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 207)).then(m => m.RegisterPageModule)
    },
    {
        path: 'register-github',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register-github_register-github_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register-github/register-github.module */ 3065)).then(m => m.RegisterGithubPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 1659)).then(m => m.DashboardPageModule)
    },
    {
        path: 'nfts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_nfts_nfts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/nfts/nfts.module */ 57)).then(m => m.NftsPageModule)
    },
    {
        path: 'gits',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_gits_gits_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/gits/gits.module */ 2470)).then(m => m.GitsPageModule)
    },
    {
        path: 'register-github',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register-github_register-github_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register-github/register-github.module */ 3065)).then(m => m.RegisterGithubPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 1524);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_utility_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/utility-service.service */ 8766);









let AppComponent = class AppComponent {
    constructor(platform, statusbar, splashscreen, authService, utilService) {
        this.platform = platform;
        this.statusbar = statusbar;
        this.splashscreen = splashscreen;
        this.authService = authService;
        this.utilService = utilService;
        this.activeIndex = 1;
        this.activePageTitle = 'Dashboard';
        this.pages = [
            {
                title: 'Dashboard',
                url: '/dashboard',
                icon: 'apps'
            },
            {
                title: 'Repos',
                url: '/gits',
                icon: 'logo-github'
            },
            {
                title: 'NFT',
                url: '/nfts',
                icon: 'logo-web-component'
            },
            {
                title: 'My Github',
                url: '/register-github',
                icon: 'logo-github'
            },
            {
                title: 'Logout',
                url: '/login',
                icon: 'person'
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusbar.styleDefault();
            this.splashscreen.hide();
        });
    }
    click(index, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (page.title === 'Logout') {
                yield this.logout();
            }
            this.activeIndex = index;
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.logout();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _services_utility_service_service__WEBPACK_IMPORTED_MODULE_5__.UtilityServiceService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 1524);
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/http-service.service */ 8300);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientXsrfModule.withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-CSRF-TOKEN'
            }),
        ],
        providers: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen,
            _services_http_service_service__WEBPACK_IMPORTED_MODULE_4__.HttpServiceService,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-service.service */ 8300);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _utility_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility-service.service */ 8766);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);






const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
let AuthService = class AuthService {
    constructor(httpService, utilityService) {
        this.httpService = httpService;
        this.utilityService = utilityService;
    }
    login(userid, pass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.httpService.post(`${baseUrl}/auth/authenticate`, {
                username: userid,
                password: pass
            });
            if (result.success) {
                this.httpService.setAuthToken(result.token, result.user.id);
                this.utilityService.user = result.user;
                this.httpService.userId = this.utilityService.user.id;
                const expiresAt = moment__WEBPACK_IMPORTED_MODULE_3__().add(result.expiresIn, 'second');
                localStorage.setItem('jwt_token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));
                localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
            }
            else {
                throw 'Credentials are bad.';
            }
        });
    }
    getAuthToken() {
        return localStorage.getItem('jwt_token');
    }
    logout() {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user');
        localStorage.removeItem('expires_at');
        this.httpService.userId = '';
    }
    register(username, email, pass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.httpService.post(`${baseUrl}/auth/register`, {
                name: username,
                email,
                username: email,
                password: pass,
                role: 'user'
            });
            if (result.success) {
                yield this.login(email, pass);
            }
            else {
                throw new Error('Credentials are bad.');
            }
        });
    }
    isLoggedIn() {
        const userjs = localStorage.getItem('user');
        this.utilityService.user = JSON.parse(userjs || '{}');
        this.httpService.setAuthToken(this.getAuthToken() || '', this.utilityService.user.id);
        this.httpService.userId = this.utilityService.user.id;
        return moment__WEBPACK_IMPORTED_MODULE_3__().isBefore(this.getExpiration());
    }
    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration || '0');
        return moment__WEBPACK_IMPORTED_MODULE_3__(expiresAt);
    }
};
AuthService.ctorParameters = () => [
    { type: _http_service_service__WEBPACK_IMPORTED_MODULE_0__.HttpServiceService },
    { type: _utility_service_service__WEBPACK_IMPORTED_MODULE_2__.UtilityServiceService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 8300:
/*!**************************************************!*\
  !*** ./src/app/services/http-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpServiceService": () => (/* binding */ HttpServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
let HttpServiceService = class HttpServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authToken = '';
        this.csrfToken = '';
        this.csrfData = '';
        this.didCSRFRequest = false;
        this.userId = '';
    }
    setAuthToken(token, userId) {
        this.userId = userId;
        this.authToken = token;
    }
    post(url, body, apiKey) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.doCSRFGet();
            this.addCsrfDataToRequest(body);
            this.httpClient.post(url, body, this.getHeaders(apiKey)).subscribe((response) => resolve(response), (err) => reject(err));
        }));
    }
    put(url, body, apiKey) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.doCSRFGet();
            this.addCsrfDataToRequest(body);
            this.httpClient.put(url, body, this.getHeaders(apiKey)).subscribe((response) => resolve(response), (err) => reject(err));
        }));
    }
    patch(url, body, apiKey) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.doCSRFGet();
            this.addCsrfDataToRequest(body);
            this.httpClient.patch(url, body, this.getHeaders(apiKey)).subscribe((response) => resolve(response), (err) => reject(err));
        }));
    }
    get(url, apiKey) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.doCSRFGet();
            this.httpClient.get(url, this.getHeaders(apiKey)).subscribe((response) => resolve(response), (err) => reject(err));
        }));
    }
    delete(url, apiKey) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.doCSRFGet();
            this.httpClient.delete(url, this.getHeaders(apiKey)).subscribe((response) => resolve(response), (err) => reject(err));
        }));
    }
    getText(url, apiKey) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.doCSRFGet();
            const headers = this.getHeaders(apiKey);
            headers.responseType = 'text';
            this.httpClient.get(url, headers).subscribe((response) => resolve(response), (err) => reject(err));
        }));
    }
    doCSRFGet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.didCSRFRequest) {
                try {
                    const response = (yield this.httpClient.get(`${baseUrl}/csrf`).toPromise());
                    this.csrfToken = response.cookie;
                    this.csrfData = response.csrfData;
                    this.authToken = this.csrfData;
                    console.log(response);
                    this.didCSRFRequest = true;
                    console.log("Did the test");
                }
                catch (e) {
                    console.log("");
                }
            }
        });
    }
    addCsrfDataToRequest(body) {
        body._csrf = this.csrfData;
    }
    getHeaders(apiKey) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        if (this.userId) {
            headers = headers.append('X-UserId', this.userId);
        }
        if (this.authToken) {
            headers = headers.append('Authorization', 'Bearer ' + this.authToken);
        }
        if (this.csrfToken) {
            headers = headers.append('X-CSRF-TOKEN', this.csrfToken);
        }
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('rejectUnauthorized', 'false');
        return { headers };
    }
};
HttpServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HttpServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], HttpServiceService);



/***/ }),

/***/ 8766:
/*!*****************************************************!*\
  !*** ./src/app/services/utility-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityServiceService": () => (/* binding */ UtilityServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-service.service */ 8300);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);




const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
let UtilityServiceService = class UtilityServiceService {
    constructor(httpService) {
        this.httpService = httpService;
        this.repo = null;
        this.nft = null;
        this.user = null;
        this.githubInstallationBaseUrl = 'https://github.com/apps/gitnftapp/installations/new?state=';
    }
    githubInstallUrl() {
        var _a;
        return this.githubInstallationBaseUrl + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id);
    }
    createRepo(repoName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.httpService.post(baseUrl + '/addRepo', {
                id: this.repo.id,
                repoName: repoName
            });
        });
    }
    deleteRepo(repoId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.httpService.post(baseUrl + '/deleteRepo', {
                id: this.repo.id,
                repoId: repoId
            });
        });
    }
    getRepos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.httpService.get(baseUrl + '/github/getRepos');
            return result.repos;
        });
    }
    createNFT(nftToken) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.httpService.post(baseUrl + '/addNFT', {
                id: this.nft.id,
                nftToken: nftToken
            });
        });
    }
    deleteNFT(nftToken) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.httpService.post(baseUrl + '/deleteNFT', {
                id: this.nft.id,
                nftToken: nftToken
            });
        });
    }
    getNFTs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.httpService.get(baseUrl + '/nft/getNFTs');
            return result.nft;
        });
    }
};
UtilityServiceService.ctorParameters = () => [
    { type: _http_service_service__WEBPACK_IMPORTED_MODULE_0__.HttpServiceService }
];
UtilityServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UtilityServiceService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    apiUrl: '/api',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 6431,
	"./af.js": 6431,
	"./ar": 1286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 3160,
	"./ar-ly.js": 3160,
	"./ar-ma": 2551,
	"./ar-ma.js": 2551,
	"./ar-sa": 9989,
	"./ar-sa.js": 9989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 1286,
	"./az": 5887,
	"./az.js": 5887,
	"./be": 4572,
	"./be.js": 4572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 3344,
	"./bm.js": 3344,
	"./bn": 8985,
	"./bn-bd": 3990,
	"./bn-bd.js": 3990,
	"./bn.js": 8985,
	"./bo": 4391,
	"./bo.js": 4391,
	"./br": 6728,
	"./br.js": 6728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 1043,
	"./ca.js": 1043,
	"./cs": 420,
	"./cs.js": 420,
	"./cv": 3513,
	"./cv.js": 3513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 7978,
	"./da.js": 7978,
	"./de": 6061,
	"./de-at": 5204,
	"./de-at.js": 5204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 6061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 5724,
	"./en-au.js": 5724,
	"./en-ca": 525,
	"./en-ca.js": 525,
	"./en-gb": 2847,
	"./en-gb.js": 2847,
	"./en-ie": 7216,
	"./en-ie.js": 7216,
	"./en-il": 9305,
	"./en-il.js": 9305,
	"./en-in": 3364,
	"./en-in.js": 3364,
	"./en-nz": 9130,
	"./en-nz.js": 9130,
	"./en-sg": 1161,
	"./en-sg.js": 1161,
	"./eo": 802,
	"./eo.js": 802,
	"./es": 328,
	"./es-do": 5551,
	"./es-do.js": 5551,
	"./es-mx": 5615,
	"./es-mx.js": 5615,
	"./es-us": 4790,
	"./es-us.js": 4790,
	"./es.js": 328,
	"./et": 6389,
	"./et.js": 6389,
	"./eu": 2961,
	"./eu.js": 2961,
	"./fa": 6151,
	"./fa.js": 6151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 8898,
	"./fil.js": 8898,
	"./fo": 7779,
	"./fo.js": 7779,
	"./fr": 8174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 8867,
	"./fr-ch.js": 8867,
	"./fr.js": 8174,
	"./fy": 452,
	"./fy.js": 452,
	"./ga": 5014,
	"./ga.js": 5014,
	"./gd": 4127,
	"./gd.js": 4127,
	"./gl": 2124,
	"./gl.js": 2124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 7953,
	"./gom-latn.js": 7953,
	"./gu": 6604,
	"./gu.js": 6604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 4235,
	"./hi.js": 4235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 7735,
	"./hu.js": 7735,
	"./hy-am": 402,
	"./hy-am.js": 402,
	"./id": 9187,
	"./id.js": 9187,
	"./is": 536,
	"./is.js": 536,
	"./it": 5007,
	"./it-ch": 4667,
	"./it-ch.js": 4667,
	"./it.js": 5007,
	"./ja": 2093,
	"./ja.js": 2093,
	"./jv": 59,
	"./jv.js": 59,
	"./ka": 6870,
	"./ka.js": 6870,
	"./kk": 880,
	"./kk.js": 880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 8785,
	"./kn.js": 8785,
	"./ko": 1721,
	"./ko.js": 1721,
	"./ku": 7851,
	"./ku.js": 7851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 346,
	"./lb.js": 346,
	"./lo": 3002,
	"./lo.js": 3002,
	"./lt": 4035,
	"./lt.js": 4035,
	"./lv": 6927,
	"./lv.js": 6927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 4173,
	"./mi.js": 4173,
	"./mk": 6320,
	"./mk.js": 6320,
	"./ml": 1705,
	"./ml.js": 1705,
	"./mn": 1062,
	"./mn.js": 1062,
	"./mr": 2805,
	"./mr.js": 2805,
	"./ms": 1341,
	"./ms-my": 9900,
	"./ms-my.js": 9900,
	"./ms.js": 1341,
	"./mt": 7734,
	"./mt.js": 7734,
	"./my": 9034,
	"./my.js": 9034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 6495,
	"./ne.js": 6495,
	"./nl": 673,
	"./nl-be": 6272,
	"./nl-be.js": 6272,
	"./nl.js": 673,
	"./nn": 2486,
	"./nn.js": 2486,
	"./oc-lnc": 6219,
	"./oc-lnc.js": 6219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 8444,
	"./pl.js": 8444,
	"./pt": 3170,
	"./pt-br": 6117,
	"./pt-br.js": 6117,
	"./pt.js": 3170,
	"./ro": 6587,
	"./ro.js": 6587,
	"./ru": 9264,
	"./ru.js": 9264,
	"./sd": 2135,
	"./sd.js": 2135,
	"./se": 5366,
	"./se.js": 5366,
	"./si": 3379,
	"./si.js": 3379,
	"./sk": 6143,
	"./sk.js": 6143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 1082,
	"./sq.js": 1082,
	"./sr": 1621,
	"./sr-cyrl": 8963,
	"./sr-cyrl.js": 8963,
	"./sr.js": 1621,
	"./ss": 1404,
	"./ss.js": 1404,
	"./sv": 5685,
	"./sv.js": 5685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 4106,
	"./ta.js": 4106,
	"./te": 9204,
	"./te.js": 9204,
	"./tet": 3692,
	"./tet.js": 3692,
	"./tg": 6361,
	"./tg.js": 6361,
	"./th": 1735,
	"./th.js": 1735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 6129,
	"./tl-ph.js": 6129,
	"./tlh": 3759,
	"./tlh.js": 3759,
	"./tr": 1644,
	"./tr.js": 1644,
	"./tzl": 875,
	"./tzl.js": 875,
	"./tzm": 6878,
	"./tzm-latn": 1041,
	"./tzm-latn.js": 1041,
	"./tzm.js": 6878,
	"./ug-cn": 4357,
	"./ug-cn.js": 4357,
	"./uk": 4810,
	"./uk.js": 4810,
	"./ur": 6794,
	"./ur.js": 6794,
	"./uz": 8966,
	"./uz-latn": 7959,
	"./uz-latn.js": 7959,
	"./uz.js": 8966,
	"./vi": 5386,
	"./vi.js": 5386,
	"./x-pseudo": 3156,
	"./x-pseudo.js": 3156,
	"./yo": 8028,
	"./yo.js": 8028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 9380,
	"./zh-hk.js": 9380,
	"./zh-mo": 874,
	"./zh-mo.js": 874,
	"./zh-tw": 6508,
	"./zh-tw.js": 6508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu {\n  --background: #787878;\n}\n\nbody {\n  background: #1f1f1f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51e1xuICAgIC0tYmFja2dyb3VuZDogIzc4Nzg3ODtcbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\n\n<ion-app>\n    <ion-menu contentId=\"main-content\" type=\"overlay\" class=\".ion-menu\" side=\"end\">\n\n      <ion-content>\n\n        <ion-list id=\"inbox-list\">\n          <ion-list-header class=\".ion-text-center\"> <h3>GitNFT</h3></ion-list-header>\n          <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let page of pages; let i = index\">\n            <ion-item (click)=\"click(i, page)\" routerDirection=\"root\" [routerLink]=\"[page.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]= \"activeIndex === i\">\n              <ion-icon slot=\"start\" [ios]=\"page.icon\" [md]=\"page.icon\"></ion-icon>\n              <ion-label>{{ page.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n      </ion-content>\n\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-app>\n\n\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map