import { BaseEntity } from "../common/base.entity";

export class UserEntity extends BaseEntity {
    fullname: string;
    email: string;
    password: string;
    username: string;
}