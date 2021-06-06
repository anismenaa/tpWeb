import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-angular';
  student = {name: ''};

  constructor(
    private router: Router,
   ) {}

  onSubmit(loginForm: NgForm){
    console.log(loginForm.form.valid);
    if (loginForm.form.valid) {
      this.router.navigate(['/student/' + encodeURIComponent(loginForm.value.student)])
    }
  }
}
