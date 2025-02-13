import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnChanges {

  @Input() userData :any
  @Output() newUserData = new EventEmitter<any>(); 
  userForm!: FormGroup;

constructor(private userService: UserServiceService,private fb:FormBuilder){
     this.userForm = this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          age:['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
        })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userForm.controls['firstName'].patchValue(this.userData?.firstName);
    this.userForm.controls['lastName'].patchValue(this.userData?.lastName);
    this.userForm.controls['email'].patchValue(this.userData?.email);
    this.userForm.controls['age'].patchValue(this.userData?.age);
  }

  submitForm(){
    let formData = this.userForm.getRawValue()
    this.userService.updateSingleUserData(this.userData.id, formData).subscribe({
      next:(resp)=>{
        if(resp){
          alert("Data Saved Successfully")
          this.newUserData.emit(this.userForm.value)
          this.userForm.reset()

        }

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
