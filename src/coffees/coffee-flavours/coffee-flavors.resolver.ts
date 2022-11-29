import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Coffee } from '../entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { CoffeeFlavoursService } from './coffee-flavours.service';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(private coffeeFlavoursService: CoffeeFlavoursService) {}

  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    return this.coffeeFlavoursService.getFlavorsOfCoffee(coffee);
  }
}
