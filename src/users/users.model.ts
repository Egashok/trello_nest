import { ApiProperty } from '@nestjs/swagger/dist';
import { Table, DataType, Column, Model, HasMany } from 'sequelize-typescript';
import {IUserCreator} from './interfaces/IUserCreator';
import { CreateUserDto } from './dto/create-user';



@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreator> {


  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    unique:   true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty()
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty()
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  // @HasMany(() => ColumnCards)
  // columnCards: string;
}
