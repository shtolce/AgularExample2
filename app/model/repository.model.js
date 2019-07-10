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
const static_datasource_1 = require("./static.datasource");
let Model = class Model {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.locator = (p, id) => p.id == id;
        this.products = new Array();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }
    getProducts() {
        return this.products;
    }
    getProduct(id) {
        return this.products.find(p => this.locator(p, id));
    }
    saveProduct(product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            let index = this.products
                .findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }
    deleteProduct(id) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }
    generateID() {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
};
Model = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [static_datasource_1.StaticDataSource])
], Model);
exports.Model = Model;
