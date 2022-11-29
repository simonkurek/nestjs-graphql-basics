import { Module } from '@nestjs/common';
import { DrinksResolver } from './drinks.resolver';

@Module({
  providers: [DrinksResolver],
})
export class DrinksModule {}
