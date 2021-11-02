import { Injectable } from '@nestjs/common';
import { ICat, cats } from 'src/db';

@Injectable()
export class CatsService {
  findCatById(id: number): ICat {
    console.debug(`loading cat ${id}`);
    return cats.find((cat) => cat.id === id);
  }

  allCats(): ICat[] {
    console.debug(`loading all cats`);
    return cats;
  }
}
