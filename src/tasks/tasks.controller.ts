import { Controller, Get, Post, Put, Delete, Body, Req } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get() // /tasks
  getTasks(): string {
    return `getTasks`;
  }

  @Post()
  createTask(@Body() task): string {
    console.log(task);
    return 'Creating a task';
  }

  @Put()
  updateTask(): string {
    return 'Edit a task';
  }

  @Delete()
  deleteTask(): string {
    return 'Delete a task';
  }
}
