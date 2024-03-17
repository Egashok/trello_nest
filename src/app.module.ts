import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { User } from "./users/users.model";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
   }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password:  String(process.env.DB_PASSWORD),
      database: String(process.env.POSTGRES_DB),
      models: [User],
      autoLoadModels: true
    }),UsersModule
  ],
})
export class AppModule {}
