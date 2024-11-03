import { ApiProperty } from '@nestjs/swagger';
import { abbreviationDecorator, nameDecorator } from './update.decorator';

export class UpdateDemoDto {
  @nameDecorator()
  name: string;

  @abbreviationDecorator()
  abbreviation: string;
}