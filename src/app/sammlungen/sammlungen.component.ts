import { Component } from '@angular/core';
import { SammlungComponent } from "../sammlung/sammlung.component";

@Component({
  selector: 'app-sammlungen',
  imports: [SammlungComponent],
  templateUrl: './sammlungen.component.html',
  styleUrl: './sammlungen.component.css'
})
export class SammlungenComponent {
  sammlungen:string[] = [];

  constructor() {
    this.sammlungen.push("Sammlung1");
    this.sammlungen.push("Sammlung2");
    this.sammlungen.push("Sammlung3");
  }
}
