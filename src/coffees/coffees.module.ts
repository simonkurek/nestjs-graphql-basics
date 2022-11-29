import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CoffeeFlavoursModule } from './coffee-flavours/coffee-flavours.module';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee]), CoffeeFlavoursModule],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
