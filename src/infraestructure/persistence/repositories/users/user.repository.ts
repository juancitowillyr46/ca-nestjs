import { UserEntity } from "../../../../domain/entities/users/user.entity";
import { UserRepositoryInterface } from "../../../../domain/repositories/users/contracts/user.repository.interface";
import { User } from "./user.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateParam } from "src/application/types/users/user-create.type";
import { UserReadByIdParam } from "src/application/types/users/user-read-by-id.type";

export class UserRepository implements UserRepositoryInterface {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){

    }

    async add(entity: UserCreateParam): Promise<boolean> {
        
        let done = null;

        done = await this.usersRepository.save({
            username: entity.username,
            fullname: entity.fullname,
            password: entity.password,
            email: entity.email
        });

        return (done);
    }

    async readById(id: number): Promise<UserReadByIdParam | null> {

        let findUser = await this.usersRepository.findOneBy({id});

        let returnUser: UserReadByIdParam = {
            id: findUser.id,
            username: findUser.username,
            email: findUser.email,
            fullname: findUser.fullname,
            password: findUser.password
        };

        return returnUser;
    }
    
}