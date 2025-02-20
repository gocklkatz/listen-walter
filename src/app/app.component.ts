import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ListsComponent } from './lists/lists.component';
import { DUMMY_LIST } from './dummy-lists';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, ListsComponent, TasksComponent]
})
export class AppComponent {
  lists = DUMMY_LIST;
  selectedListId?: string;

  get selectedList() {
    return this.lists.find((list) => list.id === this.selectedListId);
  }

}
