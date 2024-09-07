import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import Angular modules here if needed

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule]  // Import Angular modules or other standalone components here
})
export class FooterComponent { }
