import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
  registrationForm!: FormArray;
  userForm!: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age:['', Validators.required],
      mobile:['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', Validators.required],
      message: ['TEst Message', Validators.required],
      passengers: this.fb.array([])
    })
  }
 

  ngOnInit(): void {
  }

  get passengers() :FormArray{
    return this.userForm.get("passengers") as FormArray
  }


  newPassengers():FormGroup{
    return this.fb.group({
      passenger_name:'',
      passenger_age:'',
      passenger_gender:'',
    })
  }

addPassenger(){
  this.passengers.push(this.newPassengers());
}

removePassenger(i:number){
  this.passengers.removeAt(i);
}

  submitForm(){
    console.log(this.userForm.value)
    //console.log(this.userForm.controls)
    this.userForm.reset()
  }
}
