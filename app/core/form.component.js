"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const product_model_1 = require("../model/product.model");
const repository_model_1 = require("../model/repository.model");
//import { MODES, SharedState,SHARED_STATE  } from "./sharedState.model";
//import { Observable } from "rxjs/Observable";
//import "rxjs/add/operator/filter";
//import "rxjs/add/operator/map";
//import "rxjs/add/operator/distinctUntilChanged";
//import "rxjs/add/operator/skipWhile";
const router_1 = require("@angular/router");
let FormComponent = class FormComponent {
    constructor(model, activeRoute, router) {
        this.model = model;
        this.router = router;
        this.product = new product_model_1.Product();
        this.editing = false;
        activeRoute.params.subscribe(params => {
            this.editing = params["mode"] == "edit";
            let id = params["id"];
            if (id != null) {
                Object.assign(this.product, model.getProduct(id) || new product_model_1.Product());
            }
        });
    }
    submitForm(form) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            //this.product = new Product();
            //form.reset();
            this.router.navigateByUrl("/");
        }
    }
    resetForm() {
        this.product = new product_model_1.Product();
    }
};
FormComponent = __decorate([
    core_1.Component({
        selector: "paForm",
        //moduleId: module.id,
        templateUrl: "../../form.component.html",
        styleUrls: ["../../form.component.css"]
    }), 
    __metadata('design:paramtypes', [repository_model_1.Model, router_1.ActivatedRoute, router_1.Router])
], FormComponent);
exports.FormComponent = FormComponent;
