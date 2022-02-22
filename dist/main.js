"use strict";
(self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 8415);
/* harmony import */ var _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-alerts/product-alerts.component */ 6431);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ 776);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping/shipping.component */ 7306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot([
                { path: '', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent },
                { path: 'products/:productId', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailsComponent },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__.CartComponent },
                { path: 'shipping', component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__.ShippingComponent },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent,
        _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent,
        _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_3__.ProductAlertsComponent,
        _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailsComponent,
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__.CartComponent,
        _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__.ShippingComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 3705:
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class CartService {
    constructor(http) {
        this.http = http;
        this.items = [];
    }
    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart.service */ 3705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, item_r1.price));
} }
class CartComponent {
    constructor(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }
    onSubmit() {
        // Process checkout data here
        this.items = this.cartService.clearCart();
        console.warn('Votre commande est validé', this.checkoutForm.value);
        this.checkoutForm.reset();
    }
    ;
    ngOnInit() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 17, vars: 2, consts: [["routerLink", "/shipping"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], ["for", "address"], ["id", "address", "type", "text", "formControlName", "addresse"], ["type", "submit", 1, "button"], [1, "cart-item"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Panier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Frais de port");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartComponent_div_5_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CartComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Acheter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6431:
/*!************************************************************!*\
  !*** ./src/app/product-alerts/product-alerts.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAlertsComponent": () => (/* binding */ ProductAlertsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function ProductAlertsComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAlertsComponent_p_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.notify.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M'avertir des disponibilit\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductAlertsComponent {
    constructor() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
}
ProductAlertsComponent.ɵfac = function ProductAlertsComponent_Factory(t) { return new (t || ProductAlertsComponent)(); };
ProductAlertsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductAlertsComponent, selectors: [["app-product-alerts"]], inputs: { product: "product" }, outputs: { notify: "notify" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["type", "button", 3, "click"]], template: function ProductAlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductAlertsComponent_p_0_Template, 3, 0, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product && ctx.product.price > 700);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWFsZXJ0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 776:
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products */ 3351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function ProductDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.addToCart(ctx_r1.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Acheter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, ctx_r0.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.description);
} }
class ProductDetailsComponent {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        window.alert('Votre produit est ajouté au panier');
    }
    ngOnInit() {
        // First get the product id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));
        //Find the product that correspond with the id provided in route.
        this.product = _products__WEBPACK_IMPORTED_MODULE_0__.products.find((product) => product.id === productIdFromRoute);
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService)); };
ProductDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 3, vars: 1, consts: [[4, "ngIf"], ["type", "button", 3, "click"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "D\u00E9tail du produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductDetailsComponent_div_2_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8415:
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products */ 3351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-alerts/product-alerts.component */ 6431);





function ProductListComponent_div_2_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.description);
} }
const _c0 = function (a1) { return ["/products", a1]; };
function ProductListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductListComponent_div_2_p_4_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductListComponent_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.share(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Partager");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-product-alerts", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("notify", function ProductListComponent_div_2_Template_app_product_alerts_notify_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onNotify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", product_r1.name + " details")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, product_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r1);
} }
class ProductListComponent {
    constructor() {
        this.products = _products__WEBPACK_IMPORTED_MODULE_0__.products;
    }
    share() {
        window.alert('Le produit est bien partagé!');
    }
    onNotify() {
        window.alert('Vous serez notifié quand le produit sera disponible');
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "title", "routerLink"], [4, "ngIf"], ["type", "button", 3, "click"], [3, "product", "notify"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "T\u00E9l\u00E9phones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductListComponent_div_2_Template, 8, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_1__.ProductAlertsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3351:
/*!*****************************!*\
  !*** ./src/app/products.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "products": () => (/* binding */ products)
/* harmony export */ });
const products = [
    {
        id: 1,
        name: 'Iphone 13 Pro',
        price: 1159,
        description: 'Un système photo nettement plus puissant. Un écran si réactif qu’il renouvelle vos sensations à chaque interaction. La puce de smartphone la plus rapide au monde. Une résistance exceptionnelle. Et un gain d’autonomie spectaculaire.',
    },
    {
        id: 2,
        name: 'Iphone 12',
        price: 689,
        description: 'Une puce surpuissante. La vitesse 5G. Un double appareil photo de pointe. Une face avant Ceramic Shield plus résistante que le verre de n’importe quel smart­phone. Et un superbe écran OLED lumineux. L’iPhone 12 a tout, en deux tailles parfaites.',
    },
    {
        id: 3,
        name: 'Iphone SE',
        price: 489,
        description: 'Notre puissante puce A13 Bionic rencontre l’un des formats d’iPhone les plus populaires. Voici l’iPhone SE. Tout ce que vous attendiez, à notre prix le plus abordable',
    }
];


/***/ }),

/***/ 7306:
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingComponent": () => (/* binding */ ShippingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart.service */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function ShippingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const shipping_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](shipping_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, shipping_r1.price));
  }
}

class ShippingComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {}

}

ShippingComponent.ɵfac = function ShippingComponent_Factory(t) {
  return new (t || ShippingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};

ShippingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ShippingComponent,
  selectors: [["app-shipping"]],
  decls: 4,
  vars: 3,
  consts: [["class", "shipping-item", 4, "ngFor", "ngForOf"], [1, "shipping-item"]],
  template: function ShippingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Frais d'exp\u00E9dition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShippingComponent_div_2_Template, 6, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.shippingCosts));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwcGluZy5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 4097:
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return ["/"]; };
class TopBarComponent {
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 7, vars: 2, consts: [[3, "routerLink"], ["routerLink", "/cart", 1, "button", "fancy-button"], [1, "material-icons"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ma boutique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mon panier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map