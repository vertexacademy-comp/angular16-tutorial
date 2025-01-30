import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  
  baseUrl = "https://fakestoreapi.com/products/"
    getProductsData(){
      return this.http.get(this.baseUrl)  
    }
    

    getSingleProduct(id:any){
      return this.http.get(this.baseUrl+`${id}`)
    }
}
