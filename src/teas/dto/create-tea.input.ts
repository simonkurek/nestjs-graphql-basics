import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateTeaInput {
  name: string;
}
