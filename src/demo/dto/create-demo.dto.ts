import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { abbreviationDecorator, idDecorator, nameDecorator } from './create.decorator';

export class CreateDemoDto {
  @idDecorator()
  id: number;

  @nameDecorator()
  name: string;

  @abbreviationDecorator()
  abbreviation: string;
}