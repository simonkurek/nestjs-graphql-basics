import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity';
import { CoffeeFlavorsResolver } from './coffee-flavors.resolver';
import { CoffeeFlavoursService } from './coffee-flavours.service';

@Module({
  imports: [TypeOrmModule.forFeature([Flavor])],
  providers: [CoffeeFlavoursService, CoffeeFlavorsResolver],
  exports: [CoffeeFlavoursService],
})
export class CoffeeFlavoursModule {}
