import { Module } from '@nestjs/common';
import { TeasService } from './teas.service';
import { TeasResolver } from './teas.resolver';
import { Tea } from './entities/tea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  providers: [TeasResolver, TeasService],
  exports: [TeasService],
})
export class TeasModule {}
