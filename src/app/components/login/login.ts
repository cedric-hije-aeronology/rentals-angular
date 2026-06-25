import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService)
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  login() {
    if (this.form.invalid) return;

    const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo') ?? '/';
    this.authService.login(this.form.getRawValue())
      .subscribe(() => this.router.navigateByUrl(redirectTo));
  }
}
