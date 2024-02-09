import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  // la propiedad privada tasks solo se usa para
  // simular una base de datos a fines prácticos
  private tasks: Task[] = [
    {
      id: '1',
      title: 'primera tarea',
      description: 'una tarea jaj',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    return task;
  }
  updateTask() {}
  deleteTask() {}
}
