import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit{
allUserData:any
userForm!: FormGroup;

  constructor(private userService: UserServiceService,private fb:FormBuilder){
     this.userForm = this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          age:['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
        })
  }

 
  ngOnInit(): void {
    this.getUserData()
  }


  getUserData(){
      this.userService.getUsersData().subscribe({
        next:(resp)=>{
          this.allUserData = resp
        },
        error:(err)=>{
          console.log(err)
        }

      })
  }

  editUser(user:any){
    this.userForm.controls['firstName'].patchValue(user?.firstName);
    this.userForm.controls['lastName'].patchValue(user?.lastName);
    this.userForm.controls['email'].patchValue(user?.email);
    this.userForm.controls['age'].patchValue(user?.age);
  }

  submitForm(){
    let formData = this.userForm.getRawValue()
    console.log(formData)
  }
}
