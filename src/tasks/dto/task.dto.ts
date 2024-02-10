// DTO se usa en nestJS para transportar
// objetos desde el cliente al servidor

import { TaskStatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

// significa Data Transfer Object
export class CreateTaskDTO {
  @IsString() // valida que el 'title' sea un string
  @IsNotEmpty() // valida que 'title' no sea un string vacío
  @MinLength(3) // se asegura que tenga al menos 3 caracteres
  title: string;

  @IsString()
  description: string;
}

export class UpdateTaskDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRES, TaskStatus.PENDING])
  status?: TaskStatus;
}
