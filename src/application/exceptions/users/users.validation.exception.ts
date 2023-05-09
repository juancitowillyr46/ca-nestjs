import { BaseValidationException } from "../base.validation.exception";

export class UsersValidationException extends BaseValidationException {
    constructor(){
        super();
        this.message = 'Existe un problema con el servicio'
    }
}