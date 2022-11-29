import { Test, TestingModule } from '@nestjs/testing';
import { TeaResolver } from './tea.resolver';
import { TeaService } from './tea.service';

describe('TeaResolver', () => {
  let resolver: TeaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeaResolver, TeaService],
    }).compile();

    resolver = module.get<TeaResolver>(TeaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
