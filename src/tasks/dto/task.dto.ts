// DTO se usa en nestJS para transportar
// objetos desde el cliente al servidor

import { TaskStatus } from '../task.entity';

// significa Data Transfer Object
export class CreateTaskDTO {
  title: string;
  description: string;
}

export class UpdateTaskDTO {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
