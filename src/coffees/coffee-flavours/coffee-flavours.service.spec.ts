import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeFlavoursService } from './coffee-flavours.service';

describe('CoffeeFlavoursService', () => {
  let service: CoffeeFlavoursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeFlavoursService],
    }).compile();

    service = module.get<CoffeeFlavoursService>(CoffeeFlavoursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
