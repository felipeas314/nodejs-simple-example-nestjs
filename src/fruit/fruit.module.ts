import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FruitController } from './fruit.controller';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fruit])],
  controllers:[FruitController],
  providers:[FruitService]
})
export class FruitsModule{}