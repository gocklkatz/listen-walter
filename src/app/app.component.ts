import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SammlungenComponent } from "./sammlungen/sammlungen.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SammlungenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
