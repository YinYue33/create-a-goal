(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _create_a_goal_create_a_goal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-a-goal/create-a-goal.component */ "./src/app/create-a-goal/create-a-goal.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'public', component: _public_public_component__WEBPACK_IMPORTED_MODULE_6__["PublicComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'create-a-goal', component: _create_a_goal_create_a_goal_component__WEBPACK_IMPORTED_MODULE_5__["CreateAGoalComponent"] },
    { path: 'public', component: _public_public_component__WEBPACK_IMPORTED_MODULE_6__["PublicComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{ \n    width: 40px;\n    height: 40px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.header{\n    padding: 20px;  \n}\n\n.auth{\n    float: right;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden; \n}\n\nli {\n    float: left; \n}\n\nli a:hover {\n    color: grey;\n}\n\n.profile-photo{\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    -o-object-fit: cover;\n       object-fit: cover; \n}\n\nli a {\n    display: block;\n    color: black;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\n.center {\n    margin: auto;  \n    padding: 10px; \n    width: 80%;\n} "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.--> \n<div class=\"header\">\n    <ul>\n        <li>\n            <img src=\"../favicon.ico\" class=\"logo\" routerLink=\"home\">  \n        </li>\n        <li>\n            <a *ngIf=\"user\"routerLink=\"home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"public\">Public</a>\n        </li>\n        <li *ngIf=\"!user\" class=\"auth\">\n            <a routerLink=\"signup\"> Sign Up</a>\n        </li>\n        <li *ngIf=\"!user\" class=\"auth\">\n            <a routerLink=\"login\">Login</a>\n        </li>\n        <li *ngIf=\"user\" class=\"auth\">\n            <a (click)=\"logout()\">Logout</a>\n        </li>\n        <li *ngIf=\"user\" class=\"auth\">\n            <a routerLink=\"profile\">{{ user.name }}</a>\n        </li>\n        <li *ngIf=\"user\" class=\"auth\">\n            <img [src]=\"user.photo\" class=\"profile-photo\" routerLink=\"profile\" />\n        </li>\n        <li *ngIf=\"user\">\n            <a routerLink=\"create-a-goal\" aria-hidden=\"true\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create</a>  \n        </li>\n    </ul>\n\n</div>\n\n\n\n<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(api, auth, router, elementRef) {
        var _this = this;
        this.api = api;
        this.auth = auth;
        this.router = router;
        this.elementRef = elementRef;
        this.auth.userID = this.elementRef.nativeElement.getAttribute('userID');
        this.user = this.auth.user;
        this._userSubscription = this.auth.userChange.subscribe(function (user) {
            _this.user = user;
        });
        if (!this.auth.userID) {
            //this.router.navigate(['/login']);
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_a_goal_create_a_goal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-a-goal/create-a-goal.component */ "./src/app/create-a-goal/create-a-goal.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _goal_goal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./goal/goal.component */ "./src/app/goal/goal.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _goal_forum_goal_forum_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./goal-forum/goal-forum.module */ "./src/app/goal-forum/goal-forum.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _create_a_goal_create_a_goal_component__WEBPACK_IMPORTED_MODULE_10__["CreateAGoalComponent"],
                _goal_goal_component__WEBPACK_IMPORTED_MODULE_12__["GoalComponent"],
                _public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _goal_forum_goal_forum_module__WEBPACK_IMPORTED_MODULE_16__["GoalForumModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-a-goal/create-a-goal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/create-a-goal/create-a-goal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 100%\n}"

/***/ }),

/***/ "./src/app/create-a-goal/create-a-goal.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-a-goal/create-a-goal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n  <h1><span></span> Create a goal</h1>\n  <form [formGroup]=\"createAGoalForm\" (ngSubmit)=\"onCreateAGoal()\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Title</mat-label>\n      <input type=\"text\" matInput formControlName=\"title\" required>\n      <mat-error>Give your goal a title</mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Description</mat-label>\n      <textarea rows=\"4\" cols=\"50\" type=\"text\" matInput formControlName=\"description\"></textarea >\n      <mat-error>Keep in touch!</mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Choose a start time</mat-label>\n        <input matInput [matDatepicker]=\"picker1\" formControlName=\"startDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Choose a end time</mat-label>\n        <input matInput [matDatepicker]=\"picker2\" formControlName=\"endDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Max number of participants </mat-label>\n      <input type=\"number\" matInput formControlName=\"maxUser\"> \n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n        <mat-label> Entry credits </mat-label>\n        <input type=\"number\" matInput formControlName=\"entryCredit\"> \n    </mat-form-field>\n\n    <button class=\"btn btn-danger btn-lg\" mat-button type=\"submit\" [disabled]=\"!createAGoalForm.valid\">Submit</button>\n  </form> \n\n  </div>"

/***/ }),

/***/ "./src/app/create-a-goal/create-a-goal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-a-goal/create-a-goal.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateAGoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAGoalComponent", function() { return CreateAGoalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAGoalComponent = /** @class */ (function () {
    function CreateAGoalComponent(api, router) {
        this.api = api;
        this.router = router;
        this.createAGoalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            maxUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            entryCredit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    CreateAGoalComponent.prototype.ngOnInit = function () {
    };
    CreateAGoalComponent.prototype.onCreateAGoal = function () {
        var _this = this;
        this.api.post('/goal', '/add', this.createAGoalForm.value).subscribe(function (res) {
            _this.router.navigate(['/home']);
        });
    };
    CreateAGoalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-a-goal',
            template: __webpack_require__(/*! ./create-a-goal.component.html */ "./src/app/create-a-goal/create-a-goal.component.html"),
            styles: [__webpack_require__(/*! ./create-a-goal.component.css */ "./src/app/create-a-goal/create-a-goal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateAGoalComponent);
    return CreateAGoalComponent;
}());



/***/ }),

/***/ "./src/app/goal-forum/create-a-task/create-a-task.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/goal-forum/create-a-task/create-a-task.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 100%\n}"

/***/ }),

/***/ "./src/app/goal-forum/create-a-task/create-a-task.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/goal-forum/create-a-task/create-a-task.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n    <h1><span></span> Create a Task for {{goalTitle}}</h1>\n    <form [formGroup]=\"createATaskForm\" (ngSubmit)=\"createTask()\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Title</mat-label>\n        <input type=\"text\" matInput formControlName=\"title\" required>\n        <mat-error>Give your task a title</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field appearance=\"outline\">\n        <mat-label>Description</mat-label>\n        <textarea rows=\"4\" cols=\"50\" type=\"text\" matInput formControlName=\"description\"></textarea > \n      </mat-form-field>\n  \n      <mat-form-field appearance=\"outline\">\n          <mat-label>Choose a start date</mat-label>\n          <input matInput [matDatepicker]=\"picker1\" formControlName=\"startDate\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n          <mat-error>when do you like this task to start?</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field appearance=\"outline\">\n          <mat-label>Choose a end date</mat-label>\n          <input matInput [matDatepicker]=\"picker2\" formControlName=\"endDate\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error>when do you like this task to end?</mat-error>\n      </mat-form-field> \n      <div class=\"button-group\">\n        <button class=\"btn btn-danger btn-lg\" mat-button [mat-dialog-close]=\"\">Cancel</button>\n        <button class=\"btn btn-primary btn-lg\" mat-button type=\"submit\" [disabled]=\"!createATaskForm.valid\">Submit</button>\n      </div>\n    </form> \n  \n    </div>\n"

/***/ }),

/***/ "./src/app/goal-forum/create-a-task/create-a-task.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/goal-forum/create-a-task/create-a-task.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateATaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateATaskComponent", function() { return CreateATaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CreateATaskComponent = /** @class */ (function () {
    function CreateATaskComponent(api, router, dialogRef, data) {
        this.api = api;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.goalTitle = data.goalTitle;
        this.createATaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    CreateATaskComponent.prototype.ngOnInit = function () {
    };
    CreateATaskComponent.prototype.createTask = function () {
        this.dialogRef.close(this.createATaskForm.value);
    };
    CreateATaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-a-task',
            template: __webpack_require__(/*! ./create-a-task.component.html */ "./src/app/goal-forum/create-a-task/create-a-task.component.html"),
            styles: [__webpack_require__(/*! ./create-a-task.component.css */ "./src/app/goal-forum/create-a-task/create-a-task.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], CreateATaskComponent);
    return CreateATaskComponent;
}());



/***/ }),

/***/ "./src/app/goal-forum/goal-forum-home/goal-forum-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/goal-forum/goal-forum-home/goal-forum-home.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/goal-forum/goal-forum-home/goal-forum-home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/goal-forum/goal-forum-home/goal-forum-home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let task of tasks\">\n      <a routerLink=\"{{task._id}}\">{{task.title}}  {{task.startDate | date}} {{task.endDate | date}}</a> \n</div>\n"

/***/ }),

/***/ "./src/app/goal-forum/goal-forum-home/goal-forum-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/goal-forum/goal-forum-home/goal-forum-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: GoalForumHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalForumHomeComponent", function() { return GoalForumHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoalForumHomeComponent = /** @class */ (function () {
    function GoalForumHomeComponent() {
    }
    GoalForumHomeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GoalForumHomeComponent.prototype, "tasks", void 0);
    GoalForumHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal-forum-home',
            template: __webpack_require__(/*! ./goal-forum-home.component.html */ "./src/app/goal-forum/goal-forum-home/goal-forum-home.component.html"),
            styles: [__webpack_require__(/*! ./goal-forum-home.component.css */ "./src/app/goal-forum/goal-forum-home/goal-forum-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoalForumHomeComponent);
    return GoalForumHomeComponent;
}());



/***/ }),

/***/ "./src/app/goal-forum/goal-forum-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/goal-forum/goal-forum-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GoalForumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalForumRoutingModule", function() { return GoalForumRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _goal_forum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goal-forum.component */ "./src/app/goal-forum/goal-forum.component.ts");
/* harmony import */ var _goal_task_goal_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goal-task/goal-task.component */ "./src/app/goal-forum/goal-task/goal-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var goalForumRoutes = [
    {
        path: 'forum/:id',
        component: _goal_forum_component__WEBPACK_IMPORTED_MODULE_2__["GoalForumComponent"],
        children: [
            {
                path: ':id',
                component: _goal_task_goal_task_component__WEBPACK_IMPORTED_MODULE_3__["GoalTaskComponent"]
            }
        ]
    }
];
var GoalForumRoutingModule = /** @class */ (function () {
    function GoalForumRoutingModule() {
    }
    GoalForumRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(goalForumRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], GoalForumRoutingModule);
    return GoalForumRoutingModule;
}());



/***/ }),

/***/ "./src/app/goal-forum/goal-forum.component.css":
/*!*****************************************************!*\
  !*** ./src/app/goal-forum/goal-forum.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/goal-forum/goal-forum.component.html":
/*!******************************************************!*\
  !*** ./src/app/goal-forum/goal-forum.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Goal Forum\n</p>\n\n<ng-container *ngFor=\"let participant of participants\">\n  <img [src]=\"participant.photo || '../assets/default-profile.jpeg'\" alt=\"your image\" />\n</ng-container>\n\n<button (click)=\"createTask()\">Create Task</button>\n<app-goal-forum-home [tasks]=\"tasks\"></app-goal-forum-home>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/goal-forum/goal-forum.component.ts":
/*!****************************************************!*\
  !*** ./src/app/goal-forum/goal-forum.component.ts ***!
  \****************************************************/
/*! exports provided: GoalForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalForumComponent", function() { return GoalForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _create_a_task_create_a_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-a-task/create-a-task.component */ "./src/app/goal-forum/create-a-task/create-a-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GoalForumComponent = /** @class */ (function () {
    function GoalForumComponent(route, router, api, dialog) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.dialog = dialog;
    }
    GoalForumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goalID = this.route.snapshot.paramMap.get('id');
        this.api.get('/task', '/tasks', { id: this.goalID }).subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.api.get('/goal', '/get/one', { id: this.goalID }).subscribe(function (goal) {
            _this.goal = goal;
        });
        this.api.get('/common', '/participants', { id: this.goalID }).subscribe(function (participants) {
            _this.participants = participants;
        });
    };
    GoalForumComponent.prototype.createTask = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_create_a_task_create_a_task_component__WEBPACK_IMPORTED_MODULE_4__["CreateATaskComponent"], {
            width: '500px',
            data: { goalTitle: this.goal.title }
        });
        dialogRef.afterClosed().subscribe(function (task) {
            if (task) {
                task.goal = _this.goalID;
                _this.api.post('/task', '/add', task).subscribe(function (res) {
                    _this.tasks.push(res);
                });
            }
        });
    };
    GoalForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./goal-forum.component.html */ "./src/app/goal-forum/goal-forum.component.html"),
            styles: [__webpack_require__(/*! ./goal-forum.component.css */ "./src/app/goal-forum/goal-forum.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], GoalForumComponent);
    return GoalForumComponent;
}());



/***/ }),

/***/ "./src/app/goal-forum/goal-forum.module.ts":
/*!*************************************************!*\
  !*** ./src/app/goal-forum/goal-forum.module.ts ***!
  \*************************************************/
/*! exports provided: GoalForumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalForumModule", function() { return GoalForumModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _goal_forum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goal-forum.component */ "./src/app/goal-forum/goal-forum.component.ts");
/* harmony import */ var _goal_forum_home_goal_forum_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goal-forum-home/goal-forum-home.component */ "./src/app/goal-forum/goal-forum-home/goal-forum-home.component.ts");
/* harmony import */ var _goal_task_goal_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goal-task/goal-task.component */ "./src/app/goal-forum/goal-task/goal-task.component.ts");
/* harmony import */ var _goal_forum_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goal-forum-routing.module */ "./src/app/goal-forum/goal-forum-routing.module.ts");
/* harmony import */ var _create_a_task_create_a_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-a-task/create-a-task.component */ "./src/app/goal-forum/create-a-task/create-a-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var GoalForumModule = /** @class */ (function () {
    function GoalForumModule() {
    }
    GoalForumModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _goal_forum_routing_module__WEBPACK_IMPORTED_MODULE_8__["GoalForumRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
            declarations: [
                _goal_forum_component__WEBPACK_IMPORTED_MODULE_5__["GoalForumComponent"],
                _goal_forum_home_goal_forum_home_component__WEBPACK_IMPORTED_MODULE_6__["GoalForumHomeComponent"],
                _goal_task_goal_task_component__WEBPACK_IMPORTED_MODULE_7__["GoalTaskComponent"],
                _create_a_task_create_a_task_component__WEBPACK_IMPORTED_MODULE_9__["CreateATaskComponent"]
            ],
            entryComponents: [_create_a_task_create_a_task_component__WEBPACK_IMPORTED_MODULE_9__["CreateATaskComponent"]],
            providers: []
        })
    ], GoalForumModule);
    return GoalForumModule;
}());



/***/ }),

/***/ "./src/app/goal-forum/goal-task/goal-task.component.css":
/*!**************************************************************!*\
  !*** ./src/app/goal-forum/goal-task/goal-task.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n    width: 100%;\n}\n\nimg{\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin: 10px;\n}\n"

/***/ }),

/***/ "./src/app/goal-forum/goal-task/goal-task.component.html":
/*!***************************************************************!*\
  !*** ./src/app/goal-forum/goal-task/goal-task.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field appearance=\"outline\">\n    <mat-label>Comment</mat-label>\n    <textarea rows=\"4\" cols=\"50\" type=\"text\" matInput #comment></textarea > \n</mat-form-field> \n\n<button (click)=\"addComment(comment.value)\">add</button>\n\n\n<div *ngFor=\"let comment of comments\">\n  {{comment.comment}}\n  {{comment.createdTime}}\n  <img [src]=\"comment.creatorDetail.photo || '../assets/default-profile.jpeg'\" alt=\"your image\" />\n  <button (click)=\"deleteComment(comment)\">delete</button>\n</div>\n"

/***/ }),

/***/ "./src/app/goal-forum/goal-task/goal-task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/goal-forum/goal-task/goal-task.component.ts ***!
  \*************************************************************/
/*! exports provided: GoalTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalTaskComponent", function() { return GoalTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoalTaskComponent = /** @class */ (function () {
    function GoalTaskComponent(route, router, api, auth) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.auth = auth;
        this.comments = [];
    }
    GoalTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task$ = this.route.paramMap.subscribe(function (res) {
            _this.taskID = res.get('id');
            _this.api.get('/task', '/comments', { id: _this.taskID }).subscribe(function (comments) {
                _this.comments = comments;
            });
        });
    };
    GoalTaskComponent.prototype.addComment = function (comment) {
        var _this = this;
        var newComment = {
            comment: comment,
            task: this.taskID,
            createdTime: Date.now()
        };
        this.api.post('/task', '/add/comment', newComment).subscribe(function (comment) {
            _this.comments.push(comment);
            _this.comments.sort(function (a, b) { return b.createdTime - a.createdTime; });
        });
    };
    GoalTaskComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.api.delete('/task', '/delete/comment', { id: comment._id }).subscribe(function (res) {
            _this.comments = _this.comments.filter(function (com) { return com._id !== comment._id; });
        });
    };
    GoalTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal-task',
            template: __webpack_require__(/*! ./goal-task.component.html */ "./src/app/goal-forum/goal-task/goal-task.component.html"),
            styles: [__webpack_require__(/*! ./goal-task.component.css */ "./src/app/goal-forum/goal-task/goal-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], GoalTaskComponent);
    return GoalTaskComponent;
}());



/***/ }),

/***/ "./src/app/goal/goal.component.css":
/*!*****************************************!*\
  !*** ./src/app/goal/goal.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center; \n}\n.enter{\n   border-color: #3e82ef;  \n}\n.card-text{ \n    height: 150px;\n    overflow: hidden;\n}\n\n "

/***/ }),

/***/ "./src/app/goal/goal.component.html":
/*!******************************************!*\
  !*** ./src/app/goal/goal.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div [class.enter] = \"enter\" class=\"card\" (click)=\"detail()\">\n    <div class=\"card-body\">\n        <i class=\"fa fa-circle\" [style.color]=\"\"></i> <h4 class=\"card-title\">{{goal.title}}</h4>\n        <p class=\"card-text\">{{goal.description}}</p> \n    </div>\n    <div class=\"card-footer\">{{goal.startDate | date: 'M/d/yy'}} - {{goal.endDate | date: 'M/d/yy'}}   <i class=\"fa fa-usd\" style=\"color:#f7e85d\"></i>{{goal.entryCredit}}</div> \n</div>"

/***/ }),

/***/ "./src/app/goal/goal.component.ts":
/*!****************************************!*\
  !*** ./src/app/goal/goal.component.ts ***!
  \****************************************/
/*! exports provided: GoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalComponent", function() { return GoalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoalComponent = /** @class */ (function () {
    function GoalComponent(api, router, auth) {
        this.api = api;
        this.router = router;
        this.auth = auth;
        this.enter = false;
    }
    GoalComponent.prototype.ngOnInit = function () {
    };
    GoalComponent.prototype.mouseEnter = function () {
        this.enter = true;
    };
    GoalComponent.prototype.onMouseLeave = function () {
        this.enter = false;
    };
    GoalComponent.prototype.join = function () {
        var _this = this;
        this.api.post('/goal', '/join', { goalID: this.goal._id }).subscribe(function (res) {
            _this.goal = res;
        });
    };
    GoalComponent.prototype.delete = function () {
        this.api.delete('/goal', '/delete', { id: this.goal._id }).subscribe(function (res) {
        });
    };
    GoalComponent.prototype.quit = function () {
        var _this = this;
        this.api.post('/goal', '/quit', { goalID: this.goal._id }).subscribe(function (res) {
            _this.goal = res;
        });
    };
    GoalComponent.prototype.detail = function () {
        this.router.navigate(['/forum', this.goal._id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoalComponent.prototype, "goal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GoalComponent.prototype, "mouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GoalComponent.prototype, "onMouseLeave", null);
    GoalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal',
            template: __webpack_require__(/*! ./goal.component.html */ "./src/app/goal/goal.component.html"),
            styles: [__webpack_require__(/*! ./goal.component.css */ "./src/app/goal/goal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], GoalComponent);
    return GoalComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    margin: auto;\n    width: 100%; \n    padding: 10px;\n} \n\n.jumbotron{\n    height: 300px\n} \n\n.col-sm-4{\n    padding: 20px;\n}\n \n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <div class=\"jumbotron text-center\">\n        <h1>Finish Your Goal Today</h1>\n        <p>A journey of a thousand miles begins with single step</p>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\" *ngFor=\"let goal of createdGoals\">\n                <app-goal [goal]=\"goal\"></app-goal>\n            </div>\n            <div class=\"col-sm-4\" *ngFor=\"let goal of joinedGoals\">\n                <app-goal [goal]=\"goal\"></app-goal>\n            </div> \n        </div>\n    </div> \n     \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(api) {
        this.api = api;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get('/goal', '/get/created', {}).subscribe(function (res) {
            _this.createdGoals = res;
        });
        this.api.get('/goal', '/get/joined', {}).subscribe(function (res) {
            _this.joinedGoals = res;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 100%\n}\n\n.centered{  \n    margin: auto; \n    width: 40%; \n    margin-top: 5%;\n}\n\n.title-group{\n    padding: 120px;\n}\n\n.title{\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 100;\n    font-size: 25pt;\n}\n\n.cover-picture{\n    background-image:url('hero-image.jpg');\n    height: 400px;\n    width: 100%;\n    overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-picture\">\n\n    <div class=\"title-group\">\n        <p class=\"title\">A journey of a thousand miles</p>\n        <p class=\"title\">begins with single step</p>\n    </div>\n</div>\n\n<div class=\"container centered\">\n    <div>\n        <h1>\n            <span class=\"fa fa-sign-in\"></span> Login</h1>\n\n        <!-- LOGIN FORM -->\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Username</mat-label>\n                <input type=\"text\" matInput formControlName=\"username\" required>\n                <mat-error>Use your username or email to log in</mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input type=\"password\" matInput formControlName=\"password\" required>\n                <mat-error>Don't forget about your password!</mat-error>\n            </mat-form-field>\n\n            <button class=\"btn btn-danger btn-lg\" mat-button type=\"submit\" [disabled]=\"!loginForm.valid\">Submit</button>\n        </form>\n\n        <hr>\n\n        <p>Need an account?\n            <a routerLink=\"../signup\">Signup</a>\n        </p>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, router, auth) {
        this.api = api;
        this.router = router;
        this.auth = auth;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.auth.login(this.loginForm.value);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{ \n    width: 40%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center; \n    margin: 40px;\n}\n\n.centered{  \n    margin: auto; \n    width: 40%; \n    margin-top: 5%;\n}\n\n.mat-form-field {\n    width: 100%\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"user\">\n  <img id=\"\" [src]=\"user.photo\" alt=\"your image\" />\n  <input type=\"file\" (change)=\"onFileChange($event)\">\n\n\n  <div class=\"container centered\">\n    <div>\n      <h1>\n        <span class=\"fa fa-sign-in\"></span> {{ user.name }} </h1>\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateProfile()\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input type=\"text\" matInput formControlName=\"name\" required>\n          <mat-error>username can't be empty</mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input type=\"email\" matInput formControlName=\"email\" required>\n          <mat-error>email can't be empty!</mat-error>\n        </mat-form-field>\n\n        <button class=\"btn btn-danger btn-lg\" mat-button type=\"submit\" [disabled]=\"!profileForm.valid || loading\">Submit\n          <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i>\n        </button>\n      </form>\n\n    </div>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(api, auth, router) {
        var _this = this;
        this.api = api;
        this.auth = auth;
        this.router = router;
        this.loading = false;
        this.api.get('', '/isLoggedIn', {}).subscribe(function (user) {
            if (user === null) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.user = user;
                _this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
                });
            }
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.profileForm.get('photo').setValue(reader.result);
                _this.user.photo = reader.result;
            };
        }
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.loading = true;
        this.auth.updateProfile(this.profileForm.value);
        this.loading = false;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/public/public.component.css":
/*!*********************************************!*\
  !*** ./src/app/public/public.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/public.component.html":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"auth.isLogin\">\n    login\n    <app-goal *ngFor=\"let goal of goals\" [goal]=\"goal\">\n    </app-goal>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isLogin\">\n    not login\n    <app-goal *ngFor=\"let goal of goals\" [goal]=\"goal\">\n    </app-goal>\n</ng-container>"

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicComponent = /** @class */ (function () {
    function PublicComponent(api, router, auth) {
        this.api = api;
        this.router = router;
        this.auth = auth;
        this.user = auth.user;
    }
    PublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get('/goal', '/get/all', {}).subscribe(function (res) {
            _this.goals = res;
        });
    };
    PublicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.css */ "./src/app/public/public.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
    }
    ApiService.prototype.get = function (router, action, params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (var key in params) {
            httpParams = httpParams.append(key, params[key]);
        }
        return this.http.get('/api' + router + action, { params: httpParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(this)));
    };
    ApiService.prototype.post = function (router, action, data) {
        return this.http.post('/api' + router + action, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(this)));
    };
    ApiService.prototype.delete = function (router, action, params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (var key in params) {
            httpParams = httpParams.append(key, params[key]);
        }
        return this.http.delete('/api' + router + action, { params: httpParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(this)));
    };
    ApiService.prototype.put = function (router, action, data) {
        return this.http.put('/api' + router + action, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(this)));
    };
    ApiService.prototype.handleError = function (self) {
        return function (err) {
            if (err.status === 401 || err.status === 403) {
                self.router.navigate(['/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.error);
        };
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.userChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.api.get('', '/sessionUser', {}).subscribe(function (user) {
            if (user)
                _this.userID = user._id;
            _this.user = user;
            _this.userChange.next(_this.user);
        });
    }
    AuthService.prototype.updateProfile = function (profile) {
        var _this = this;
        this.api.put('/user', '/put', profile).subscribe(function (user) {
            _this.user = user;
            _this.userChange.next(user);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.api.get('', '/logout', {}).subscribe(function (res) {
            _this.user = null;
            _this.userChange.next(null);
            _this.userID = null;
            _this.router.navigate(['/login']);
        });
    };
    ;
    AuthService.prototype.signup = function (signupInfo) {
        var _this = this;
        this.api.post('', '/signup', signupInfo).subscribe(function (user) {
            _this.userID = user._id;
            _this.user = user;
            _this.userChange.next(user);
            _this.router.navigate(['/home']);
        });
    };
    ;
    AuthService.prototype.login = function (loginInfo) {
        var _this = this;
        this.api.post('', '/login', { username: loginInfo.username, password: loginInfo.password }).subscribe(function (user) {
            _this.userID = user._id;
            _this.user = user;
            _this.userChange.next(user);
            _this.router.navigate(['/home']);
        });
    };
    ;
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 100%\n}\n\n.centered{  \n    margin: auto; \n    width: 40%; \n    margin-top: 5%;\n}\n\n.title-group{\n    padding: 120px;\n}\n\n.title{\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 100;\n    font-size: 25pt;\n}\n\n.cover-picture{\n    background-image:url('hero-image.jpg');\n    height: 400px;\n    width: 100%;\n    overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-picture\">\n\n<div class=\"title-group\">\n        <p class=\"title\">A journey of a thousand miles</p>\n        <p class=\"title\">begins with single step</p> \n</div>\n</div>\n\n<div class=\"container centered\"> \n    <div> \n        <h1>\n            <span class=\"fa fa-sign-in\"></span> Signup</h1>\n        <!-- LOGIN FORM -->\n        <h1 *ngIf=\"signupErrorMessage !== null\">Sign up failed! {{signupErrorMessage}}</h1>\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Username</mat-label>\n                <input type=\"text\" matInput formControlName=\"name\" required>\n                <mat-error>I'd like to know your name</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Email</mat-label>\n                <input type=\"email\" matInput formControlName=\"email\" required>\n                <mat-error>Keep in touch!</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input type=\"password\" matInput formControlName=\"password\" required>\n                <mat-error>Don't forget about your password!</mat-error>\n            </mat-form-field>\n\n            <button class=\"btn btn-danger btn-lg\" mat-button type=\"submit\" [disabled]=\"!signupForm.valid\">Submit</button>\n        </form>\n\n        <hr>\n\n        <p>Already have an account?\n            <a routerLink=\"../login\">Login</a>\n        </p>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(api, router, auth) {
        this.api = api;
        this.router = router;
        this.auth = auth;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.signupErrorMessage = null;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        this.auth.signup(this.signupForm.value);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yueyin/CreateAGoal/create-a-goal/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map