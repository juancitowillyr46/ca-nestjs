import { UserRepositoryInterface } from "src/domain/repositories/contracts/user.repository.interface";
import { UserUseCaseInterface } from "../contracts/user.usecase.interface";
import { UserRequestDto } from "src/application/dtos/user-request.dto";
import { UserResponseDto } from "src/application/dtos/user-response.dto";

export class UserReadAllUseCase implements UserUseCaseInterface {
    lstUserDto: UserResponseDto[] = [];
    constructor(private userRepository: UserRepositoryInterface){
        
    }

    execute(input: UserRequestDto): UserResponseDto[] {
        let lstUsers = this.userRepository.readAll();
        lstUsers.forEach(element => {
            this.lstUserDto.push(element);
        });
        return lstUsers;
    }
}