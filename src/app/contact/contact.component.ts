import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostsDataService } from '../Service/posts-data-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit{
  

  @Input() contact:string=''
  @Input() title:string=''

  @Output() childContactData = new EventEmitter<any>(); 

  name:any

constructor(private router:Router, private postService: PostsDataService){}

  ngOnInit() {
   this.childContactData.emit(this.title)

   //this.name = this.postService.getNameSubject()
    this.postService.namesubject$.subscribe({
      next:(resp)=>{
        this.name = resp
      }
    })
  }

  saveButtonClick(){
    this.childContactData.emit("santosh123")
  }
  
  // ngOnInit(){
  //   this.title = "OK"
  // }

  sendData(data:any){
    this.router.navigate([`/home/posts/${data}`])
  }

  setnewName(){
    this.postService.setNameSubject(this.name);
  }
}
