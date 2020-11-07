import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit.entity';


@Controller('/fruits')
export class FruitController {

  constructor(private fruitService: FruitService) { }

  @Get()
  async findAll(): Promise<Fruit[]> {
    return this.fruitService.findAll();
  }

  @Post()
  async create(@Body() fruit: Fruit,@Res() res: Response){
    res.status(HttpStatus.CREATED).send()
    this.fruitService.create(fruit);
  }
}