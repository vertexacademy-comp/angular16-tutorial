import { Component, OnInit } from '@angular/core';
import { PostsDataService } from '../Service/posts-data-service.service';
import { MESSAGE } from '../CONSTANTS';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts-data',
  templateUrl: './posts-data.component.html',
  styleUrls: ['./posts-data.component.css']
})
export class PostsDataComponent implements OnInit{
postData:any
userId:any
routeId:number=0
constructor(private postService: PostsDataService, private route: ActivatedRoute){}
  
formSubmitted:boolean = false
roles:any
color:string = 'blue';



ngOnInit(){
  this.getPostData()
  this.roles = MESSAGE.ROLES.STORE_ADMIN
  console.log(this.route.snapshot)
  this.routeId =this.route.snapshot.params['id']
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
