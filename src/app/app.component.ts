import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DUMMY_LIST } from './dummy-lists';
import { TasksComponent } from "./tasks/tasks.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, ListComponent, TasksComponent, FormsModule]
})
export class AppComponent {
  lists = DUMMY_LIST;
  selectedListId?: string;
  newListName = '';

  get selectedList() {
    return this.lists.find((list) => list.id === this.selectedListId);
  }

  onSelectList(id: string) {
    this.selectedListId = id;
  }

  onAddList() {
    if (this.newListName) {
      this.lists.push({
        id: String(this.lists.length + 1),
        name: this.newListName
      });
      this.newListName = '';
    }
  }
}
