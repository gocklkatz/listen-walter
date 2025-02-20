import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type List } from './list.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [CardComponent]
})
export class ListComponent {
  @Input({ required: true }) list!: List;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  onSelectList() {
    this.select.emit(this.list.id);
  }
}
