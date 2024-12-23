import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
  registrationForm!: FormArray;
  userForm!: FormGroup;

  constructor(private fb:FormBuilder){}
 
 
 
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age:['', Validators.required],
      mobile:['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', Validators.required],
      message: ['TEst Message', Validators.required]

    })
  }

  submitForm(){
    console.log(this.userForm.value)
    console.log(this.userForm.controls)
    this.userForm.reset()
  }
}
