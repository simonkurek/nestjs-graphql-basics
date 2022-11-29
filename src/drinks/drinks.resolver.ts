import { Query, Resolver } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface';
import { DrinksService } from './drinks.service';

@Resolver()
export class DrinksResolver {
  constructor(private readonly drinksService: DrinksService) {}

  @Query(() => [Drink], { name: 'drinks' })
  async findAll(): Promise<Drink[]> {
    return this.drinksService.findAll();
  }
}
