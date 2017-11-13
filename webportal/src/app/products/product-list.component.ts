import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product"

@Component({
    selector: "pm-products",
    templateUrl:"./product-list.component.html",
    styleUrls:["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
   
     products: IProduct[]=[
    {
    "productId":2,
    "productName":"Garden Cart",
    "productCode":"GDN-0023",
    "releaseDate":"March 18 2016",
    "description":"15 gallon capacity gas",
    "price":32.99,
    "starRating":4.2,
    "imageUrl":"http://openclipart.org/image/300"

     },
     {
        "productId":5,
        "productName":"Hammer",
        "productCode":"TBX-0048",
        "releaseDate":"May 21, 2016",
        "description":"curved claw steel",
        "price":8.9,
        "starRating":4.8,
        "imageUrl":"http://openclipart.org/image/300"

     }
    ]
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
   

    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = "cart";
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message:string):void{
this.pageTitle ="ProductList:"+message;
    }
    toggleImage():void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        console.log("In OnInit");
    }
}
