import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DialogResult } from 'src/app/models/dialog-result';
import { AppState } from 'src/app/store';
import { loginUserAction } from 'src/app/store/actions/current-user.actions';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  credentialForm: FormGroup;
  hide = true;

  constructor(private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginUserComponent>) { }

  ngOnInit() {
    this.initializeForm();
    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== DialogResult.CLOSE) {
          this.ngRedux.dispatch(loginUserAction(result));
      }
    });
  }

  get login() {
    return this.credentialForm.get('login') as FormControl;
  }

  get password() {
    return this.credentialForm.get('password') as FormControl;
  }

  private initializeForm() {
    this.credentialForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onCancelClick() {
    this.dialogRef.close(DialogResult.CLOSE);
  }

  getErrorText(controlName: string): string {
    const control = this.credentialForm.get(controlName) as FormControl;
    return this.getErrorMessage(control);
  }

  private getErrorMessage(control: FormControl): string {
    let errorMesage = '';
    if (control.errors) {
      if (control.errors['required']) {
        errorMesage = 'Field is required';
      }
      if (control.errors['email']) {
        errorMesage = 'Incorrect email';
      }
    }
    return errorMesage;
  }

}
