import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_helpers/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  constructor(private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const passwordRegex = new RegExp(/[a-z0-9]*/, 'gi');
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.email.value, this.password.value).subscribe(
      doc => this.router.navigateByUrl(this.returnUrl || '/'),
      (error: HttpErrorResponse) => {
        const message: string = error.error.message as string;
        const status = error.status;

        if (status === 404 && message === 'User not found') {
          this.email.markAsDirty();
          this.email.setErrors({ emailNotFound: true }, { emitEvent: true });
        }

        if (status === 400 && message === 'Invalid login credentials') {
          this.loginForm.setErrors({ InvalidCredentials: true }, { emitEvent: true });
          this.loginForm.markAsDirty();
        }

        if (status === 400 && message === 'Password Mismatch') {
          this.password.setErrors({ PasswordMismatch: true }, { emitEvent: true });
          this.password.markAsDirty();
        }
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
