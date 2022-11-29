import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { TeasModule } from 'src/teas/teas.module';
import { DrinksResolver } from './drinks.resolver';
import { DrinksService } from './drinks.service';

@Module({
  imports: [CoffeesModule, TeasModule],
  // imports: [CoffeesService, TeasService],
  providers: [DrinksResolver, DrinksService],
})
export class DrinksModule {}
