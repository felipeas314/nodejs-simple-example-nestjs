import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { FruitService } from './fruit.service';
import { FruitDto } from './fruit.dto';
import { Fruit } from './fruit.interface';

@Controller('/fruits')
export class FruitController {

  constructor(private fruitService: FruitService) { }

  @Get()
  async findAll(): Promise<Fruit[]> {
    return this.fruitService.findAll();
  }

  @Post()
  async create(@Body() fruitDto: FruitDto,@Res() res: Response){
    res.status(HttpStatus.CREATED).send()
    this.fruitService.create(fruitDto);
  }
}