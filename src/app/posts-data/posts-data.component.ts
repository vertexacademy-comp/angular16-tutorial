import { Component, OnInit } from '@angular/core';
import { PostsDataService } from '../Service/posts-data-service.service';
import { MESSAGE } from '../CONSTANTS';


@Component({
  selector: 'app-posts-data',
  templateUrl: './posts-data.component.html',
  styleUrls: ['./posts-data.component.css']
})
export class PostsDataComponent implements OnInit{
postData:any
userId:any
constructor(private postService: PostsDataService){}
  
formSubmitted:boolean = false
roles:any

color:string = 'blue'
ngOnInit(){
  this.getPostData()
  this.roles = MESSAGE.ROLES.STORE_ADMIN
  }



getPostData(){
 this.postService.getPostData().subscribe({
  next:(response:any)=>{
  this.userId = response[0].userId
  let data:any = []
response.forEach((element: any) => {
  if (element.id > 10 && element.id <= 12) {
    data.push(element);
  }
});

this.postData = data;
  },

  error:(error)=>{
    console.log(error)
  }
 })
}


submit(){
  this.formSubmitted = !this.formSubmitted
}

}
