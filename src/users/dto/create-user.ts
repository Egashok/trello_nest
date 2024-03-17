import { ApiProperty } from '@nestjs/swagger/dist';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @Length(4, 16, {})
  readonly password: string;
}
