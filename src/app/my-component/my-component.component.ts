import { Component, Input, OnInit } from '@angular/core';
import { PostsDataService } from '../Service/posts-data-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit{

  postData:any

  constructor(private postService: PostsDataService){}
  @Input() title:string=''

//title:string = "This is our One way Data binding";
age:any=10
CopyText:any="Prashant"
testData:string=''
contactData:string="This is test"

myevent(data:any){
 this.testData = data+"testsing"
}

ngOnInit(): void {
  this.contactData = "Prashant"
  this.getData()
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