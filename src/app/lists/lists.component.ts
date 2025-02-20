import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [ListComponent, FormsModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  @Input() lists: any[] = [];
  @Output() listsChange = new EventEmitter<any[]>();
  @Input() selectedListId?: string;
  @Output() selectedListIdChange = new EventEmitter<string>();
  
  newListName = '';

  get selectedList() {
    return this.lists.find((list) => list.id === this.selectedListId);
  }

  onSelectList(id: string) {
    this.selectedListId = id;
    this.selectedListIdChange.emit(this.selectedListId);
  }

  onAddList() {
    if (this.newListName) {
      this.lists.push({
        id: String(this.lists.length + 1),
        name: this.newListName
      });
      this.newListName = '';
      this.listsChange.emit(this.lists);
    }
  }
}
