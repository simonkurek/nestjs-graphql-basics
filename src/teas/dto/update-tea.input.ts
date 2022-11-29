import { CreateTeaInput } from './create-tea.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeaInput extends PartialType(CreateTeaInput) {}
