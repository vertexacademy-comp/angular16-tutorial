import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit{


  constructor(private productService: ProductServiceService){}

  products:any



  ngOnInit(): void {
    this.getProducts()
    //this.getSingleProduct()
  }

getProducts(){

  this.productService.getProductsData().subscribe(
    (resp)=>{
      this.products = resp
    },
    (err)=>{
      console.log(err)

    }
  )

}


getSingleProduct(){
  this.productService.getSingleProduct(1).subscribe(
    (resp)=>{
      console.log(resp)
    },
    (err)=>{
      console.log(err)

    }
  )
}

}
