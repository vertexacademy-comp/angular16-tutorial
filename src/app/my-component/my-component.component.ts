import { Component, Input, OnInit } from '@angular/core';
import { PostsDataService } from '../Service/posts-data-service.service';
import { Observable, of } from 'rxjs';
import { GetAgePipe } from '../get-age.pipe';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers:[GetAgePipe]
})
export class MyComponent implements OnInit{

  postData:any

  constructor(private postService: PostsDataService, private agePipe: GetAgePipe){}
  @Input() title:string=''

//title:string = "This is our One way Data binding";
age:any=10
CopyText:any="Prashant"
testData:string=''
contactData:string="This is test"
price:number = 0.1
today = new Date()
mywords:string= "hello world"
myObj = {
  name:"prashant",
  age:20,
  city:"pune"
}


myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];

myObservable$: Observable<number> = of(42);
myPromise$: Promise<string> = Promise.resolve("hellow wordl")


dob= '2000-03-10' 

newDob = this.agePipe.transform(this.dob)
name:any
myevent(data:any){
 this.testData = data+"testsing"
}

ngOnInit(): void {
  this.contactData = "Prashant"
  this.getData()
  this.postService.namesubject$.subscribe({
    next:(resp)=>{
     this.name = resp
    }
  })
}

getData(){
  this.postService.getPostData().subscribe({
    next:(res)=>{
      this.postData = res
      console.log(this.postData)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

}



// Data Binding

// one way data binding
 //interpolation   {{}}


// two data binding