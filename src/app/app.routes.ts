import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
//import { SomeComponent } from './src/app/components/some/some.component'; // Import relevant components

export const routes: Routes = [
 // { path: '', component: SomeComponent }, // Define routes
  { path: 'header', component: FooterComponent },
  { path: 'footer', component: FooterComponent },
  // Add more routes as needed
];
