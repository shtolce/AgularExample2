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
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const model_module_1 = require("../model/model.module");
const table_component_1 = require("./table.component");
const form_component_1 = require("./form.component");
const state_pipe_1 = require("./state.pipe");
const message_module_1 = require("../messages/message.module");
//import { MODES } from "./sharedState.model";
const router_1 = require("@angular/router");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, model_module_1.ModelModule, message_module_1.MessageModule,
            router_1.RouterModule],
        declarations: [table_component_1.TableComponent, form_component_1.FormComponent, state_pipe_1.StatePipe],
        exports: [model_module_1.ModelModule, table_component_1.TableComponent, form_component_1.FormComponent],
    }), 
    __metadata('design:paramtypes', [])
], CoreModule);
exports.CoreModule = CoreModule;
