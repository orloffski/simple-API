import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Incorrect Email' })
	email: string;

	@IsString({ message: 'Empty password' })
	password: string;

	@IsString({ message: 'Empty name' })
	name: string;
}
