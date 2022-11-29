import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeaInput } from './dto/create-tea.input';
import { UpdateTeaInput } from './dto/update-tea.input';
import { Tea } from './entities/tea.entity';

@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(Tea) private readonly teaRepository: Repository<Tea>,
  ) {}

  async create(createTeaInput: CreateTeaInput) {
    return await this.teaRepository.save(createTeaInput);
  }

  async findAll() {
    return await this.teaRepository.find();
  }

  async findOne(id: number) {
    const tee = await this.teaRepository.findOne({ where: { id } });
    if (!tee) {
      throw new Error(`Tea #${id} not found`);
    }
    return tee;
  }

  async update(id: number, updateTeaInput: UpdateTeaInput) {
    const tee = await this.teaRepository.preload({
      id,
      ...updateTeaInput,
    });
    if (!tee) {
      throw new Error(`Tea #${id} not found`);
    }
    return this.teaRepository.save(tee);
  }

  async remove(id: number) {
    const tee = await this.findOne(id);
    return this.teaRepository.remove(tee);
  }
}
