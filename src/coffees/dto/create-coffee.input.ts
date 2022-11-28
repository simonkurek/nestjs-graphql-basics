import { InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType({ description: 'Create coffee input' })
export class CreateCoffeeInput {
  // @Field(() => String, { description: 'A new coffee name' })
  @MinLength(3)
  name: string;
  brand: string;
  flavors: string[];
}
