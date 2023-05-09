import { UserRepositoryInterface } from "src/domain/repositories/contracts/user.repository.interface";

import { UserEntity } from "src/domain/entities/user.entity";
import { UserRequestDto } from "src/application/dtos/user-request.dto";
import { UserUseCaseInterface } from "../contracts/user.usecase.interface";

export class UserUpdateUseCase implements UserUseCaseInterface {

    constructor(private userRepository: UserRepositoryInterface){
        
    }

    execute(input: UserRequestDto): boolean {
        let userEntity = new UserEntity();
        userEntity.id = input.id;
        userEntity.username = input.username;
        userEntity.fullname = input.fullname;
        userEntity.email = input.email;
        return this.userRepository.update(input.id, userEntity);
    }
}