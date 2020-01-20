(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/auth.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/auth.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Авторизация в приложении</ion-card-subtitle>\r\n      <ion-card-title>Твои визитки</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n\r\n      <div *ngIf=\"!state\">\r\n        <ion-label position=\"stacked\">Имя <ion-text color=\"danger\">*</ion-text>\r\n        </ion-label>\r\n        <ion-input required\r\n                   type=\"text\"\r\n                   (ionChange)=\"handleFirstNameValue($event)\"></ion-input>\r\n        <ion-label position=\"stacked\">Фамилия <ion-text color=\"danger\">*</ion-text>\r\n        </ion-label>\r\n        <ion-input required\r\n                   type=\"text\"\r\n                   (ionChange)=\"handleLastNameValue($event)\"></ion-input>\r\n      </div>\r\n\r\n      <ion-label position=\"stacked\">Логин <ion-text color=\"danger\">*</ion-text>\r\n      </ion-label>\r\n      <ion-input required\r\n                 type=\"text\"\r\n                 (ionChange)=\"handleLoginValue($event)\"></ion-input>\r\n      <ion-label position=\"stacked\">Пароль <ion-text color=\"danger\">*</ion-text>\r\n      </ion-label>\r\n      <ion-input required\r\n                 type=\"text\"\r\n                 (ionChange)=\"handlePasswordValue($event)\"></ion-input>\r\n\r\n      <div class=\"stateToggle\">\r\n        <ion-checkbox [(ngModel)]=\"state\"\r\n                      name=\"blueberry\"\r\n                      checked></ion-checkbox>\r\n        <h4>Есть аккаунт?</h4>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-button expand=\"block\"\r\n              type=\"submit\"\r\n              (click)=\"state ? login() : registration()\"\r\n              class=\"padding15\">Авторизоваться</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/pages/auth/auth.page.ts");







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"] }])
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })
], AuthPageModule);



/***/ }),

/***/ "./src/app/pages/auth/auth.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stateToggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.stateToggle h4 {\n  margin-left: 10px;\n}\n\n.padding15 {\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9EOlxccmVwb3NcXEJ1c2luZXNzQ2FyZE1hbmFnZXJcXEJDTU1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXGF1dGgucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL2F1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2F1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRlVG9nZ2xle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zdGF0ZVRvZ2dsZSBoNHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnBhZGRpbmcxNXtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn0iLCIuc3RhdGVUb2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnN0YXRlVG9nZ2xlIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wYWRkaW5nMTUge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/auth/auth.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/crud.service */ "./src/app/shared/services/crud.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let AuthPage = class AuthPage {
    constructor(crudService, authService, router, toastController, alertController) {
        this.crudService = crudService;
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.authData = {};
    }
    handleFirstNameValue(event) {
        this.authData.firstName = event.target.value;
    }
    handleLastNameValue(event) {
        this.authData.lastName = event.target.value;
    }
    handleLoginValue(event) {
        this.authData.login = event.target.value;
    }
    handlePasswordValue(event) {
        this.authData.password = event.target.value;
    }
    registration() {
        this.crudService.post('profile', this.getParams())
            .subscribe(data => {
            this.login();
        }, error => {
            const err = 'Такой логин уже существует';
            this.presentToast(err);
        });
    }
    login() {
        this.crudService.post('profile/token', this.getParams())
            .subscribe(data => {
            this.authService.setToken(data.token);
            this.authService.setUserData(data.profileDto);
            window.location.href = '';
        }, error => {
            this.presentAlert(error.message);
            const err = 'Неверный логин или пароль';
            this.presentToast(err);
        });
    }
    presentToast(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: error,
                duration: 4000,
                color: 'primary'
            });
            toast.present();
        });
    }
    getParams() {
        return {
            'Password': this.authData.password,
            'ProfileDto': {
                'FirstName': this.authData.firstName,
                'LastName': this.authData.lastName,
                'Login': this.authData.login
            }
        };
    }
    presentAlert(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Subtitle',
                message: error,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: src_app_shared_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'auth',
        template: __webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/auth.page.html"),
        styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/pages/auth/auth.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
        src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module-es2015.js.map