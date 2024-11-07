import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {

title:string = "This is our One way Data binding";
age:any=10
CopyText:any="Prashant"
testData:string=''

myevent(data:any){
 this.testData = data+"testsing"
}

}



// Data Binding

// one way data binding
 //interpolation   {{}}


// two data binding