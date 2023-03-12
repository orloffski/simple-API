import { injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './user.service.interface';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		` check user
         if user exist - return null
         if not exist - create add user
         `;
		return newUser;
	}

	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
