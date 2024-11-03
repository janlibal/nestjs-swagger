import { abbreviationDecorator, idDecorator, nameDecorator } from './entity.decorator';

export class Demo {
  @idDecorator()
  id: number;

  @nameDecorator()
  name: string;

  @abbreviationDecorator()
  abbreviation: string;
}