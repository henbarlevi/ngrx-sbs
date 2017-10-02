import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService} from './auth.service';
@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  providers:[AuthService],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
