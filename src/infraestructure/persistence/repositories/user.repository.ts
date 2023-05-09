import { UserEntity } from "../../../domain/entities/user.entity";
import { UserRepositoryInterface } from "../../../domain/repositories/contracts/user.repository.interface";

export class UserRepository implements UserRepositoryInterface {

    private lstUser: UserEntity[] = [];

    constructor(){
        this.lstUser.push({
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            email: 'jrodas@hotmail.com',
            password: '123444',
            fullname: 'Juan Rodas',
            username: 'juan'
        });
    }


    add(entity: UserEntity): boolean {
        this.lstUser.push(entity);
        return true;
    }
    readById(id: string): UserEntity {
        return this.lstUser.find(f => f.id == id);
    }
    readAllById(id: string, queries?: any): UserEntity[] {
        return this.lstUser;
    }
    readAll(queries?: any): UserEntity[] {
        return this.lstUser;
    }
    update(id: string, entity: UserEntity): boolean {
        let index = this.lstUser.findIndex(f => f.id == id);

        /*let user = new UserEntity();

        user.id = id;
        user.fullname = entity.fullname;
        user.username = entity.username;
        user.password = entity.password;
        user.email = entity.email;*/

        this.lstUser[index] = entity;
        return true;
    }
    deleteById(id: string): boolean {
        let index = this.lstUser.findIndex(f => f.id == id);
        delete this.lstUser[index];
        return true;
    }
    
}