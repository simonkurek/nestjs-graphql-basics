import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TeaService } from './tea.service';
import { Tea } from './entities/tea.entity';
import { CreateTeaInput } from './dto/create-tea.input';
import { UpdateTeaInput } from './dto/update-tea.input';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Tea)
export class TeaResolver {
  constructor(private readonly teaService: TeaService) {}

  @Mutation(() => Tea)
  create(@Args('createTeaInput') createTeaInput: CreateTeaInput) {
    return this.teaService.create(createTeaInput);
  }

  @Query(() => [Tea], { name: 'tea' })
  findAll() {
    return this.teaService.findAll();
  }

  @Query(() => Tea, { name: 'tea' })
  findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.teaService.findOne(id);
  }

  @Mutation(() => Tea)
  updateTea(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateTeaInput') updateTeaInput: UpdateTeaInput,
  ) {
    return this.teaService.update(id, updateTeaInput);
  }

  @Mutation(() => Tea)
  remove(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.teaService.remove(id);
  }
}
