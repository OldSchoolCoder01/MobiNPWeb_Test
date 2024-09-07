import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Required for routing
import { AppRoutingModule } from './app-routing.module';  // Routing module

// Non-standalone components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// Standalone components
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,  // Non-standalone component
    HeaderComponent  // Non-standalone component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,  // For router-outlet
    AppRoutingModule,
    FooterComponent  // Standalone component imported
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // To allow custom elements like standalone components
  bootstrap: [AppComponent]
})
export class AppModule { }
