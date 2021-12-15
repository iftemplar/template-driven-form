import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private selectDefaultValue = "Advanced";
  private formSent = false;

  onSubmit(formData: NgForm) {
    this.formSent = true;
    console.log(formData.form.value.email);
    console.log(formData.form.value.subscription);
    console.log(formData.form.value.password);
  }
}
