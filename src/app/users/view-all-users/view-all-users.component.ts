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
singleUserData:any
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
    this.singleUserData = user
    
  }
  onUserDataChangeEvent(event:any){
    if(event){
      console.log(event)
    }
  }
  
}
