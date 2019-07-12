import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
//import { MODES, SharedState,SHARED_STATE  } from "./sharedState.model";
//import { Observable } from "rxjs/Observable";
//import "rxjs/add/operator/filter";
//import "rxjs/add/operator/map";
//import "rxjs/add/operator/distinctUntilChanged";
//import "rxjs/add/operator/skipWhile";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: "paForm",
    //moduleId: module.id,
    templateUrl: "../../form.component.html",
    styleUrls: ["../../form.component.css"]
})
export class FormComponent {
    product: Product = new Product();
    constructor(private model: Model, activeRoute: ActivatedRoute,private router: Router) {
        activeRoute.params.subscribe(params => {
            this.editing = params["mode"] == "edit";
            let id = params["id"];
            if (id != null) {
                Object.assign(this.product, model.getProduct(id) || new Product());
            }
        })    }

    editing: boolean = false;
    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            //this.product = new Product();
            //form.reset();
            this.router.navigateByUrl("/");
        }
    }
    resetForm() {
        this.product = new Product();
    }

}