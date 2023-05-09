export class ApiException extends Error {
    constructor(){
        super()
        this.message = 'Error en la API'
    }
}