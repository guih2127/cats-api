import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ForbiddenException,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cats as CatModel } from '@prisma/client';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(
    @Body() catData: { name: string; breed: string; age: string },
  ): Promise<CatModel> {
    return this.catsService.create(catData);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<CatModel> {
    return this.catsService.findOne({ id: id });
  }
}
