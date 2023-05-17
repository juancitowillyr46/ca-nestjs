import { Controller, Body, Get, Post, Put, Inject, Param, ForbiddenException } from '@nestjs/common';
import { UserUseCaseInterface } from 'src/application/usecases/users/contracts/user.usecase.interface';
import { UserRequestDto } from '../dto/user-request.dto';
import { ResponseMessage } from 'src/presentation/core/decorators/response.decorator';
import { USER_INSERTED, USER_UPDATED } from '../constants/user.response.constant';
//import { UserResponseDto } from 'src/application/dtos/users/user-response.dto';
import { UserReadByIdParam } from 'src/application/types/users/user-read-by-id.type';

@Controller('users')
export class UsersController {

    constructor(
      @Inject('UserCreateUseCase') private userCreateUseCase: UserUseCaseInterface,
      // @Inject('UserUpdateUseCase') private userUpdateUseCase: UserUseCaseInterface,
      @Inject('UserReadByIdUseCase') private UserReadByIdUseCase: UserUseCaseInterface,
      // @Inject('UserReadAllUseCase') private UserReadAllUseCase: UserUseCaseInterface
    ){

    }

    // @Get()
    // getAllUser(): any {
    //   return this.UserReadAllUseCase.execute({});
    // }

    @Post()
    @ResponseMessage(USER_INSERTED)
    async postUser(@Body() userRequest: UserRequestDto): Promise<boolean | null> {
      return await this.userCreateUseCase.execute(userRequest);
    }

    @Get(":id")
    async getUserById(@Param("id") id: string): Promise<UserReadByIdParam> {
        let readById = this.UserReadByIdUseCase.execute({id: id});
        return await readById;
    }



    // @Put(":id")
    // @ResponseMessage(USER_UPDATED)
    // putUser(@Param("id") id: string,@Body() userRequest: UserRequestDto): boolean {
    //   return this.userUpdateUseCase.execute(userRequest);
    // }
}
