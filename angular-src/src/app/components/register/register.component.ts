import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  email: String;
  username: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Validate Required Fields
    if(!this.validateService.validateRegister(user)){
      // console.log("Please fill in all fields.");
      this.flashMessage.show('Please fill in all fields.', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }  

    // Validate Email field
    if(!this.validateService.validateEmail(user.email)){
      // console.log("Please use a valid email address.");
      this.flashMessage.show('Please use a valid email address.', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }  

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      }
      else {
        this.flashMessage.show('Registration unsucessful.', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
}


}
