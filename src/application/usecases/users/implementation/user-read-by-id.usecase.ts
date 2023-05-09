import { UserRepositoryInterface } from "src/domain/repositories/contracts/user.repository.interface";
import { UserUseCaseInterface } from "../contracts/user.usecase.interface";
import { UserEntity } from "src/domain/entities/user.entity";
import { UserRequestDto } from "src/application/dtos/user-request.dto";
import { UserResponseDto } from "src/application/dtos/user-response.dto";
// import { CustomValidateError } from "src/presentation/core/exceptions/api.exception";
import { UsersValidationException } from "src/application/exceptions/users/users.validation.exception";

export class UserReadByUseCase implements UserUseCaseInterface {

    constructor(private userRepository: UserRepositoryInterface){
        
    }

    execute(input: UserRequestDto): UserResponseDto {
        try {
            let userEntity = this.userRepository.readById(input.id);
            //console.log(input.id);

            let userResponseDto = new UserRequestDto();

            userResponseDto.id = input.id;
            userResponseDto.fullname = userEntity.fullname;
            userResponseDto.username = userEntity.username;
            userResponseDto.email = userEntity.email;
            userResponseDto.password = userEntity.password;
            
            return userResponseDto;
        }
        catch(e) {

            throw new UsersValidationException();
            //return new UserRequestDto();
        }
        
    }
}