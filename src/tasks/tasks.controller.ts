import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import { TaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  @HttpCode(200)
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id): Task {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: TaskDTO): { hello: string } {
    console.log(task);
    return { hello: 'world' };
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
