import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TeasService } from './teas.service';
import { Tea } from './entities/tea.entity';
import { CreateTeaInput } from './dto/create-tea.input';
import { UpdateTeaInput } from './dto/update-tea.input';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Tea)
export class TeasResolver {
  constructor(private readonly teasService: TeasService) {}

  @Mutation(() => Tea, { name: 'createTea' })
  create(@Args('createTeaInput') createTeaInput: CreateTeaInput) {
    return this.teasService.create(createTeaInput);
  }

  @Query(() => [Tea], { name: 'teas', nullable: true })
  findAll() {
    return this.teasService.findAll();
  }

  @Query(() => Tea, { name: 'tea' })
  findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.teasService.findOne(id);
  }

  @Mutation(() => Tea, { name: 'updateTea' })
  updateTea(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateTeaInput') updateTeaInput: UpdateTeaInput,
  ) {
    return this.teasService.update(id, updateTeaInput);
  }

  @Mutation(() => Tea, { name: 'removeTea' })
  remove(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.teasService.remove(id);
  }
}
