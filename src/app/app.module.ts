import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Required for routing
import { AppRoutingModule } from './app-routing.module';  // Routing module

// Non-standalone components
import { AppComponent } from './app.component';

// Standalone components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent  // Non-standalone component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,  // For router-outlet
    AppRoutingModule,
    HeaderComponent,  // Standalone component imported
    FooterComponent  // Standalone component imported
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // To allow custom elements like standalone components
  bootstrap: [AppComponent]
})
export class AppModule { }
