import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PostsDataService {


  private nameSubject = new BehaviorSubject<any>(null)
  namesubject$ = this.nameSubject.asObservable()


  constructor(private http:HttpClient) { }


  getPostData(){
    return this.http.get('assets/data.json')  
  }

  // postData(data:any){
  //   return this.http.post('',data)
  // }


  setNameSubject(value:any){
    this.nameSubject.next(value)
  }

  getNameSubject(){
return this.nameSubject.value
  }
}
