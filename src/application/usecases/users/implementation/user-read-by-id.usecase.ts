import { UserRepositoryInterface } from "src/domain/repositories/users/contracts/user.repository.interface";
import { UserUseCaseInterface } from "../contracts/user.usecase.interface";
import { UserEntity } from "src/domain/entities/users/user.entity";
import { UserRequestDto } from "src/application/dtos/users/user-request.dto";
import { UserResponseDto } from "src/application/dtos/users/user-response.dto";
// import { CustomValidateError } from "src/presentation/core/exceptions/api.exception";
import { UsersValidationException } from "src/application/exceptions/users/users.validation.exception";
import { UserUseCase } from "./user.usecase";
import { UserReadByIdParam } from "src/application/types/users/user-read-by-id.type";
import { UserCreateParam } from "src/application/types/users/user-create.type";

// extends UserUseCase
// 
export class UserReadByUseCase implements UserUseCaseInterface {

    constructor(private userRepository: UserRepositoryInterface){
        
    }

    async execute(requestBody: UserCreateParam): Promise<UserReadByIdParam | null> {
   
        let readById = await this.userRepository.readById(requestBody.id);
        
        let createUser: UserReadByIdParam = {
            id: readById.id,
            username: readById.username,
            fullname: readById.fullname,
            email: readById.email,
            password: readById.password
        }

        return createUser;

    }
}