import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ngOnInit(): void {
  //   this.getData(event)
  // }
  receiveData:string | undefined
  title = 'angular-tuts';

  onevent($event:any) {
    alert($event)
    this.receiveData = $event;
    console.log(this.receiveData)
  }
}
