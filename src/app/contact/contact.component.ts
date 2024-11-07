import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit{
  

  @Input() contact:string=''
  @Input() title:string=''

  @Output() childContactData = new EventEmitter<any>(); 

  ngOnInit() {
   // this.childContactData.emit(this.title)
  }

  saveButtonClick(){
    this.childContactData.emit("santosh123")
  }
  
  // ngOnInit(){
  //   this.title = 
  // }

}
