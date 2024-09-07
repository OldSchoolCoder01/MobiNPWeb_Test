echo import { BrowserModule } from '@angular/platform-browser'; > app.module.ts
echo import { NgModule } from '@angular/core'; >> app.module.ts
echo import { HttpClientModule } from '@angular/common/http'; >> app.module.ts
echo import { FormsModule } from '@angular/forms'; >> app.module.ts
echo import { AppRoutingModule } from './app-routing.module'; >> app.module.ts
echo import { AppComponent } from './app.component'; >> app.module.ts
echo import { HeaderComponent } from './components/header/header.component'; >> app.module.ts
echo import { FooterComponent } from './components/footer/footer.component'; >> app.module.ts
echo import { NotaryComponent } from './components/notary/notary.component'; >> app.module.ts
echo import { DashboardComponent } from './pages/dashboard/dashboard.component'; >> app.module.ts
echo import { LoginComponent } from './pages/login/login.component'; >> app.module.ts
echo import { SignupComponent } from './pages/signup/signup.component'; >> app.module.ts
echo import { PaymentComponent } from './pages/payment/payment.component'; >> app.module.ts
echo import { AuthService } from './services/auth.service'; >> app.module.ts
echo import { PaymentService } from './services/payment.service'; >> app.module.ts
echo @NgModule({ >> app.module.ts
echo declarations: [ >> app.module.ts
echo AppComponent, >> app.module.ts
echo HeaderComponent, >> app.module.ts
echo FooterComponent, >> app.module.ts
echo NotaryComponent, >> app.module.ts
echo DashboardComponent, >> app.module.ts
echo LoginComponent, >> app.module.ts
echo SignupComponent, >> app.module.ts
echo PaymentComponent >> app.module.ts
echo ], >> app.module.ts
echo imports: [ >> app.module.ts
echo BrowserModule, >> app.module.ts
echo HttpClientModule, >> app.module.ts
echo FormsModule, >> app.module.ts
echo AppRoutingModule >> app.module.ts
echo ], >> app.module.ts
echo providers: [AuthService, PaymentService], >> app.module.ts
echo bootstrap: [AppComponent] >> app.module.ts
echo }) >> app.module.ts
echo export class AppModule { } >> app.module.ts
