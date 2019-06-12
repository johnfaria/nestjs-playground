import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'test1',
      desciption: 'test1',
      done: true,
    },
    {
      id: 2,
      title: 'test2',
      desciption: 'test2',
      done: true,
    },
    {
      id: 3,
      title: 'test3',
      desciption: 'test3',
      done: true,
    },
  ];

  getTask(id: number): Task {
    return this.tasks.find(task => task.id === id)
  }

  getTasks(): Task[] {
    return this.tasks
  }
}
