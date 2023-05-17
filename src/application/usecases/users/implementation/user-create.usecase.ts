import { UserRepositoryInterface } from "src/domain/repositories/users/contracts/user.repository.interface";
import { UserUseCaseInterface } from "../contracts/user.usecase.interface";
import { UserEntity } from "src/domain/entities/users/user.entity";
import { UserRequestDto } from "src/application/dtos/users/user-request.dto";
import { v4 as uuidv4 } from 'uuid';
import { UserUseCase } from "./user.usecase";
import { UserCreateParam } from "src/application/types/users/user-create.type";
import { UsersEmailValidationException } from "src/application/exceptions/users/users-email.validation.exception";

// extends UserUseCase
export class UserCreateUseCase implements UserUseCaseInterface  {

    private userEntity;

    constructor(private userRepository: UserRepositoryInterface){
        //super();        
    }

    async execute(requestBody: UserCreateParam): Promise<boolean> {

        let userEntity = new UserEntity();
        let validateEmail = userEntity.isEqualEmail('jrodas','jrodas');
        if(validateEmail) {
            throw new UsersEmailValidationException();
        }

        let createUser: UserCreateParam = {
            username: requestBody.username,
            fullname: requestBody.fullname,
            email: requestBody.email,
            password: requestBody.password
        };

        return this.userRepository.add(createUser);
    }
}