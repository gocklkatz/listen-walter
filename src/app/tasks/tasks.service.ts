import { Injectable } from '@angular/core';

import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Brot',
      summary: 'Brot kaufen',
      dueDate: '2025-02-16',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Joghurt',
      summary: 'Joghurt kaufen',
      dueDate: '2025-02-16',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Milch',
      summary: 'Milch kaufen',
      dueDate: '2025-02-16',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Luff Nasenspray',
      summary: 'Mindestens 2 Packungen',
      dueDate: '2025-02-16',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Rote/Gruene',
      summary: '1x Morgentabletten 1x Abendtabletten Papa',
      dueDate: '2025-02-16',
    },
    {
      id: 't6',
      userId: 'u3',
      title: 'Pickerl bezahlen',
      summary: '',
      dueDate: '2025-02-16',
    },
  ];

  constructor() {
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}
