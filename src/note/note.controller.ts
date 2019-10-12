import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { Note } from './note';

const noteExample = {
  id: '32482398472389473298',
  text: 'Hello Lanel!',
  tags: ['shopping', 'luxury'],
  createdAt: new Date('2019-10-11T19:56:46Z'),
  links: [],
};

@Controller('notes')
export class NoteController {
  @Get()
  findAll(): Array<Note> {
    return [noteExample];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id !== '32482398472389473298') {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return noteExample;
  }

  @Post()
  create(@Body() noteDto: any) {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() noteDto) {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}
