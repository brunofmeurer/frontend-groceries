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
/* harmony import */ var _pages_groceries_maintenance_groceries_maintenance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/groceries-maintenance/groceries-maintenance.component */ "./src/app/pages/groceries-maintenance/groceries-maintenance.component.ts");
/* harmony import */ var _pages_groceries_list_groceries_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/groceries-list/groceries-list.component */ "./src/app/pages/groceries-list/groceries-list.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'mantimentos', component: _pages_groceries_list_groceries_list_component__WEBPACK_IMPORTED_MODULE_3__["GroceriesListComponent"] },
    { path: 'mantimentos/novo', component: _pages_groceries_maintenance_groceries_maintenance_component__WEBPACK_IMPORTED_MODULE_2__["GroceriesMaintenanceComponent"] },
    { path: 'mantimentos/editar/:id', component: _pages_groceries_maintenance_groceries_maintenance_component__WEBPACK_IMPORTED_MODULE_2__["GroceriesMaintenanceComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
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

module.exports = ":host main {\r\n    padding: 0px 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-menu title=\"App Manutenção de Mantimentos\" [items]=\"items\"></app-menu>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    /**
     * @author Bruno Meurer
     * @description Main component
     */
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.items = [{
                label: 'Menu',
                items: [
                    { label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio' },
                    { label: 'Mantimentos', icon: 'pi pi-bars', routerLink: '/mantimentos' }
                ]
            }];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        /**
         * @author Bruno Meurer
         * @description Main component
         */
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_groceries_maintenance_groceries_maintenance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/groceries-maintenance/groceries-maintenance.component */ "./src/app/pages/groceries-maintenance/groceries-maintenance.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_groceries_list_groceries_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/groceries-list/groceries-list.component */ "./src/app/pages/groceries-list/groceries-list.component.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_itemList_item_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/itemList/item-list.component */ "./src/app/components/itemList/item-list.component.ts");
/* harmony import */ var _pipes_spoils_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/spoils.pipe */ "./src/app/pipes/spoils.pipe.ts");
/* harmony import */ var _components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/progressbar/progressbar.component */ "./src/app/components/progressbar/progressbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// utils










// alerts


// components list


// forms






// custom





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_groceries_maintenance_groceries_maintenance_component__WEBPACK_IMPORTED_MODULE_4__["GroceriesMaintenanceComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _pages_groceries_list_groceries_list_component__WEBPACK_IMPORTED_MODULE_6__["GroceriesListComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_26__["BreadcrumbComponent"],
                _components_itemList_item_list_component__WEBPACK_IMPORTED_MODULE_27__["ItemListComponent"],
                _components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_29__["ProgressbarComponent"],
                _pipes_spoils_pipe__WEBPACK_IMPORTED_MODULE_28__["SpoilsPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_7__["MenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_22__["InputSwitchModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_11__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_12__["MessageModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_17__["DataViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_18__["CardModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__["CurrencyMaskModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__["ProgressBarModule"]
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_16__["ConfirmationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ul {\r\n    list-style: none;\r\n    padding-left: 0 !important;\r\n    margin: 8px 0px;\r\n}\r\n\r\n:host ul>li {\r\n    display: inline;\r\n}\r\n\r\n:host ul>li:not(:first-child):before {\r\n    content: \"❭\"; /* Insert content that looks like bullets */\r\n    padding: 0px 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <ul>\r\n      <li *ngFor=\"let item of items\">\r\n        <a routerLink=\"{{item.rote}}\">{{ item.name }}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
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

/**
 * @author Bruno Meurer
 * @description My simple breadcrumb component (I know, the prime face has a breadcrumb component)
 */
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BreadcrumbComponent.prototype, "items", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/components/breadcrumb/breadcrumb.component.css")]
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/itemList/item-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/itemList/item-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #edit {\r\n    margin-right: 3px;\r\n}\r\n\r\n:host button {\r\n    height: 20px;\r\n    width: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/itemList/item-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/itemList/item-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card title=\"{{grocerie.name}}\">\r\n    {{grocerie.quantity}} {{grocerie.unitOfMeasurement}} <br>\r\n    Valor Unitário: {{grocerie.price | currency:'BRL':true}} <br>\r\n    Validade: {{grocerie.expirationDate | date: \"dd/MM/yyyy\"}} <br>\r\n    Fabricação: {{grocerie.dateFactory | date: \"dd/MM/yyyy\"}} <br>\r\n    Perecível: {{grocerie.spoils | spoils}}\r\n    <hr class=\"ui-widget-content\" style=\"border-top:0\">\r\n    <button id=\"edit\" type=\"text\" (click)=\"edit(grocerie.index)\" pButton icon=\"pi pi-pencil\"></button>\r\n    <button class=\"ui-button-danger\" type=\"text\" (click)=\"clickOnDelete(grocerie.index)\" pButton icon=\"pi pi-trash\"></button>\r\n</p-card>\r\n"

/***/ }),

/***/ "./src/app/components/itemList/item-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/itemList/item-list.component.ts ***!
  \************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Grocerie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/Grocerie */ "./src/app/models/Grocerie.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/groceries.service */ "./src/app/services/groceries.service.ts");
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





/**
 * @author Bruno Meurer
 * @description Item List display
 */
var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(confirmationService, groceriesService, router) {
        this.confirmationService = confirmationService;
        this.groceriesService = groceriesService;
        this.router = router;
        /**
         * @description delete function
         */
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     *
     * @param index
     * @description when click on delete button call function param
     */
    ItemListComponent.prototype.clickOnDelete = function (index) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja eliminar este mantimento?',
            accept: function () {
                _this.delete.emit(index);
            }
        });
    };
    /**
     *
     * @param index
     * @description when click on edit, nav to edit page
     */
    ItemListComponent.prototype.edit = function (index) {
        this.router.navigate(['/mantimentos/editar/' + index]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_Grocerie__WEBPACK_IMPORTED_MODULE_1__["Grocerie"]
        /**
         * @description delete function
         */
        )
    ], ItemListComponent.prototype, "grocerie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "delete", void 0);
    ItemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-list',
            template: __webpack_require__(/*! ./item-list.component.html */ "./src/app/components/itemList/item-list.component.html"),
            styles: [__webpack_require__(/*! ./item-list.component.css */ "./src/app/components/itemList/item-list.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ div.ng-trigger {\r\n    width: auto !important;\r\n}\r\n\r\n:host header {\r\n    padding: 5px;\r\n    background-color: #F4F4F4;\r\n}\r\n\r\n:host header h1 {\r\n    margin-left: 10px;\r\n    font-size: 15px;\r\n    font-weight: 510;\r\n    display: inline;\r\n}"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header>\r\n  <button class=\"ui-button-secondary\" type=\"text\" (click)=\"display = true\" pButton icon=\"pi pi-bars\"></button>\r\n  <h1>{{title}}</h1>\r\n</header>\r\n<nav>\r\n  <p-sidebar [(visible)]=\"display\">\r\n    <p-menu [model]=\"items\"></p-menu>\r\n  </p-sidebar>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

/**
 * @author Bruno Meurer
 * @description Toolbar menu component
 */
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        /**
         * @description title app
         */
        this.title = "My App";
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MenuComponent.prototype, "items", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/progressbar/progressbar.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/progressbar/progressbar.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ui-progressbar {\r\n    height: 2px !important;\r\n}"

/***/ }),

/***/ "./src/app/components/progressbar/progressbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/progressbar/progressbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-progressBar mode=\"indeterminate\" *ngIf=\"loading\"></p-progressBar>"

/***/ }),

/***/ "./src/app/components/progressbar/progressbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/progressbar/progressbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
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

/**
 * @author Bruno Meurer
 * @description my progress bar
 */
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProgressbarComponent.prototype, "loading", void 0);
    ProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progressbar',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/components/progressbar/progressbar.component.html"),
            styles: [__webpack_require__(/*! ./progressbar.component.css */ "./src/app/components/progressbar/progressbar.component.css")]
        })
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/models/Grocerie.ts":
/*!************************************!*\
  !*** ./src/app/models/Grocerie.ts ***!
  \************************************/
/*! exports provided: Grocerie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grocerie", function() { return Grocerie; });
/**
 * @author Bruno Meurer
 * @description Model of grocerie
 */
var Grocerie = /** @class */ (function () {
    function Grocerie() {
        this.name = '';
        this.unitOfMeasurement = null;
        this.quantity = 0;
        this.price = 0;
        this.spoils = false;
        this.expirationDate = null;
        this.dateFactory = null;
        this.index = null;
    }
    return Grocerie;
}());



/***/ }),

/***/ "./src/app/models/ItemBreadcrumb.ts":
/*!******************************************!*\
  !*** ./src/app/models/ItemBreadcrumb.ts ***!
  \******************************************/
/*! exports provided: ItemBreadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBreadcrumb", function() { return ItemBreadcrumb; });
/**
 * @author Bruno Meurer
 * @description Model of item breadcrumb
 */
var ItemBreadcrumb = /** @class */ (function () {
    function ItemBreadcrumb(name, rote) {
        this.name = name;
        this.rote = rote;
    }
    return ItemBreadcrumb;
}());



/***/ }),

/***/ "./src/app/models/UnityOfMeasurement.ts":
/*!**********************************************!*\
  !*** ./src/app/models/UnityOfMeasurement.ts ***!
  \**********************************************/
/*! exports provided: UnityOfMeasurement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnityOfMeasurement", function() { return UnityOfMeasurement; });
/**
 * @author Bruno Meurer
 * @description Enum to list unity of measurement avail
 */
var UnityOfMeasurement;
(function (UnityOfMeasurement) {
    UnityOfMeasurement["LT"] = "LT";
    UnityOfMeasurement["KG"] = "KG";
    UnityOfMeasurement["UN"] = "UN";
})(UnityOfMeasurement || (UnityOfMeasurement = {}));


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-progressbar [loading]=\"loading\"></app-progressbar>\r\n<p>\r\n  Numero de mantimentos cadastrados: {{data.count}}\r\n</p>\r\n<p>\r\n  Média de valor: {{data.priceAverage | currency:'BRL':true}}\r\n</p>\r\n<p>\r\n  Produtos vencidos: {{data.expiredGroceries}}\r\n</p>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/groceries.service */ "./src/app/services/groceries.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Bruno Meurer
 * @description component page to start view
 */
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(groceriesService) {
        this.groceriesService = groceriesService;
        this.data = { count: 0, priceAverage: 0, expiredGroceries: 0 };
        this.loading = false;
    }
    /**
     * @description initialize data
     */
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.groceriesService.list().then(function (response) {
            _this.loading = false;
            if (response != null) {
                _this.data['count'] = response.length;
                var priceAverage_1 = 0;
                var expiredGroceries_1 = 0;
                response.forEach(function (grocerie) {
                    priceAverage_1 += grocerie.price;
                    if (grocerie.expirationDate != null && new Date(grocerie.expirationDate).getTime() < (new Date()).getTime()) {
                        expiredGroceries_1++;
                    }
                });
                _this.data['priceAverage'] = priceAverage_1 / _this.data.count;
                _this.data['expiredGroceries'] = expiredGroceries_1;
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_1__["GroceriesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/groceries-list/groceries-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/groceries-list/groceries-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #add {\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/groceries-list/groceries-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/groceries-list/groceries-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [items]=\"itemsBreadcrumb\"></app-breadcrumb>\r\n\r\n<button id=\"add\" type=\"text\" label=\"Novo Mantimento\" (click)=\"add()\" pButton icon=\"pi pi-plus-circle\"></button>\r\n\r\n<app-progressbar [loading]=\"loading\"></app-progressbar>\r\n<p-dataView \r\n    [value]=\"list\"\r\n    [paginator]=\"true\"\r\n    [rows]=\"8\"\r\n    paginatorPosition=\"both\"\r\n    filterBy=\"name\"\r\n    [sortField]=\"sortField\"\r\n    [sortOrder]=\"sortOrder\"\r\n    emptyMessage=\"Nenhum mantimento encontrado\"\r\n    [loading]=\"loading\"\r\n    #dv>\r\n    <p-header>\r\n        <div class=\"ui-helper-clearfix\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Organizar por...\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"{'min-width':'15em'}\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n                    <div style=\"position:relative\">\r\n                        <input type=\"search\" pInputText placeholder=\"Buscar\" (keyup)=\"dv.filter($event.target.value)\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\">\r\n                    <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-header>\r\n    <ng-template let-grocerie pTemplate=\"listItem\">\r\n        <div class=\"ui-g-12\">\r\n            <app-item-list (delete)=\"delete($event)\" [grocerie]=\"grocerie\"></app-item-list>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template let-grocerie pTemplate=\"gridItem\">\r\n        <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\r\n            <app-item-list (refresh)=\"delete($event)\" [grocerie]=\"grocerie\"></app-item-list>\r\n        </div>\r\n    </ng-template>\r\n</p-dataView>\r\n<p-confirmDialog \r\n    header=\"Confirmação\"\r\n    icon=\"pi pi-exclamation-triangle\"\r\n    width=\"300\"\r\n    #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"pi pi-check\" label=\"Sim\" (click)=\"cd.accept()\"></button>\r\n        <button class=\"ui-button-danger\" type=\"button\" pButton icon=\"pi pi-times\" label=\"Não\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/groceries-list/groceries-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/groceries-list/groceries-list.component.ts ***!
  \******************************************************************/
/*! exports provided: GroceriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesListComponent", function() { return GroceriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ItemBreadcrumb */ "./src/app/models/ItemBreadcrumb.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/groceries.service */ "./src/app/services/groceries.service.ts");
/* harmony import */ var src_app_models_Grocerie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Grocerie */ "./src/app/models/Grocerie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @author Bruno Meurer
 * @description component page to list groceries
 */
var GroceriesListComponent = /** @class */ (function () {
    function GroceriesListComponent(router, groceriesService) {
        this.router = router;
        this.groceriesService = groceriesService;
        /**
         * @description itens of custom breadcrumb
         */
        this.itemsBreadcrumb = new Array();
        this.list = [];
        this.loading = false;
    }
    /**
     * @description initialize app
     */
    GroceriesListComponent.prototype.ngOnInit = function () {
        this.itemsBreadcrumb.push(new _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__["ItemBreadcrumb"]("Inicio", "/inicio"));
        this.itemsBreadcrumb.push(new _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__["ItemBreadcrumb"]("Listar Mantimentos", "/mantimentos"));
        this.sortOptions = [
            { label: 'Nome', value: 'name' },
            { label: 'valor', value: 'price' }
        ];
        this.fetch();
    };
    /**
     * @description fetch data list
     */
    GroceriesListComponent.prototype.fetch = function () {
        var _this = this;
        this.loading = true;
        this.groceriesService.list().then(function (response) {
            if (response != null) {
                _this.list = response.map(function (e, index) {
                    var grocerie = new src_app_models_Grocerie__WEBPACK_IMPORTED_MODULE_4__["Grocerie"]();
                    grocerie = e;
                    grocerie.index = index;
                    return grocerie;
                });
            }
            _this.loading = false;
        });
    };
    /**
     *
     * @param event
     * @description set sort field
     */
    GroceriesListComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    /**
     * @description click on add button
     */
    GroceriesListComponent.prototype.add = function () {
        this.router.navigate(['/mantimentos/novo']);
    };
    /**
     * @description click on delete button
     */
    GroceriesListComponent.prototype.delete = function (index) {
        var _this = this;
        this.loading = true;
        this.groceriesService.delete(index).then(function (response) {
            _this.fetch();
        });
    };
    GroceriesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groceries-list',
            template: __webpack_require__(/*! ./groceries-list.component.html */ "./src/app/pages/groceries-list/groceries-list.component.html"),
            styles: [__webpack_require__(/*! ./groceries-list.component.css */ "./src/app/pages/groceries-list/groceries-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesService"]])
    ], GroceriesListComponent);
    return GroceriesListComponent;
}());



/***/ }),

/***/ "./src/app/pages/groceries-maintenance/groceries-maintenance.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/groceries-maintenance/groceries-maintenance.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #save {\r\n    margin-right: 3px;\r\n}\r\n\r\n:host input {\r\n    width: 100%;\r\n}\r\n\r\n:host /deep/ .ui-message,\r\n:host /deep/ .ui-dropdown,\r\n:host /deep/ .ui-calendar,\r\n:host /deep/ .ui-calendar input {\r\n    width: 100% !important;\r\n}\r\n\r\n:host /deep/ .ui-dropdown {\r\n    margin-top: 2px;\r\n}\r\n\r\n:host .field:not(:first-child) {\r\n    margin-top: 30px;\r\n}\r\n\r\n:host .no-float-label {\r\n    display: block;\r\n    margin-top: 7px !important;\r\n    left: .25em;\r\n}\r\n\r\n:host .label { \r\n    color: #898989;\r\n    font-size: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/groceries-maintenance/groceries-maintenance.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/groceries-maintenance/groceries-maintenance.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [items]=\"itemsBreadcrumb\"></app-breadcrumb>\r\n<form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-8 ui-md-offset-2\">\r\n            <app-progressbar [loading]=\"loading\"></app-progressbar>\r\n            <span class=\"field no-float-label\">\r\n                <label class=\"label\" for=\"name-item\">Nome *</label>\r\n                <input required id=\"name-item\" type=\"text\" size=\"50\" pInputText formControlName=\"name\">\r\n            </span>\r\n            <p-message severity=\"error\" text=\"Nome é obrigatório (Max 50 caracteres)\" *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\"></p-message>\r\n            <span class=\"field no-float-label\">\r\n                <label for=\"um\" class=\"label\">Unidade de medida *</label>\r\n                <p-dropdown required [autoDisplayFirst]=\"false\" id=\"um\" [options]=\"units\" formControlName=\"unitOfMeasurement\" (onChange)=\"onUnityChange($event)\"></p-dropdown>\r\n            </span>\r\n            <span class=\"field no-float-label\">\r\n                <label class=\"label\">Quantidade </label>\r\n                <div class=\"ui-inputgroup\">\r\n                    <input id=\"quantity\" pInputText formControlName=\"quantity\" currencyMask [options]=\"quantityMask\">\r\n                    <span class=\"ui-inputgroup-addon\">{{um}}</span> \r\n                </div>                \r\n            </span>\r\n            <span class=\"field no-float-label\">\r\n                <label class=\"label\" for=\"price\">Preço *</label>\r\n                <input required id=\"price\" pInputText formControlName=\"price\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\">\r\n            </span>\r\n            <p-message severity=\"error\" text=\"Preço é obrigatório\" *ngIf=\"!userform.controls['price'].valid&&userform.controls['price'].dirty\"></p-message>\r\n            <span class=\"field no-float-label\">\r\n                <label class=\"label\">Perecível? *</label>\r\n                <br>\r\n                <p-inputSwitch id=\"spoils\" formControlName=\"spoils\" (onChange)=\"onSpoilsDateChange(userform.value)\"></p-inputSwitch>\r\n            </span>\r\n            <span class=\"field no-float-label\">\r\n                <label class=\"label\" for=\"expirationDate\">Data de validade {{userform.value.spoils ? '*' : ''}}</label>\r\n                <p-calendar id=\"expirationDate\" [touchUI]=\"true\" formControlName=\"expirationDate\" dateFormat=\"dd/mm/yy\" (onSelect)=\"onSpoilsDateChange(userform.value)\"></p-calendar>\r\n            </span>\r\n            <p-message severity=\"warn\" text=\"O produto está no final da válidade.\" *ngIf=\"expired\"></p-message>\r\n            <span class=\"field no-float-label\">\r\n                <label class=\"label\" for=\"dateFactory\">Data de fabricação *</label>\r\n                <p-calendar id=\"dateFactory\" [touchUI]=\"true\" [maxDate]=\"maxDateFactory\" formControlName=\"dateFactory\" dateFormat=\"dd/mm/yy\"></p-calendar>\r\n            </span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-g-12 ui-md-8 ui-md-offset-2\">\r\n            <button id=\"save\" label=\"Salvar\" class=\"ui-button-default\" type=\"submit\" pButton icon=\"pi pi-save\" [(disabled)]=\"!isUserFormValid\"></button>\r\n            <button id=\"cancel\" label=\"Cancelar\" class=\"ui-button-danger\" type=\"text\" (click)=\"cancel()\" pButton icon=\"pi pi-times-circle\"></button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/groceries-maintenance/groceries-maintenance.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/groceries-maintenance/groceries-maintenance.component.ts ***!
  \********************************************************************************/
/*! exports provided: GroceriesMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesMaintenanceComponent", function() { return GroceriesMaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ItemBreadcrumb */ "./src/app/models/ItemBreadcrumb.ts");
/* harmony import */ var src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/groceries.service */ "./src/app/services/groceries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Grocerie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Grocerie */ "./src/app/models/Grocerie.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_UnityOfMeasurement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/UnityOfMeasurement */ "./src/app/models/UnityOfMeasurement.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * @author Bruno Meurer
 * @description component page to maintenance groceries
 */
var GroceriesMaintenanceComponent = /** @class */ (function () {
    function GroceriesMaintenanceComponent(groceriesService, router, fb, route) {
        this.groceriesService = groceriesService;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.itemsBreadcrumb = new Array();
        this.units = [
            { label: "QUILIGRAMA", value: src_app_models_UnityOfMeasurement__WEBPACK_IMPORTED_MODULE_6__["UnityOfMeasurement"].KG },
            { label: "LITRO", value: src_app_models_UnityOfMeasurement__WEBPACK_IMPORTED_MODULE_6__["UnityOfMeasurement"].LT },
            { label: "UNIDADE", value: src_app_models_UnityOfMeasurement__WEBPACK_IMPORTED_MODULE_6__["UnityOfMeasurement"].UN }
        ];
        this.um = "kg";
        this.grocerie = new src_app_models_Grocerie__WEBPACK_IMPORTED_MODULE_4__["Grocerie"]();
        this.loading = false;
    }
    /**
     * @description init page
     */
    GroceriesMaintenanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsBreadcrumb.push(new _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__["ItemBreadcrumb"]("Inicio", "/inicio"));
        this.itemsBreadcrumb.push(new _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__["ItemBreadcrumb"]("Listar Mantimentos", "/mantimentos"));
        if (this.route.snapshot.params.id == null) {
            this.itemsBreadcrumb.push(new _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__["ItemBreadcrumb"]("Novo", "/mantimentos/novo"));
        }
        else {
            this.itemsBreadcrumb.push(new _models_ItemBreadcrumb__WEBPACK_IMPORTED_MODULE_1__["ItemBreadcrumb"]("Editar", "/mantimentos/editar/" + this.route.snapshot.params.id));
        }
        this.setFormControl();
        this.onUnityChange({ value: 'kg' });
        if (this.route.snapshot.params.id != null) {
            this.loading = true;
            this.groceriesService.find(this.route.snapshot.params.id).then(function (response) {
                if (response != null) {
                    _this.grocerie = response;
                    console.log(_this.grocerie);
                    _this.setFormControl();
                    _this.loading = false;
                }
            });
        }
    };
    /**
     * @description intialize form controls
     */
    GroceriesMaintenanceComponent.prototype.setFormControl = function () {
        var _this = this;
        this.userform = this.fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grocerie.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)
            ])),
            'unitOfMeasurement': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grocerie.unitOfMeasurement, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'quantity': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grocerie.quantity),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grocerie.price, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(""),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            'spoils': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grocerie.spoils, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'expirationDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grocerie.expirationDate),
            'dateFactory': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grocerie.dateFactory, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.userform.valueChanges.forEach(function () {
            _this.isUserFormValid = _this.userform.valid;
        });
        this.isUserFormValid = this.userform.valid;
    };
    /**
     * @description return to prev page
     */
    GroceriesMaintenanceComponent.prototype.cancel = function () {
        this.router.navigate(['/mantimentos']);
    };
    /**
     *
     * @param grocerie
     * @description save or update grocerie and redirect page
     */
    GroceriesMaintenanceComponent.prototype.onSubmit = function (grocerie) {
        if (this.userform.valid) {
            if (this.route.snapshot.params.id == null) {
                this.groceriesService.add(grocerie);
            }
            else {
                this.groceriesService.edit(grocerie, this.route.snapshot.params.id);
            }
            this.router.navigate(['/mantimentos']);
        }
    };
    /**
     *
     * @param $event
     * @description set mask of quantity and addon of quantity when um's field change
     */
    GroceriesMaintenanceComponent.prototype.onUnityChange = function ($event) {
        if ($event.value != null) {
            this.um = $event.value.toLowerCase();
            switch (this.um) {
                case 'kg':
                case 'lt':
                    this.quantityMask = { prefix: '', thousands: '.', decimal: ',', precision: 3 };
                    break;
                default:
                    this.quantityMask = { prefix: '', thousands: '.', precision: 0 };
            }
        }
    };
    /**
     *
     * @param grocerie
     * @description when spoil's field or date change, make expiration date field required and set max data factory field
     */
    GroceriesMaintenanceComponent.prototype.onSpoilsDateChange = function (grocerie) {
        if (grocerie.spoils) {
            this.userform.get("expirationDate").setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        }
        else {
            this.userform.get("expirationDate").clearValidators();
        }
        this.userform.get("expirationDate").updateValueAndValidity();
        if (grocerie.spoils != null
            && grocerie.expirationDate != null) {
            this.expired = grocerie.spoils && grocerie.expirationDate.getTime() < new Date().getTime();
        }
        if (grocerie.expirationDate != null) {
            this.maxDateFactory = grocerie.expirationDate;
        }
    };
    GroceriesMaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groceries-maintenance',
            template: __webpack_require__(/*! ./groceries-maintenance.component.html */ "./src/app/pages/groceries-maintenance/groceries-maintenance.component.html"),
            styles: [__webpack_require__(/*! ./groceries-maintenance.component.css */ "./src/app/pages/groceries-maintenance/groceries-maintenance.component.css")],
            providers: [src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_2__["GroceriesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]]
        }),
        __metadata("design:paramtypes", [src_app_services_groceries_service__WEBPACK_IMPORTED_MODULE_2__["GroceriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], GroceriesMaintenanceComponent);
    return GroceriesMaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/pipes/spoils.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/spoils.pipe.ts ***!
  \**************************************/
/*! exports provided: SpoilsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpoilsPipe", function() { return SpoilsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @author Bruno Meurer
 * @description pipe to change boolean visualization
 */
var SpoilsPipe = /** @class */ (function () {
    function SpoilsPipe() {
    }
    SpoilsPipe.prototype.transform = function (value) {
        return value ? 'Sim' : 'Não';
    };
    SpoilsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'spoils' })
    ], SpoilsPipe);
    return SpoilsPipe;
}());



/***/ }),

/***/ "./src/app/services/groceries.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/groceries.service.ts ***!
  \***********************************************/
/*! exports provided: GroceriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesService", function() { return GroceriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @author Bruno Meurer
 * @description groceries service
 */
var GroceriesService = /** @class */ (function () {
    function GroceriesService() {
        /**
         * @description key of 'bucket' on local storage
         */
        this.key = "GROCERIES";
    }
    /**
     *
     * @param grocerie
     * @description add grocerie to list
     */
    GroceriesService.prototype.add = function (grocerie) {
        if (grocerie == null) {
            return;
        }
        var list = this.get();
        list.push(grocerie);
        this.set(list);
    };
    /**
     *
     * @param grocerie
     * @param index
     * @description edit grocerie and set list
     */
    GroceriesService.prototype.edit = function (grocerie, index) {
        if (grocerie == null) {
            return;
        }
        var list = this.get();
        list[index] = grocerie;
        this.set(list);
    };
    /**
     *
     * @param index
     * @description find grocerie by index
     * @returns Promise<Grocerie>
     */
    GroceriesService.prototype.find = function (index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var list = _this.get();
                // local storage do not save objects, so i'm convert again
                if (list[index] != null) {
                    list[index].expirationDate = new Date(list[index].expirationDate);
                    list[index].dateFactory = new Date(list[index].dateFactory);
                }
                resolve(list[index]);
            }, 1000); // deplay simulation
        });
    };
    /**
     *
     * @param index
     * @description delete grocerie and set list
     * @returns Promise<boolean>
     */
    GroceriesService.prototype.delete = function (index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var list = _this.get();
                list.splice(index, 1);
                _this.set(list);
                resolve(true);
            }, 1000); // delay simulation
        });
    };
    /**
     *
     * @param data
     * @description set data on local storage
     */
    GroceriesService.prototype.set = function (data) {
        try {
            localStorage.setItem(this.key, JSON.stringify(data));
        }
        catch (e) {
            console.error('Error saving to localStorage', e);
        }
    };
    /**
     * @description get list on local storage
     * @returns Array<Grocerie>
     */
    GroceriesService.prototype.get = function () {
        try {
            var array = JSON.parse(localStorage.getItem(this.key));
            return array != null ? array : [];
        }
        catch (e) {
            console.error('Error getting data from localStorage', e);
            return [];
        }
    };
    /**
     * @description list saved groceries
     * @returns Promise<Array<Grocerie>>
     */
    GroceriesService.prototype.list = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    resolve(JSON.parse(localStorage.getItem(_this.key)));
                }
                catch (e) { // if not exist list
                    resolve([]);
                }
            }, 1000); // delay simulation
        });
    };
    /**
     * @de
     */
    GroceriesService.prototype.clean = function () {
        this.set([]);
    };
    GroceriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], GroceriesService);
    return GroceriesService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bruno\pessoais\frontend-groceries\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map