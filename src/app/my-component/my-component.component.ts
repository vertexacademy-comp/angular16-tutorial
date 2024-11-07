import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit{

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
}


}



// Data Binding

// one way data binding
 //interpolation   {{}}


// two data binding