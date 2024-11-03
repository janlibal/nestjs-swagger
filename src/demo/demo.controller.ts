import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Demo } from './entities/demo.entity';
import { createDecorator, deleteDecorator, findAllDecorator, findOneDecorator, updateDecorator } from './decorator/controller.decorator';


@ApiTags('Demo')
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get(':id')
  @findOneDecorator()
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.demoService.findOne(+id);
  }

  @Post()
  @createDecorator()
  create(@Body() createDemoDto: CreateDemoDto) {
    return this.demoService.create(createDemoDto);
  }

  @Get()
  @findAllDecorator()
  findAll() {
    return this.demoService.findAll();
  }

  @Patch(':id')
  @updateDecorator()
  update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return this.demoService.update(+id, updateDemoDto);
  }

  @Delete(':id')
  @deleteDecorator()
  remove(@Param('id') id: string) {
    return this.demoService.remove(+id);
  }
}


