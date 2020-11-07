import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fruit } from './fruit.entity';

@Injectable()
export class FruitService {
  
  constructor(@InjectRepository(Fruit) private fruitRepository: Repository<Fruit>){

  }

  create(fruit: Fruit){
    this.fruitRepository.save(fruit);
  }

  findAll(): Promise<Fruit[]> {
    return this.fruitRepository.find();
  }
}