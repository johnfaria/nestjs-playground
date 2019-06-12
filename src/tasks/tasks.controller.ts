import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): TaskDTO {
    return { name: 'run', description: 'typescrpt', done: true };
  }

  @Post()
  createTask(@Body() task: TaskDTO): string {
    console.log(task);
    return 'Creating a task';
  }

  @Put(':id')
  updateTask(@Body() task: TaskDTO, @Param('id') id): string {
    return 'Edit a task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    return 'Delete a task with id:' + id;
  }
}
