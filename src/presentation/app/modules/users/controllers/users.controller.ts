import { Controller, Body, Get, Post, Put, Inject, Param, ForbiddenException } from '@nestjs/common';
import { UserUseCaseInterface } from 'src/application/usecases/users/contracts/user.usecase.interface';
import { UserRequestDto } from '../dto/user-request.dto';
import { ResponseMessage } from 'src/presentation/core/decorators/response.decorator';
import { USER_INSERTED, USER_UPDATED } from '../constants/user.response.constant';
import { UserResponseDto } from 'src/application/dtos/user-response.dto';

@Controller('users')
export class UsersController {

    constructor(
      @Inject('UserCreateUseCase') private userCreateUseCase: UserUseCaseInterface,
      @Inject('UserUpdateUseCase') private userUpdateUseCase: UserUseCaseInterface,
      @Inject('UserReadByIdUseCase') private UserReadByIdUseCase: UserUseCaseInterface,
      @Inject('UserReadAllUseCase') private UserReadAllUseCase: UserUseCaseInterface
    ){

    }

    @Get()
    getAllUser(): any {
      return this.UserReadAllUseCase.execute({});
    }

    @Get(":id")
    getUserById(@Param("id") id: string): UserResponseDto {
      //try {
        let userRequest = new UserRequestDto();
        userRequest.id = id;
        
        let userEntity = this.UserReadByIdUseCase.execute(userRequest);
        let userResponseDto = new UserResponseDto();
        userResponseDto.id = userEntity.id;
        return userResponseDto;
      //} catch (error) { 
        //throw new ForbiddenException(error);
      //}
      
    }

    @Post()
    @ResponseMessage(USER_INSERTED)
    postUser(@Body() userRequest: UserRequestDto): boolean {
      return this.userCreateUseCase.execute(userRequest);
    }

    @Put(":id")
    @ResponseMessage(USER_UPDATED)
    putUser(@Param("id") id: string,@Body() userRequest: UserRequestDto): boolean {
      return this.userUpdateUseCase.execute(userRequest);
    }
}
