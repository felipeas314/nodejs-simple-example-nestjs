import { Injectable } from '@nestjs/common';
import { Fruit } from './fruit.interface';

@Injectable()
export class FruitService {
  private fruits: Fruit[] = [];
  
  create(fruit: Fruit){
    this.fruits.push(fruit);
  }

  findAll(): Fruit[] {
    return this.fruits;
  }
}