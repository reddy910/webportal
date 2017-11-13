import{NgModule} from "@angular/core";
import{ ProductListComponent} from "./product-list.component";
import{ RouterModule} from "@angular/router";
import {  } from "module";
@NgModule({
    imports:[
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
        ]),
    ],
    declarations:[
ProductListComponent
    ],
    providers:[

    ]
})
export class ProductModule{

}