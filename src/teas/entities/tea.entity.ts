import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'Tea', implements: () => Drink })
export class Tea implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  name: string;
}
