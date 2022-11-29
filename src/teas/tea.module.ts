import { Module } from '@nestjs/common';
import { TeaService } from './tea.service';
import { TeaResolver } from './tea.resolver';
import { Tea } from './entities/tea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  providers: [TeaResolver, TeaService],
})
export class TeaModule {}
