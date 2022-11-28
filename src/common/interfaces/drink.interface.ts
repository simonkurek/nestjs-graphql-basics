import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'A drink' })
export abstract class Drink {
  @Field()
  name: string;
}
