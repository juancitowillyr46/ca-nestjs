import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
//import { UserRepository } from 'src/infraestructure/persistence/repositories/user-repository';
import { UserCreateUseCase } from 'src/application/usecases/users/implementation/user-create.usecase';
// import { IUserAddUseCaseToken } from 'src/application/usecases/contracts/user-add-usecase.interface';
import { UserRepository } from 'src/infraestructure/persistence/repositories/user.repository';
import { UserRepositoryInterface } from 'src/domain/repositories/contracts/user.repository.interface';
import { UserUpdateUseCase } from 'src/application/usecases/users/implementation/user-update.usecase';
import { UserReadAllUseCase } from 'src/application/usecases/users/implementation/user-read-all.usecase';
import { UserReadByUseCase } from 'src/application/usecases/users/implementation/user-read-by-id.usecase';

//export let IUserRepositoryToken = Symbol('IUserRepository');

@Module({
  controllers: [UsersController],
  providers: [
    //{ provide: IUserRepositoryToken, useClass: UserRepository },
    //{ provide: IUserAddUseCaseToken, useClass: UserAddUseCase }
    /*{
      provide: UserRepository,
      useFactory: () => {

      }
    },*/
    {
      provide: UserRepository,
      useClass: UserRepository,
    },
    {
      provide: 'UserCreateUseCase',
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new UserCreateUseCase(userRepo);
      },
      inject: [UserRepository]
    },
    {
      provide: 'UserUpdateUseCase',
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new UserUpdateUseCase(userRepo);
      },
      inject: [UserRepository]
    },
    {
      provide: 'UserReadByIdUseCase',
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new UserReadByUseCase(userRepo);
      },
      inject: [UserRepository]
    },
    {
      provide: 'UserReadAllUseCase',
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new UserReadAllUseCase(userRepo);
      },
      inject: [UserRepository]
    }
  ],
  //exports: [IUserAddUseCaseToken]
  // IUserRepositoryToken, 
})
export class UsersModule {}
