import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  private isStatusValid(status: string): boolean {
    return status in TaskStatus;
  }

  // transform(value: string, metadata: ArgumentMetadata): string {
  transform(value: string): string {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status.`);
    }
    return value;
  }
}
