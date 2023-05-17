import { BaseValidationException } from "../base.validation.exception";

export class UsersEmailValidationException extends BaseValidationException {
    constructor(){
        super();
        this.message = 'El correo ya existe'
    }
}