import { ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface';

@ObjectType({ description: 'Tea', implements: () => Drink })
export class Tea implements Drink {
  name: string;
}
