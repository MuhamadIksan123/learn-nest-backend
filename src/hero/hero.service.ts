import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';

@Injectable()
export class HeroService {
  private readonly heroes: Hero[] = [
    {
      id: 1,
      nama: 'Aurora',
      type: 'Mage',
      gambar: 'aurora.jpg',
    },
    {
      id: 2,
      nama: 'Zilong',
      type: 'Fighter',
      gambar: 'zilong.jpg',
    },
    {
      id: 3,
      nama: 'Johnson',
      type: 'Tank',
      gambar: 'jhonson.jpg',
    },
  ];

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findAll(): Hero[] {
    return this.heroes;
  }
}
