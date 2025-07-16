import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor(private userService:UserService){}

  user = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(8)]),
    mob: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    age: new FormControl('', [Validators.required, Validators.min(18),Validators.max(100)]),
    gender:new FormControl('', Validators.required),
    trust1 : new FormControl(''),
    trust2: new FormControl(''),
    role:new FormControl('USER'),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    maritalStatus: new FormControl('', Validators.required)
    
  })

  registerUser(){ 
      console.log(this.user.value)
      this.userService.registerUser(this.user.value).subscribe(res=>{
        if(res == null){
          alert("something went wrong!")
        }else{
             alert(res)
        }   
       })
  
  }
}
