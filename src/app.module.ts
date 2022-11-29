import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TeasModule } from './teas/teas.module';
import { CommonModule } from './common/common.module';
import { DrinksModule } from './drinks/drinks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
        // dateScalarMode: 'timestamp',
        // orphanedTypes: [Tea], types that are not used in any other type
      },
    }),
    CoffeesModule,
    TeasModule,
    CommonModule,
    DrinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
