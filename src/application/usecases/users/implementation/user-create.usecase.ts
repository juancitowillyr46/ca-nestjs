import { UserRepositoryInterface } from "src/domain/repositories/contracts/user.repository.interface";
import { UserUseCaseInterface } from "../contracts/user.usecase.interface";
import { UserEntity } from "src/domain/entities/user.entity";
import { UserRequestDto } from "src/application/dtos/user-request.dto";
import { v4 as uuidv4 } from 'uuid';

export class UserCreateUseCase implements UserUseCaseInterface {

    constructor(private userRepository: UserRepositoryInterface){
        
    }

    execute(input: UserRequestDto): boolean {
        let userEntity = new UserEntity();
        userEntity.id = uuidv4();
        userEntity.username = input.username;
        userEntity.fullname = input.fullname;
        userEntity.email = input.email;
        return this.userRepository.add(userEntity);
    }
}