import { TaskStatus } from '../task.model';
import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  // @IsIn(Object.keys(TaskStatus))
  // Question: how to case-insensitive?
  @IsEnum(TaskStatus, {
    message:
      `"$value" is an invalid status. ` +
      `The allowed values are: ${Object.keys(TaskStatus)}`,
  })
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
