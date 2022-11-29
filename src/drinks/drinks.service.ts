import { Inject, Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { Drink } from 'src/common/interfaces/drink.interface';
import { TeasService } from 'src/teas/teas.service';

@Injectable()
export class DrinksService {
  constructor(
    @Inject(TeasService) private readonly teasService: TeasService,
    @Inject(CoffeesService) private readonly coffeeService: CoffeesService,
  ) {}

  async findAll(): Promise<Drink[]> {
    const teas = await this.teasService.findAll();
    const coffees = await this.coffeeService.findAll();
    const drinks = [...teas, ...coffees];
    return drinks;
  }
}
